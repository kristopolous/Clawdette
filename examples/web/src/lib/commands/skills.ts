import { Command, CommandContext, CommandResult } from '../../types'

export const skillsCommand: Command = {
  name: 'skills',
  aliases: [],
  description: 'List available skills',
  category: 'help',
  execute: async (_args: string, context: CommandContext): Promise<CommandResult> => {
    if (context.skills.length === 0) {
      return { output: 'No skills available.' }
    }
    const lines = context.skills.map((skill) => {
      const name = skill.name.padEnd(20)
      const desc = skill.description.padEnd(40)
      const trigger = `trigger: "${skill.trigger}"`
      return `${name} ${desc} ${trigger}`
    })
    const output = ['Available skills:\n', ...lines].join('\n')
    return { output }
  },
}
