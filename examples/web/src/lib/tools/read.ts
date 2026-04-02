import { Tool, ToolUseContext } from '../../types'

export const ReadTool: Tool = {
  name: 'Read',
  description: 'Read the contents of a file from the virtualized filesystem.',
  input_schema: {
    type: 'object',
    properties: {
      file_path: {
        type: 'string',
        description: 'The path to the file to read',
      },
    },
    required: ['file_path'],
  },
  execute: async (input, context: ToolUseContext) => {
    const filePath = input.file_path as string
    try {
      const content = await context.vfs.read(filePath)
      return content
    } catch (e) {
      return `Error reading file: ${e instanceof Error ? e.message : String(e)}`
    }
  },
}
