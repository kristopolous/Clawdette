import { Command, CommandContext, CommandResult } from '../../types'

export const memoryCommand: Command = {
  name: '/memory',
  aliases: ['/memories'],
  description: 'Search or show memories',
  category: 'session',
  execute: async (args: string, _context: CommandContext): Promise<CommandResult> => {
    const trimmed = args.trim()
    if (!trimmed) {
      return {
        output: 'Usage: /memory search <term>\n\nSearches the memory store for entries matching the given term.',
      }
    }
    const parts = trimmed.split(/\s+/)
    const action = parts[0]
    if (action === 'search') {
      const query = parts.slice(1).join(' ')
      if (!query) {
        return { output: 'Usage: /memory search <term>' }
      }
      return {
        output: `Searching memory for: "${query}"\n\nNote: Memory search requires a memoryStore in CommandContext.`,
      }
    }
    return {
      output: `Unknown memory action: ${action}\n\nAvailable actions:\n  search <term>`,
    }
  },
}
