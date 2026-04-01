# sdkEventQueue

## Purpose
Delta batch of workflow state changes. Clients upsert by

## Imports
- **Stdlib**: crypto, crypto
- **Internal**: ../bootstrap/state.js, ../types/tools.js

## Items

### enqueueSdkEvent
**Type**: Function

### drainSdkEvents
**Type**: Function

### emitTaskTerminatedSdk
**Type**: Function

### TaskStartedEvent
**Type**: Type alias

### TaskProgressEvent
**Type**: Type alias

### TaskNotificationSdkEvent
**Type**: Type alias

### SessionStateChangedEvent
**Type**: Type alias

### SdkEvent
**Type**: Type alias

## Exports
- SdkEvent
- enqueueSdkEvent
- drainSdkEvents
- emitTaskTerminatedSdk

## Source
`sdkEventQueue.ts`