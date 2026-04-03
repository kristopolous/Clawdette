import { Command, CommandContext, CommandResult } from '../../types'

export const commitCommand: Command = {
  name: '/commit',
  aliases: [],
  description: 'Generate a git commit message',
  category: 'review',
  execute: async (_args: string, _context: CommandContext): Promise<CommandResult> => {
    return {
      output: 'Generating commit message...',
      triggerQuery: true,
      queryMessage:
        'Review the current state of the project and generate an appropriate git commit message.',
    }
  },
}
