# inProcessTeammateHelpers

## Purpose
Helper functions for in-process teammate integration, including task lookup, plan approval state management, and permission response detection.

## Imports
- **Internal**: ../state/AppState, ../tasks/InProcessTeammateTask/types, ./task/framework, ./teammateMailbox

## Logic
1. `findInProcessTeammateTaskId` - iterates through appState.tasks to find a task matching the given agent name where `isInProcessTeammateTask` returns true. Returns task ID or undefined.
2. `setAwaitingPlanApproval` - updates a task's `awaitingPlanApproval` state via `updateTaskState`. Used to mark when a teammate is waiting for plan approval.
3. `handlePlanApprovalResponse` - called when a `plan_approval_response` message arrives. Resets `awaitingPlanApproval` to false. The permissionMode from the response is handled separately by the agent loop.
4. `isPermissionRelatedResponse` - checks if a message text is a permission response (tool permissions or sandbox/network host permissions) using `isPermissionResponse` and `isSandboxPermissionResponse`.

## Exports
- `SetAppState` - type alias for AppState setter function
- `findInProcessTeammateTaskId` - finds task ID by agent name for in-process teammates
- `setAwaitingPlanApproval` - sets awaitingPlanApproval state on a teammate task
- `handlePlanApprovalResponse` - handles plan approval response by resetting awaiting state
- `isPermissionRelatedResponse` - checks if a message is a permission-related response
