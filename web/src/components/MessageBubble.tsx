'use client'

import { marked } from 'marked'
import { useState, useEffect } from 'react'

interface MessageBubbleProps {
  role: 'user' | 'assistant'
  content: string
  isStreaming?: boolean
}

export default function MessageBubble({ role, content, isStreaming }: MessageBubbleProps) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    if (role === 'assistant') {
      Promise.resolve(marked(content)).then(html => setHtml(html))
    }
  }, [content, role])

  if (role === 'user') {
    return (
      <div className="bg-[#1f2937] rounded-lg p-4 my-2">
        <div className="whitespace-pre-wrap text-sm">{content}</div>
      </div>
    )
  }

  return (
    <div className="my-2">
      <div
        className="prose prose-invert prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {isStreaming && <span className="inline-block w-2 h-4 bg-[#58a6ff] animate-pulse ml-1" />}
    </div>
  )
}
