import { Command, CommandContext, CommandResult } from '../../types'

export const clearCommand: Command = {
  name: 'clear',
  aliases: ['reset'],
  description: 'Clear the conversation',
  category: 'session',
  execute: async (_args: string, context: CommandContext): Promise<CommandResult> => {
    context.clearMessages()
    return { output: 'Conversation cleared.', addToHistory: false }
  },
}
