'use client'

import { useState } from 'react'

interface SettingsPanelProps {
  model: string
  systemPrompt: string
  maxTurns: number
  onModelChange: (model: string) => void
  onSystemPromptChange: (prompt: string) => void
  onMaxTurnsChange: (turns: number) => void
  onClose: () => void
}

const MODELS = [
  { value: 'claude-sonnet-4-20250514', label: 'Claude Sonnet 4' },
  { value: 'claude-opus-4-20250514', label: 'Claude Opus 4' },
  { value: 'claude-haiku-4-20250514', label: 'Claude Haiku 4' },
  { value: 'gpt-4o', label: 'GPT-4o' },
  { value: 'gpt-4o-mini', label: 'GPT-4o Mini' },
]

export default function SettingsPanel({
  model,
  systemPrompt,
  maxTurns,
  onModelChange,
  onSystemPromptChange,
  onMaxTurnsChange,
  onClose,
}: SettingsPanelProps) {
  const [localPrompt, setLocalPrompt] = useState(systemPrompt)

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg max-w-lg w-full shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d]">
          <h3 className="text-sm font-semibold text-[#c9d1d9]">Settings</h3>
          <button
            onClick={onClose}
            className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#8b949e] mb-1">Model</label>
            <select
              value={model}
              onChange={e => onModelChange(e.target.value)}
              className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-sm focus:outline-none focus:border-[#58a6ff]"
            >
              {MODELS.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-[#8b949e] mb-1">
              Max Tool Turns
            </label>
            <input
              type="number"
              value={maxTurns}
              onChange={e => onMaxTurnsChange(Math.max(1, parseInt(e.target.value) || 10))}
              min={1}
              max={50}
              className="w-24 px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-sm focus:outline-none focus:border-[#58a6ff]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#8b949e] mb-1">
              System Prompt
            </label>
            <textarea
              value={localPrompt}
              onChange={e => setLocalPrompt(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-xs font-mono resize-none focus:outline-none focus:border-[#58a6ff]"
            />
            <button
              onClick={() => onSystemPromptChange(localPrompt)}
              className="mt-2 px-3 py-1.5 text-xs bg-[#238636] text-white rounded hover:bg-[#2ea043] transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
