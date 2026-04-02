'use client'

import { useState } from 'react'

interface TerminalOutputProps {
  command: string
  output: string
  exitCode: number
  isRunning?: boolean
}

export default function TerminalOutput({ command, output, exitCode, isRunning }: TerminalOutputProps) {
  const [expanded, setExpanded] = useState(true)

  const hasError = exitCode !== 0
  const lines = output.split('\n')
  const displayLines = expanded ? lines : lines.slice(-3)

  return (
    <div className="my-2 rounded-lg overflow-hidden border border-[#30363d] bg-[#0d1117]">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-2 px-3 py-2 bg-[#161b22] hover:bg-[#1c2128] transition-colors text-left"
      >
        <span className="text-xs text-[#8b949e]">$</span>
        <code className="text-xs font-mono text-[#c9d1d9] truncate flex-1">{command}</code>
        {isRunning && (
          <span className="flex items-center gap-1 text-xs text-[#d29922]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d29922] animate-pulse" />
            running
          </span>
        )}
        {!isRunning && (
          <span className={`text-xs font-mono ${hasError ? 'text-[#f85149]' : 'text-[#3fb950]'}`}>
            [{exitCode}]
          </span>
        )}
        <span className="text-xs text-[#8b949e]">{expanded ? '▲' : '▼'}</span>
      </button>
      {(expanded || lines.length <= 3) && (
        <pre className="px-3 py-2 text-xs font-mono text-[#c9d1d9] overflow-x-auto max-h-64 overflow-y-auto whitespace-pre-wrap">
          {output || <span className="text-[#8b949e] italic">No output</span>}
        </pre>
      )}
      {!expanded && lines.length > 3 && (
        <div className="px-3 py-1 text-xs text-[#8b949e] border-t border-[#30363d]">
          {lines.length - 3} more lines...
        </div>
      )}
    </div>
  )
}
