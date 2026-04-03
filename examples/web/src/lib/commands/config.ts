import { Command, CommandContext, CommandResult } from '../../types'

export const configCommand: Command = {
  name: 'config',
  aliases: ['set'],
  description: 'Show or set configuration',
  category: 'config',
  execute: async (args: string, context: CommandContext): Promise<CommandResult> => {
    const parts = args.trim().split(/\s+/)
    if (parts.length === 0 || parts[0] === '') {
      const output = [
        'Current configuration:',
        `  model:    ${context.model}`,
        `  maxTurns: ${context.maxTurns}`,
      ].join('\n')
      return { output }
    }
    const [key, value] = parts
    if (key === 'maxTurns') {
      const n = parseInt(value, 10)
      if (isNaN(n) || n < 1 || n > 100) {
        return { output: 'Invalid value for maxTurns. Must be a number between 1 and 100.' }
      }
      context.setMaxTurns(n)
      return { output: `maxTurns set to ${n}` }
    }
    return { output: `Unknown config key: ${key}. Available keys: maxTurns` }
  },
}
