import { Message } from '../../types'

type ApiMessage = Record<string, unknown>

function msgContent(msg: ApiMessage | Message): string {
  const c = (msg as any).content
  return typeof c === 'string' ? c : JSON.stringify(c)
}

function msgRole(msg: ApiMessage | Message): string {
  return (msg as any).role || 'unknown'
}

export function estimateTokenCount(text: string): number {
  return Math.ceil(text.length / 4)
}

export function shouldCompact(messages: ApiMessage[], modelMaxTokens: number): boolean {
  const totalTokens = messages.reduce((sum, msg) => {
    return sum + estimateTokenCount(msgContent(msg))
  }, 0)
  return totalTokens > modelMaxTokens * 0.8
}

export function compactMessages(messages: ApiMessage[], maxTokens: number): ApiMessage[] {
  if (messages.length === 0) return []

  const systemMessages = messages.filter((m) => msgRole(m) === 'system')
  const conversationMessages = messages.filter((m) => msgRole(m) !== 'system')

  const compacted: ApiMessage[] = [...systemMessages]

  let currentTokens = compacted.reduce((sum, msg) => {
    return sum + estimateTokenCount(msgContent(msg))
  }, 0)

  for (let i = conversationMessages.length - 1; i >= 0; i--) {
    const msg = conversationMessages[i]
    const msgTokens = estimateTokenCount(msgContent(msg))

    if (currentTokens + msgTokens <= maxTokens) {
      compacted.push(msg)
      currentTokens += msgTokens
    } else {
      break
    }
  }

  compacted.sort((a, b) => {
    const ai = messages.indexOf(a)
    const bi = messages.indexOf(b)
    return ai - bi
  })

  return compacted
}

export async function summarizeConversation(messages: Message[]): Promise<Message[]> {
  const systemMessages = messages.filter((m) => m.role === 'system')
  const conversationMessages = messages.filter((m) => m.role !== 'system')

  if (conversationMessages.length <= 2) {
    return messages
  }

  const userMessages = conversationMessages.filter((m) => m.role === 'user')
  const assistantMessages = conversationMessages.filter((m) => m.role === 'assistant')

  const summaryParts: string[] = []
  summaryParts.push('Conversation summary:')

  for (let i = 0; i < userMessages.length; i++) {
    const userContent = typeof userMessages[i].content === 'string' ? userMessages[i].content : JSON.stringify(userMessages[i].content)
    const truncated = userContent.length > 200 ? userContent.slice(0, 200) + '...' : userContent
    summaryParts.push(`User: ${truncated}`)

    if (i < assistantMessages.length) {
      const assistantContent = typeof assistantMessages[i].content === 'string' ? assistantMessages[i].content : JSON.stringify(assistantMessages[i].content)
      const assistantTruncated = assistantContent.length > 200 ? assistantContent.slice(0, 200) + '...' : assistantContent
      summaryParts.push(`Assistant: ${assistantTruncated}`)
    }
  }

  const toolMessages = conversationMessages.filter((m) => m.role === 'tool')
  if (toolMessages.length > 0) {
    summaryParts.push(`Tool calls: ${toolMessages.length}`)
  }

  const summaryMessage: Message = {
    role: 'system',
    content: summaryParts.join('\n\n'),
  }

  const recentMessages = conversationMessages.slice(-2)

  return [...systemMessages, summaryMessage, ...recentMessages]
}
