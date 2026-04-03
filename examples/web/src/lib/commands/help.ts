import { Command, CommandContext, CommandResult } from '../../types'
import { getCommands } from './registry'

export const helpCommand: Command = {
  name: '/help',
  aliases: [],
  description: 'List all available commands',
  category: 'help',
  execute: async (_args: string, _context: CommandContext): Promise<CommandResult> => {
    const commands = getCommands()
    const lines = commands.map((cmd) => {
      const name = cmd.name.padEnd(20)
      const desc = cmd.description.padEnd(40)
      const cat = `[${cmd.category}]`
      return `${name} ${desc} ${cat}`
    })
    const output = ['Available commands:\n', ...lines].join('\n')
    return { output }
  },
}
