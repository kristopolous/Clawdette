import { Command, CommandContext, CommandResult } from '../../types'

export const statusCommand: Command = {
  name: '/status',
  aliases: ['/info'],
  description: 'Show session status',
  category: 'session',
  execute: async (_args: string, context: CommandContext): Promise<CommandResult> => {
    const files = context.vfs.exportAll()
    const { promptTokens, completionTokens, requests } = context.usage
    const output = [
      'Session Status:',
      `  Model:         ${context.model}`,
      `  Messages:      ${context.messages.length}`,
      `  Files in VFS:  ${files.length}`,
      `  Max turns:     ${context.maxTurns}`,
      `  API requests:  ${requests}`,
      `  Prompt tokens: ${promptTokens.toLocaleString()}`,
      `  Completion:    ${completionTokens.toLocaleString()}`,
    ].join('\n')
    return { output }
  },
}
