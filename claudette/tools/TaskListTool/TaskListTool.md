# tools/TaskListTool/TaskListTool

## Purpose
Lists all tasks in the task list with filtering and formatting.

## Imports
- **External**: `zod/v4`
- **Internal**:
  - Tool: `buildTool`, `ToolDef`
  - Utils: `lazySchema`, `getTaskListId`, `isTodoV2Enabled`, `listTasks`, `TaskStatusSchema`
  - Local: `TASK_LIST_TOOL_NAME`, `DESCRIPTION`, `getPrompt`

## Logic
1. Input schema is empty (no parameters).
2. Tool enabled only if TodoV2 feature flag is on; read-only and concurrency-safe.
3. On call, retrieves all tasks, filters out internal tasks (metadata._internal).
4. Constructs resolved task ID set (tasks with status 'completed').
5. Maps tasks to include only unresolved blockers (blockedBy filtered by resolved set).
6. Formats output lines showing ID, status, subject, owner, and blockers.
7. Returns as a newline-separated list or "No tasks found".

## Exports
- `TaskListTool` - tool definition
- `Output` - type for output (array of task objects)
