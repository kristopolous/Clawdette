# framework

## Purpose
Standard polling interval for all tasks

## Imports
- **Internal**: ../../state/AppState.js, ../../tasks/types.js, ../messageQueueManager.js, ../sdkEventQueue.js, ./diskOutput

## Items

### registerTask
**Type**: Function

### evictTerminalTask
**Type**: Function

### getRunningTasks
**Type**: Function

### generateTaskAttachments
**Type**: Function

### applyTaskOffsetsAndEvictions
**Type**: Function

### pollTasks
**Type**: Function

### enqueueTaskNotification
**Type**: Function

### getStatusText
**Type**: Function

### TaskAttachment
**Type**: Type alias

### SetAppState
**Type**: Type alias

## Exports
- POLL_INTERVAL_MS
- STOPPED_DISPLAY_MS
- PANEL_GRACE_MS
- TaskAttachment
- updateTaskState
- registerTask
- evictTerminalTask
- getRunningTasks
- generateTaskAttachments
- applyTaskOffsetsAndEvictions
- pollTasks

## Source
`framework.ts`