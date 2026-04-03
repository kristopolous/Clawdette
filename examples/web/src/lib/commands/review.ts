import { Command, CommandContext, CommandResult } from '../../types'

export const reviewCommand: Command = {
  name: '/review',
  aliases: ['/code-review'],
  description: 'Perform a code review',
  category: 'review',
  execute: async (_args: string, _context: CommandContext): Promise<CommandResult> => {
    return {
      output: 'Starting code review...',
      triggerQuery: true,
      queryMessage:
        'Perform a thorough code review of all files in the project. Look for bugs, security issues, performance problems, and suggest improvements.',
    }
  },
}
