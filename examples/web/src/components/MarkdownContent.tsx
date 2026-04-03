'use client'

import { marked } from 'marked'
import { useState, useEffect, useMemo } from 'react'

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    Promise.resolve(marked.parse(content)).then(result => {
      setHtml(typeof result === 'string' ? result : '')
    })
  }, [content])

  const parts = useMemo(() => {
    const segments: Array<{ type: 'html' | 'code'; content: string; language?: string }> = []
    const regex = /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(html)) !== null) {
      if (match.index > lastIndex) {
        segments.push({ type: 'html', content: html.slice(lastIndex, match.index) })
      }
      segments.push({ type: 'code', content: match[2], language: match[1] })
      lastIndex = match.index + match[0].length
    }

    if (lastIndex < html.length) {
      segments.push({ type: 'html', content: html.slice(lastIndex) })
    }

    return segments
  }, [html])

  if (!content) return null

  return (
    <div className="prose prose-invert prose-sm max-w-none">
      {parts.length > 0 ? parts.map((part, i) =>
        part.type === 'code' ? (
          <pre key={i} className="my-3 rounded-lg overflow-hidden border border-[#30363d]">
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#161b22] border-b border-[#30363d]">
              <span className="text-xs text-[#8b949e] font-mono">{part.language || 'text'}</span>
            </div>
            <code className="block p-3 bg-[#0d1117] overflow-x-auto text-xs font-mono text-[#c9d1d9]">
              {part.content}
            </code>
          </pre>
        ) : (
          <div key={i} dangerouslySetInnerHTML={{ __html: part.content }} />
        )
      ) : (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </div>
  )
}
