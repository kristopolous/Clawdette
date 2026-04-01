# messageQueueManager

## Purpose
============================================================================

## Imports
- **Stdlib**: bun:bundle, src/types/utils.js
- **External**: @anthropic-ai/sdk/resources/messages.mjs
- **Internal**: ../bootstrap/state.js, ../state/AppState.js, ./config.js, ./messages.js, ./objectGroupBy.js, ./sessionStorage.js, ./signal.js

## Items

### logOperation
**Type**: Function

### notifySubscribers
**Type**: Function

### getCommandQueueSnapshot
**Type**: Function

### getCommandQueue
**Type**: Function

### getCommandQueueLength
**Type**: Function

### hasCommandsInQueue
**Type**: Function

### recheckCommandQueue
**Type**: Function

### enqueue
**Type**: Function

### enqueuePendingNotification
**Type**: Function

### dequeue
**Type**: Function

### dequeueAll
**Type**: Function

### peek
**Type**: Function

### dequeueAllMatching
**Type**: Function

### remove
**Type**: Function

### removeByFilter
**Type**: Function

### clearCommandQueue
**Type**: Function

### resetCommandQueue
**Type**: Function

### isPromptInputModeEditable
**Type**: Function

### isQueuedCommandEditable
**Type**: Function

### isQueuedCommandVisible
**Type**: Function

### extractTextFromValue
**Type**: Function

### extractImagesFromValue
**Type**: Function

### popAllEditable
**Type**: Function

### getPendingNotificationsSnapshot
**Type**: Function

### dequeuePendingNotification
**Type**: Function

### getCommandsByMaxPriority
**Type**: Function

### isSlashCommand
**Type**: Function

### SetAppState
**Type**: Type alias

### PopAllEditableResult
**Type**: Type alias

## Exports
- SetAppState
- subscribeToCommandQueue
- getCommandQueueSnapshot
- getCommandQueue
- getCommandQueueLength
- hasCommandsInQueue
- recheckCommandQueue
- enqueue
- enqueuePendingNotification
- dequeue
- dequeueAll
- peek
- dequeueAllMatching
- remove
- removeByFilter
- clearCommandQueue
- resetCommandQueue
- isPromptInputModeEditable
- isQueuedCommandEditable
- isQueuedCommandVisible
- PopAllEditableResult
- popAllEditable
- subscribeToPendingNotifications
- getPendingNotificationsSnapshot
- hasPendingNotifications
- getPendingNotificationsCount
- recheckPendingNotifications
- dequeuePendingNotification
- resetPendingNotifications
- clearPendingNotifications
- getCommandsByMaxPriority
- isSlashCommand

## Source
`messageQueueManager.ts`