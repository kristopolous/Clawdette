## Purpose
Provides tool name, description, and prompt for TaskStop, used to terminate background tasks.

## Imports
- None

## Logic
Exports:
- `TASK_STOP_TOOL_NAME` = 'TaskStop'
- `DESCRIPTION` (multi-line) explaining:
  - Stops a running background task by its ID
  - Takes task_id parameter
  - Returns success/failure status
  - Use when needing to terminate a long-running task
- No separate getPrompt function; DESCRIPTION serves as the user-facing instruction.

## Exports
- `TASK_STOP_TOOL_NAME` (string)
- `DESCRIPTION` (string)
