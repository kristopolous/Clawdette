# tools/TaskCreateTool/TaskCreateTool

## Purpose
Creates new tasks within the current team's task list.

## Imports
- **External**: `zod/v4`
- **Internal**:
  - Tool: `buildTool`, `ToolDef`
  - Hooks: `executeTaskCreatedHooks`, `getTaskCreatedHookMessage`
  - Utils: `lazySchema`, `createTask`, `deleteTask`, `getTaskListId`, `isTodoV2Enabled`, `getAgentName`, `getTeamName`
  - Local: `TASK_CREATE_TOOL_NAME`, `DESCRIPTION`, `getPrompt`

## Logic
1. Validates input with Zod schema: subject (title), description, optional activeForm (spinner text), optional metadata.
2. The tool is enabled only when task (todo) v2 feature flag is on.
3. On call:
   - Creates a new task via `createTask` with status 'pending'.
   - Executes task-created hooks; if any produce blocking errors, deletes the task and throws.
   - Expands the task list view in the UI.
   - Returns the new task's id and subject.
4. Maps tool result to a confirmation message.

## Exports
- `TaskCreateTool` - tool definition
- `Output` - type for output (task with id and subject)
