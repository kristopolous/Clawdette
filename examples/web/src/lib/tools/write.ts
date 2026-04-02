import { Tool, ToolUseContext } from '../../types'

export const WriteTool: Tool = {
  name: 'Write',
  description: 'Write content to a file in the virtualized filesystem. Creates the file if it does not exist, overwrites if it does.',
  input_schema: {
    type: 'object',
    properties: {
      file_path: {
        type: 'string',
        description: 'The path to the file to write',
      },
      content: {
        type: 'string',
        description: 'The content to write to the file',
      },
    },
    required: ['file_path', 'content'],
  },
  execute: async (input, context: ToolUseContext) => {
    const filePath = input.file_path as string
    const content = input.content as string
    try {
      await context.vfs.write(filePath, content)
      return `Successfully wrote ${content.length} bytes to ${filePath}`
    } catch (e) {
      return `Error writing file: ${e instanceof Error ? e.message : String(e)}`
    }
  },
}
