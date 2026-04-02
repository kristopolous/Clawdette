# tasks

## Purpose
Listeners for task list updates (used for immediate UI refresh in same process)

## Imports
- **Stdlib**: fs/promises, path, zod/v4
- **Internal**: ../bootstrap/state, /array, /debug, /envUtils, /errors, /lazySchema, /lockfile, ./log, ./signal, ./slowOperations...

## Items

### setLeaderTeamName
**Type**: Function

### clearLeaderTeamName
**Type**: Function

### notifyTasksUpdated
**Type**: Function

### getHighWaterMarkPath
**Type**: Function

### readHighWaterMark
**Type**: Function

### writeHighWaterMark
**Type**: Function

### isTodoV2Enabled
**Type**: Function

### resetTaskList
**Type**: Function

### getTaskListId
**Type**: Function

### sanitizePathComponent
**Type**: Function

### getTasksDir
**Type**: Function

### getTaskPath
**Type**: Function

### ensureTasksDir
**Type**: Function

### findHighestTaskIdFromFiles
**Type**: Function

### findHighestTaskId
**Type**: Function

### createTask
**Type**: Function

### getTask
**Type**: Function

### updateTaskUnsafe
**Type**: Function

### updateTask
**Type**: Function

### deleteTask
**Type**: Function

### listTasks
**Type**: Function

### blockTask
**Type**: Function

### getTaskListLockPath
**Type**: Function

### ensureTaskListLockFile
**Type**: Function

### claimTask
**Type**: Function

### claimTaskWithBusyCheck
**Type**: Function

### sanitizeName
**Type**: Function

### readTeamMembers
**Type**: Function

### getAgentStatuses
**Type**: Function

### unassignTeammateTasks
**Type**: Function

### TaskStatus
**Type**: Type alias

### Task
**Type**: Type alias

### ClaimTaskResult
**Type**: Type alias

### ClaimTaskOptions
**Type**: Type alias

### TeamMember
**Type**: Type alias

### AgentStatus
**Type**: Type alias

### UnassignTasksResult
**Type**: Type alias

## Exports
- setLeaderTeamName
- clearLeaderTeamName
- onTasksUpdated
- notifyTasksUpdated
- TASK_STATUSES
- TaskStatusSchema
- TaskStatus
- TaskSchema
- Task
- isTodoV2Enabled
- resetTaskList
- getTaskListId
- sanitizePathComponent
- getTasksDir
- getTaskPath
- ensureTasksDir
- createTask
- getTask
- updateTask
- deleteTask
- listTasks
- blockTask
- ClaimTaskResult
- ClaimTaskOptions
- claimTask
- TeamMember
- AgentStatus
- getAgentStatuses
- UnassignTasksResult
- unassignTeammateTasks
- DEFAULT_TASKS_MODE_TASK_LIST_ID

## Source
`tasks`