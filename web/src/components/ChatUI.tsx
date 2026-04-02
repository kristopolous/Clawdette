'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import MessageBubble from './MessageBubble'
import PromptInput from './PromptInput'
import ToolResult from './ToolResult'

interface StreamEvent {
  type: 'text' | 'tool_use' | 'tool_result' | 'error' | 'done' | 'stream_request_start'
  text?: string
  tool_use?: { id: string; name: string; input: Record<string, unknown> }
  tool_result?: { tool_use_id: string; content: string }
  error?: string
  sessionId?: string
}

interface ToolUse {
  id: string
  name: string
  input: Record<string, unknown>
  result?: string
  running: boolean
}

interface AssistantMessage {
  type: 'assistant'
  text: string
  toolUses: ToolUse[]
  isStreaming: boolean
}

interface UserMessage {
  type: 'user'
  text: string
}

type Message = UserMessage | AssistantMessage

export default function ChatUI({ apiKey, model }: { apiKey: string; model: string }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const handleSend = useCallback(async (text: string) => {
    const userMsg: UserMessage = { type: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setIsProcessing(true)

    const assistantMsg: AssistantMessage = { type: 'assistant', text: '', toolUses: [], isStreaming: true }
    setMessages(prev => [...prev, assistantMsg])

    abortRef.current = new AbortController()

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, apiKey, model, sessionId }),
        signal: abortRef.current.signal,
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || trimmed === 'data: [DONE]') continue
          if (!trimmed.startsWith('data: ')) continue

          try {
            const event: StreamEvent = JSON.parse(trimmed.slice(6))

            if (event.sessionId && !sessionId) {
              setSessionId(event.sessionId)
            }

            setMessages(prev => {
              const updated = [...prev]
              const lastMsg = updated[updated.length - 1]

              if (lastMsg?.type === 'assistant') {
                const assistant = { ...lastMsg }

                if (event.type === 'text' && event.text) {
                  assistant.text += event.text
                } else if (event.type === 'tool_use' && event.tool_use) {
                  assistant.toolUses = [
                    ...assistant.toolUses,
                    {
                      id: event.tool_use.id,
                      name: event.tool_use.name,
                      input: event.tool_use.input,
                      running: true,
                    },
                  ]
                } else if (event.type === 'tool_result' && event.tool_result) {
                  assistant.toolUses = assistant.toolUses.map(tu =>
                    tu.id === event.tool_result!.tool_use_id
                      ? { ...tu, result: event.tool_result!.content, running: false }
                      : tu
                  )
                } else if (event.type === 'error' && event.error) {
                  assistant.text += `\n\nError: ${event.error}`
                  assistant.isStreaming = false
                } else if (event.type === 'done') {
                  assistant.isStreaming = false
                }

                updated[updated.length - 1] = assistant
              }

              return updated
            })
          } catch {
            // skip malformed SSE
          }
        }
      }
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return
      setMessages(prev => {
        const updated = [...prev]
        const last = updated[updated.length - 1]
        if (last?.type === 'assistant') {
          updated[updated.length - 1] = {
            ...last,
            text: last.text + `\n\nError: ${e instanceof Error ? e.message : String(e)}`,
            isStreaming: false,
          }
        }
        return updated
      })
    } finally {
      setIsProcessing(false)
      abortRef.current = null
    }
  }, [apiKey, model, sessionId])

  const handleAbort = useCallback(() => {
    abortRef.current?.abort()
    setMessages(prev => {
      const updated = [...prev]
      const last = updated[updated.length - 1]
      if (last?.type === 'assistant') {
        updated[updated.length - 1] = { ...last, isStreaming: false }
      }
      return updated
    })
    setIsProcessing(false)
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b border-[#30363d] px-4 py-2 flex items-center justify-between bg-[#161b22]">
        <h1 className="text-sm font-semibold">Claudette Web</h1>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#8b949e] font-mono">{model}</span>
          {sessionId && (
            <span className="text-xs text-[#8b949e] font-mono">
              {sessionId.slice(0, 8)}...
            </span>
          )}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 && (
            <div className="text-center text-[#8b949e] mt-16">
              <p className="text-lg font-medium mb-2">Welcome to Claudette Web</p>
              <p className="text-sm">Ask me to create files, write code, or explore the virtualized filesystem.</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i}>
              {msg.type === 'user' ? (
                <MessageBubble role="user" content={msg.text} />
              ) : (
                <>
                  {msg.toolUses.length > 0 && (
                    <div className="mb-2">
                      {msg.toolUses.map(tu => (
                        <ToolResult
                          key={tu.id}
                          toolName={tu.name}
                          toolInput={tu.input}
                          content={tu.result || ''}
                          isRunning={tu.running}
                        />
                      ))}
                    </div>
                  )}
                  {msg.text && (
                    <MessageBubble role="assistant" content={msg.text} isStreaming={msg.isStreaming} />
                  )}
                </>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="relative">
        {isProcessing && (
          <button
            onClick={handleAbort}
            className="absolute top-2 right-2 z-10 px-3 py-1 bg-[#f8514966] border border-[#f85149] rounded-md text-xs text-[#f85149] hover:bg-[#f8514933] transition-colors"
          >
            Stop
          </button>
        )}
        <PromptInput onSend={handleSend} disabled={isProcessing} />
      </div>
    </div>
  )
}
