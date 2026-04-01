# components/tasks/taskStatusUtils

## Purpose
Provides shared utilities for displaying task status across different task types.

## Imports
- **Stdlib**: (none)
- **External**: `figures`
- **Internal**: Task, tasks InProcessTeammateTask types, tasks LocalAgentTask, tasks types, types utils, utils collapseReadSearch

## Logic
1. `isTerminalStatus` - returns true if status is completed/failed/killed
2. `getTaskStatusIcon` - returns appropriate icon based on status and state flags (hasError, awaitingApproval, shutdownRequested, isIdle)
3. `getTaskStatusColor` - returns appropriate semantic color based on status and state flags
4. `describeTeammateActivity` - derives human-readable activity string for in-process teammate
   - Returns 'stopping' if shutdownRequested
   - Returns 'awaiting approval' if awaitingPlanApproval
   - Returns 'idle' if isIdle
   - Falls back through recent-activity summary → last activity description → 'working'
5. `shouldHideTasksFooter` - returns true when BackgroundTaskStatus would render nothing (spinner tree active and all visible tasks are in-process teammates)
6. `figures` - figures library for Unicode symbols
7. `TaskStatus` - task status type
8. `InProcessTeammateTaskState` - in-process teammate task state type
9. `isPanelAgentTask` - checks if panel agent task
10. `isBackgroundTask`, `TaskState` - task types/functions
11. `DeepImmutable` - deep immutable type
12. `summarizeRecentActivities` - summarizes recent activities

## Exports
- `isTerminalStatus` - checks if status is terminal
- `getTaskStatusIcon` - gets task status icon
- `getTaskStatusColor` - gets task status color
- `describeTeammateActivity` - describes teammate activity
- `shouldHideTasksFooter` - checks if tasks footer should be hidden
