import { Tool, ToolUseContext } from '../../types'

export const EditTool: Tool = {
  name: 'Edit',
  description: 'Perform a search-and-replace edit in a file. Provide the exact text to find and the text to replace it with.',
  input_schema: {
    type: 'object',
    properties: {
      file_path: {
        type: 'string',
        description: 'The path to the file to edit',
      },
      old_string: {
        type: 'string',
        description: 'The exact text to find and replace',
      },
      new_string: {
        type: 'string',
        description: 'The text to replace it with',
      },
    },
    required: ['file_path', 'old_string', 'new_string'],
  },
  execute: async (input, context: ToolUseContext) => {
    const filePath = input.file_path as string
    const oldString = input.old_string as string
    const newString = input.new_string as string
    try {
      const result = await context.vfs.edit(filePath, oldString, newString)
      return `Successfully edited ${filePath}\n\nNew content:\n${result}`
    } catch (e) {
      return `Error editing file: ${e instanceof Error ? e.message : String(e)}`
    }
  },
}
