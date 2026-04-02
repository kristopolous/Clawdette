'use client'

import { useState } from 'react'
import ApiKeyInput from '@/components/ApiKeyInput'
import ChatUI from '@/components/ChatUI'

export default function Home() {
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [model, setModel] = useState('claude-sonnet-4-20250514')

  if (!apiKey) {
    return <ApiKeyInput onSubmit={(key, m) => { setApiKey(key); setModel(m) }} />
  }

  return <ChatUI apiKey={apiKey} model={model} />
}
