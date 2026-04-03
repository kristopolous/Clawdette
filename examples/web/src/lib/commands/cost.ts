import { Command, CommandContext, CommandResult } from '../../types'

export const costCommand: Command = {
  name: '/cost',
  aliases: ['/usage'],
  description: 'Show current session cost',
  category: 'session',
  execute: async (_args: string, context: CommandContext): Promise<CommandResult> => {
    const { promptTokens, completionTokens, totalTokens, requests } = context.usage
    const estimatedCost = ((promptTokens * 3 + completionTokens * 15) / 1_000_000).toFixed(4)
    const output = [
      'Session Usage:',
      `  Prompt tokens:     ${promptTokens.toLocaleString()}`,
      `  Completion tokens: ${completionTokens.toLocaleString()}`,
      `  Total tokens:      ${totalTokens.toLocaleString()}`,
      `  API requests:      ${requests}`,
      `  Estimated cost:    $${estimatedCost}`,
    ].join('\n')
    return { output }
  },
}
