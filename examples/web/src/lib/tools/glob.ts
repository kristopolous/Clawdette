import { Tool, ToolUseContext } from '../../types'

export const GlobTool: Tool = {
  name: 'Glob',
  description: 'Find files matching a glob pattern in the virtualized filesystem.',
  input_schema: {
    type: 'object',
    properties: {
      pattern: {
        type: 'string',
        description: 'The glob pattern to match (e.g. "**/*.ts", "src/**/*.tsx")',
      },
    },
    required: ['pattern'],
  },
  execute: async (input, context: ToolUseContext) => {
    const pattern = input.pattern as string
    try {
      const results = await context.vfs.glob(pattern)
      if (results.length === 0) return 'No files found matching pattern.'
      return results.join('\n')
    } catch (e) {
      return `Error globbing: ${e instanceof Error ? e.message : String(e)}`
    }
  },
}
