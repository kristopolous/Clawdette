## Purpose
Handles backgrounding of the main session query so it continues running while the UI clears to a fresh prompt.

## Imports
- **Stdlib**: `crypto`
- **External**: none
- **Internal**: `constants/xml`, `query`, `services/tokenEstimation`, `Task`, `tools/AgentTool/loadAgentsDir`, `types/ids`, `types/message`, `utils/abortController`, `utils/agentContext`, `utils/cleanupRegistry`, `utils/debug`, `utils/log`, `utils/messageQueueManager`, `utils/sdkEventQueue`, `utils/sessionStorage`, `utils/task/diskOutput`, `utils/task/framework`, `tasks/LocalAgentTask/LocalAgentTask`

## Logic
1. Generates unique task IDs with an 's' prefix to distinguish from agent tasks
2. Registers a backgrounded task with isolated transcript output to avoid corruption on /clear
3. Runs the query in the background using an AbortController for cancellation
4. Tracks tool usage, token counts, and recent activities for progress display
5. On completion, sends notifications via XML tags for backgrounded tasks or SDK events for foregrounded tasks
6. Supports foregrounding tasks to display output in the main view while keeping the query running

## Exports
- `LocalMainSessionTaskState` - type extending LocalAgentTaskState with agentType='main-session'
- `registerMainSessionTask` - registers a backgrounded main session task and returns its ID and abort signal
- `completeMainSessionTask` - marks a task as completed or failed and sends appropriate notifications
- `foregroundMainSessionTask` - marks a task as foregrounded so output appears in the main view
- `isMainSessionTask` - type guard checking if a task is a main session task
- `startBackgroundSession` - starts a fresh background session with given messages and query parameters
