import { Command, CommandContext, CommandResult } from '../../types'

export const agentsCommand: Command = {
  name: 'agents',
  aliases: [],
  description: 'List available agents',
  category: 'help',
  execute: async (_args: string, context: CommandContext): Promise<CommandResult> => {
    if (context.agents.length === 0) {
      return { output: 'No agents available.' }
    }
    const lines = context.agents.map((agent) => {
      const name = agent.name.padEnd(20)
      const desc = agent.description
      return `${name} ${desc}`
    })
    const output = ['Available agents:\n', ...lines].join('\n')
    return { output }
  },
}
