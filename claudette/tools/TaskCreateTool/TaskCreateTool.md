## Purpose
Main tool implementation for TaskCreate — creates new tasks within the current team's task list.

## Imports
- **External**: `z` from 'zod/v4'
- **Internal**:
  - `buildTool`, `ToolDef` from Tool.js
  - `executeTaskCreatedHooks`, `getTaskCreatedHookMessage` from utils/hooks
  - `lazySchema` from utils/lazySchema
  - `createTask`, `deleteTask`, `getTaskListId`, `isTodoV2Enabled` from utils/tasks
  - `getAgentName`, `getTeamName` from utils/teammate
  - `TASK_CREATE_TOOL_NAME`, `DESCRIPTION`, `getPrompt` from local files

## Logic
Defines:
- `inputSchema`: lazy-loaded Zod strict object with fields:
  - `subject` (string): brief title
  - `description` (string): what needs to be done
  - `activeForm` (optional string): present continuous for spinner, e.g., "Running tests"
  - `metadata` (optional record<string, unknown>): arbitrary metadata
- `outputSchema`: lazy object with `task: { id: string, subject: string }`.
- Exports `Output` type inferred from outputSchema.
- `TaskCreateTool`: built via `buildTool` with:
  - `name`: TASK_CREATE_TOOL_NAME
  - `searchHint`: 'create a task in the task list'
  - (presumably other properties like `prompt`, `description`, `run`, etc., not shown in excerpt)

The tool's `run` function (not in excerpt) likely calls `createTask` to add a task to the team's task list, executes task-created hooks, and returns the created task's id and subject.

## Exports
- `TaskCreateTool` (tool definition)
- `Output` (type)
