import { Tool, ToolUseContext } from '../../types'

export const GrepTool: Tool = {
  name: 'Grep',
  description: 'Search file contents using a regular expression pattern across all files in the virtualized filesystem.',
  input_schema: {
    type: 'object',
    properties: {
      pattern: {
        type: 'string',
        description: 'The regex pattern to search for',
      },
      path: {
        type: 'string',
        description: 'Optional path to limit search to a specific directory or file',
      },
    },
    required: ['pattern'],
  },
  execute: async (input, context: ToolUseContext) => {
    const pattern = input.pattern as string
    const searchPath = input.path as string | undefined
    try {
      const results = await context.vfs.grep(pattern, searchPath)
      if (results.length === 0) return 'No matches found.'
      const output = results.map(r => `${r.file}:${r.line}: ${r.match}`).join('\n')
      return output
    } catch (e) {
      return `Error searching: ${e instanceof Error ? e.message : String(e)}`
    }
  },
}
