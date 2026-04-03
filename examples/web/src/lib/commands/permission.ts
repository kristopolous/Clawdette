import { Command, CommandContext, CommandResult } from '../../types'

const VALID_MODES = ['ask', 'auto', 'yolo']

export const permissionCommand: Command = {
  name: '/permission',
  aliases: ['/perm'],
  description: 'Set permission mode',
  category: 'config',
  requiresArg: true,
  execute: async (args: string, _context: CommandContext): Promise<CommandResult> => {
    const mode = args.trim().toLowerCase()
    if (!VALID_MODES.includes(mode)) {
      return {
        output: `Invalid permission mode: ${mode}\nValid modes: ${VALID_MODES.join(', ')}`,
      }
    }
    return {
      output: `Permission mode set to: ${mode}\n\nNote: Permission changes are handled by the UI.`,
    }
  },
}
    }
    return {
      output: `Permission mode set to: ${mode}\n\nNote: Permission changes are handled by the UI.`,
    }
  },
}
