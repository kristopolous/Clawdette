import { Command, CommandContext, CommandResult } from '../../types'

export const securityCommand: Command = {
  name: 'security-review',
  aliases: ['sec'],
  description: 'Perform a security review',
  category: 'review',
  execute: async (_args: string, _context: CommandContext): Promise<CommandResult> => {
    return {
      output: 'Starting security review...',
      triggerQuery: true,
      queryMessage:
        'Perform a security review of all files in the project. Look for vulnerabilities, injection risks, data exposure, and authentication issues.',
    }
  },
}
