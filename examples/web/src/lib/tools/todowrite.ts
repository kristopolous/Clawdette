import { Tool, ToolUseContext } from '../../types'

interface Todo {
  text: string
  completed: boolean
}

const todos: Todo[] = []

export const TodoWriteTool: Tool = {
  name: 'TodoWrite',
  description: 'Manage a todo list. Actions: add (add a new todo), update (update todo text by index), mark_complete (mark a todo as done by index).',
  input_schema: {
    type: 'object',
    properties: {
      action: {
        type: 'string',
        enum: ['add', 'update', 'mark_complete'],
        description: 'The action to perform',
      },
      text: {
        type: 'string',
        description: 'The todo text (required for add and update)',
      },
      index: {
        type: 'number',
        description: 'The 1-based index of the todo (required for update and mark_complete)',
      },
    },
    required: ['action', 'text'],
  },
  execute: async (input, _context: ToolUseContext) => {
    const action = input.action as 'add' | 'update' | 'mark_complete'
    const text = input.text as string
    const index = input.index as number | undefined

    switch (action) {
      case 'add':
        todos.push({ text, completed: false })
        break
      case 'update':
        if (index === undefined || index < 1 || index > todos.length) {
          return `Error: Invalid index ${index}. Must be between 1 and ${todos.length}.`
        }
        todos[index - 1].text = text
        break
      case 'mark_complete':
        if (index === undefined || index < 1 || index > todos.length) {
          return `Error: Invalid index ${index}. Must be between 1 and ${todos.length}.`
        }
        todos[index - 1].completed = true
        break
    }

    if (todos.length === 0) {
      return 'No todos.'
    }

    const lines = todos.map((todo, i) => {
      const status = todo.completed ? '[x]' : '[ ]'
      return `${i + 1}. ${status} ${todo.text}`
    })
    return lines.join('\n')
  },
}
