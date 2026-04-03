import { Command, CommandContext, CommandResult } from '../../types'

export const insightsCommand: Command = {
  name: 'insights',
  aliases: ['summary'],
  description: 'Extract session insights',
  category: 'session',
  execute: async (_args: string, _context: CommandContext): Promise<CommandResult> => {
    return {
      output: 'Extracting session insights...',
      triggerQuery: true,
      queryMessage:
        'Summarize the key insights and decisions from this conversation. What was accomplished? What patterns emerged? What should be remembered for future sessions?',
    }
  },
}
