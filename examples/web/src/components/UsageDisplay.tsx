'use client'

interface UsageStats {
  inputTokens: number
  outputTokens: number
  totalTokens: number
  estimatedCost: number
  requests: number
}

interface UsageDisplayProps {
  stats: UsageStats
}

const MODEL_PRICES: Record<string, { input: number; output: number }> = {
  'claude-sonnet-4-20250514': { input: 3.75, output: 15.0 },
  'claude-opus-4-20250514': { input: 15.0, output: 75.0 },
  'claude-haiku-4-20250514': { input: 0.80, output: 4.0 },
  'gpt-4o': { input: 2.50, output: 10.0 },
  'gpt-4o-mini': { input: 0.15, output: 0.60 },
}

export function calculateCost(
  inputTokens: number,
  outputTokens: number,
  model: string
): number {
  const pricing = MODEL_PRICES[model]
  if (!pricing) return 0
  return (inputTokens / 1_000_000) * pricing.input + (outputTokens / 1_000_000) * pricing.output
}

export default function UsageDisplay({ stats }: UsageDisplayProps) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono text-[#8b949e]">
      <span title="Input tokens">↓{stats.inputTokens.toLocaleString()}</span>
      <span title="Output tokens">↑{stats.outputTokens.toLocaleString()}</span>
      <span title="Total tokens">{stats.totalTokens.toLocaleString()} tokens</span>
      <span className="text-[#58a6ff]">${stats.estimatedCost.toFixed(4)}</span>
      <span title="API requests">{stats.requests} reqs</span>
    </div>
  )
}
