'use client'

import { useState, useRef, useEffect } from 'react'

interface PromptInputProps {
  onSend: (message: string) => void
  disabled?: boolean
}

export default function PromptInput({ onSend, disabled }: PromptInputProps) {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current && !disabled) {
      textareaRef.current.focus()
    }
  }, [disabled])

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (trimmed && !disabled) {
      onSend(trimmed)
      setValue('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleInput = () => {
    const el = textareaRef.current
    if (el) {
      el.style.height = 'auto'
      el.style.height = Math.min(el.scrollHeight, 200) + 'px'
    }
  }

  return (
    <div className="border-t border-[#30363d] bg-[#0d1117] p-4">
      <div className="max-w-4xl mx-auto flex gap-2 items-end">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          placeholder="Ask Claudette to build something..."
          rows={1}
          disabled={disabled}
          className="flex-1 px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-sm resize-none focus:outline-none focus:border-[#58a6ff] disabled:opacity-50 min-h-[40px] max-h-[200px]"
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !value.trim()}
          className="px-4 py-2 bg-[#58a6ff] text-white rounded-lg text-sm font-medium hover:bg-[#79b8ff] disabled:opacity-50 disabled:cursor-not-allowed transition-colors h-[40px]"
        >
          Send
        </button>
      </div>
    </div>
  )
}
