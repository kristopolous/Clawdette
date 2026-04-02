# tools/TaskGetTool/TaskGetTool

## Purpose
Retrieves task details by ID from the task list, including subject, description, status, and dependency information.

## Imports
- **External**: `zod/v4`
- **Internal**:
  - Tool: `buildTool`, `ToolDef`
  - Utils: `lazySchema`, `getTask`, `getTaskListId`, `isTodoV2Enabled`, `TaskStatusSchema`
  - Local: `TASK_GET_TOOL_NAME`, `DESCRIPTION`, `PROMPT`

## Logic
1. Validates input: taskId (string).
2. Tool enabled only if TodoV2 feature flag is on.
3. On call, retrieves task from the task list via `getTask`. Returns null if not found.
4. Formats output: task details including id, subject, description, status, blocks, blockedBy.
5. Maps result to a multi-line text summary; if task not found, returns "Task not found".

## Exports
- `TaskGetTool` - tool definition
- `Output` - type for output (task object or null)
