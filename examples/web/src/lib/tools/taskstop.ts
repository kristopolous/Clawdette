import { Tool, ToolUseContext } from '../../types'

const activeTasks = new Set<string>()

export function registerTask(taskId: string) {
  activeTasks.add(taskId)
}

export function unregisterTask(taskId: string) {
  activeTasks.delete(taskId)
}

export const TaskStopTool: Tool = {
  name: 'TaskStop',
  description: 'Stop a running task by its task ID.',
  input_schema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        description: 'The ID of the task to stop',
      },
    },
    required: ['task_id'],
  },
  execute: async (input, _context: ToolUseContext) => {
    const taskId = input.task_id as string
    if (!activeTasks.has(taskId)) {
      return `Task "${taskId}" is not running or does not exist.`
    }
    activeTasks.delete(taskId)
    return `Task "${taskId}" has been stopped.`
  },
}
