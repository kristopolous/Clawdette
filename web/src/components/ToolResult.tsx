'use client'

import { useState } from 'react'

interface ToolResultProps {
  toolName: string
  toolInput: Record<string, unknown>
  content: string
  isRunning?: boolean
}

export default function ToolResult({ toolName, toolInput, content, isRunning }: ToolResultProps) {
  const [expanded, setExpanded] = useState(false)
  const preview = content.slice(0, 200)
  const isTruncated = content.length > 200

  const formatInput = () => {
    const entries = Object.entries(toolInput)
    if (entries.length === 1) return String(entries[0][1])
    return JSON.stringify(toolInput, null, 2)
  }

  return (
    <div className="my-2 border border-[#30363d] rounded-md overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-2 px-3 py-2 bg-[#161b22] hover:bg-[#1c2128] transition-colors text-left"
      >
        <span className="text-xs font-mono text-[#58a6ff]">{toolName}</span>
        <span className="text-xs text-[#8b949e] truncate font-mono">{formatInput()}</span>
        {isRunning && <span className="ml-auto text-xs text-[#d29922] animate-pulse">running...</span>}
        <span className="ml-auto text-xs text-[#8b949e]">{expanded ? '▲' : '▼'}</span>
      </button>
      {expanded && (
        <div className="px-3 py-2 bg-[#0d1117] border-t border-[#30363d]">
          <pre className="text-xs font-mono whitespace-pre-wrap text-[#8b949e] max-h-64 overflow-y-auto">
            {isTruncated && !expanded ? preview + '...' : content}
          </pre>
          {isTruncated && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="text-xs text-[#58a6ff] mt-1 hover:underline"
            >
              Show more
            </button>
          )}
        </div>
      )}
    </div>
  )
}
