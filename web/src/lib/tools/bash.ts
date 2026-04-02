import { Tool, ToolUseContext } from '../../types'
import { jsh } from '../virtualfs/jsh'

export const BashTool: Tool = {
  name: 'Bash',
  description: 'Execute a shell command in the virtualized environment. Supports: cd, ls, cat, mkdir, touch, echo, pwd, tree, find, wc, head, tail. Destructive operations (rm, mv, cp) and runtime execution (python, node) are not allowed.',
  input_schema: {
    type: 'object',
    properties: {
      command: {
        type: 'string',
        description: 'The shell command to execute',
      },
    },
    required: ['command'],
  },
  execute: async (input, context: ToolUseContext) => {
    const command = input.command as string
    const result = await jsh(command, context.vfs, context.cwd)
    let output = ''
    if (result.stdout) output += result.stdout
    if (result.stderr) output += result.stderr
    if (result.exitCode !== 0) output += `\n[Exit code: ${result.exitCode}]`
    return output
  },
}
