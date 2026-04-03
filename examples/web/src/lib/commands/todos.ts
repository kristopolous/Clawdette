import { Command, CommandContext, CommandResult } from '../../types'

export const todosCommand: Command = {
  name: '/todos',
  aliases: ['/tasks'],
  description: 'Show current todos from conversation',
  category: 'session',
  execute: async (_args: string, context: CommandContext): Promise<CommandResult> => {
    const todos: string[] = []
    for (const msg of context.messages) {
      const text = typeof msg.content === 'string' ? msg.content : msg.content.map((b) => b.text ?? '').join('')
      const lines = text.split('\n')
      for (const line of lines) {
        const match = line.match(/^\s*[-*]\s*\[([ xX])\]\s*(.+)$/)
        if (match) {
          const status = match[1].toLowerCase() === 'x' ? '[x]' : '[ ]'
          todos.push(`  ${status} ${match[2]}`)
        }
      }
    }
    if (todos.length === 0) {
      return { output: 'No todos found in conversation.' }
    }
    const output = ['Todos:\n', ...todos].join('\n')
    return { output }
  },
}
