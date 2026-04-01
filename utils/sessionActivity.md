# sessionActivity

## Purpose
Restart timer if work is already in progress (e.g. reconnect during streaming)

## Imports
- **Internal**: ./cleanupRegistry.js, ./diagLogs.js, ./envUtils.js

## Items

### startHeartbeatTimer
**Type**: Function

### startIdleTimer
**Type**: Function

### clearIdleTimer
**Type**: Function

### registerSessionActivityCallback
**Type**: Function

### unregisterSessionActivityCallback
**Type**: Function

### sendSessionActivitySignal
**Type**: Function

### isSessionActivityTrackingActive
**Type**: Function

### startSessionActivity
**Type**: Function

### stopSessionActivity
**Type**: Function

### SessionActivityReason
**Type**: Type alias

## Exports
- SessionActivityReason
- registerSessionActivityCallback
- unregisterSessionActivityCallback
- sendSessionActivitySignal
- isSessionActivityTrackingActive
- startSessionActivity
- stopSessionActivity

## Source
`sessionActivity.ts`