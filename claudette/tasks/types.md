# tasks/types

## Purpose
Provides union types for all task state types and background task utilities.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: All task state types (DreamTask, InProcessTeammateTask, LocalAgentTask, LocalShellTask, LocalWorkflowTask, MonitorMcpTask, RemoteAgentTask)

## Logic
1. `TaskState` - union of all concrete task state types
2. `BackgroundTaskState` - subset of task types for background indicator
3. `isBackgroundTask` - checks if task should be shown in background indicator
4. Criteria: status is running/pending AND not explicitly foreground (isBackgrounded !== false)
5. Includes: LocalShellTask, LocalAgentTask, RemoteAgentTask, InProcessTeammateTask, LocalWorkflowTask, MonitorMcpTask, DreamTask
6. Type guard narrows TaskState to BackgroundTaskState
7. Used by components needing to work with any task type
8. Used by background tasks indicator for filtering

## Exports
- `TaskState` - union of all task state types
- `BackgroundTaskState` - union for background task types
- `isBackgroundTask` - type guard for background tasks
