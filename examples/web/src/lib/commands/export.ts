import { Command, CommandContext, CommandResult } from '../../types'

export const exportCommand: Command = {
  name: 'export',
  aliases: ['download'],
  description: 'Export project files',
  category: 'session',
  execute: async (_args: string, context: CommandContext): Promise<CommandResult> => {
    const files = context.vfs.exportAll()
    if (files.length === 0) {
      return { output: 'No files in virtual filesystem.' }
    }
    const output = JSON.stringify(files, null, 2)
    return { output }
  },
}
