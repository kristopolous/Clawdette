import { Tool, ToolUseContext } from '../../types'

const taskOutputs = new Map<string, string>()

export function setTaskOutput(taskId: string, output: string) {
  taskOutputs.set(taskId, output)
}

export const TaskOutputTool: Tool = {
  name: 'TaskOutput',
  description: 'Get the output of a running or completed task by its task ID.',
  input_schema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        description: 'The ID of the task to get output for',
      },
    },
    required: ['task_id'],
  },
  execute: async (input, _context: ToolUseContext) => {
    const taskId = input.task_id as string
    const output = taskOutputs.get(taskId)
    if (output === undefined) {
      return `No output found for task "${taskId}". No active tasks.`
    }
    return output
  },
}
