'use client'

import { useState } from 'react'

interface ApiKeyInputProps {
  onSubmit: (apiKey: string, model: string) => void
}

export default function ApiKeyInput({ onSubmit }: ApiKeyInputProps) {
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState('claude-sonnet-4-20250514')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (apiKey.trim()) {
      onSubmit(apiKey.trim(), model)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Claudette Web</h1>
        <p className="text-muted text-center mb-8">AI coding assistant with virtualized filesystem</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
              API Key
            </label>
            <input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-ant-..."
              className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md text-sm focus:outline-none focus:border-[#58a6ff]"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium mb-1">
              Model
            </label>
            <select
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md text-sm focus:outline-none focus:border-[#58a6ff]"
            >
              <option value="claude-sonnet-4-20250514">Claude Sonnet 4</option>
              <option value="claude-opus-4-20250514">Claude Opus 4</option>
              <option value="claude-haiku-4-20250514">Claude Haiku 4</option>
              <option value="gpt-4o">GPT-4o</option>
              <option value="gpt-4o-mini">GPT-4o Mini</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!apiKey.trim()}
            className="w-full px-4 py-2 bg-[#58a6ff] text-white rounded-md text-sm font-medium hover:bg-[#79b8ff] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Start Session
          </button>
        </form>
        <p className="text-xs text-muted mt-4 text-center">
          Your API key is only used client-side and never stored.
        </p>
      </div>
    </div>
  )
}
