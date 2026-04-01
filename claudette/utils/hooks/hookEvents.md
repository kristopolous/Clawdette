# hookEvents

## Purpose
Always log full hook output to debug log for verbose mode debugging

## Imports
- **Stdlib**: src/entrypoints/sdk/coreTypes.js
- **Internal**: ../debug

## Items

### registerHookEventHandler
**Type**: Function

### emit
**Type**: Function

### shouldEmit
**Type**: Function

### emitHookStarted
**Type**: Function

### emitHookProgress
**Type**: Function

### startHookProgressInterval
**Type**: Function

### emitHookResponse
**Type**: Function

### setAllHookEventsEnabled
**Type**: Function

### clearHookEventState
**Type**: Function

### HookStartedEvent
**Type**: Type alias

### HookProgressEvent
**Type**: Type alias

### HookResponseEvent
**Type**: Type alias

### HookExecutionEvent
**Type**: Type alias

### HookEventHandler
**Type**: Type alias

## Exports
- HookStartedEvent
- HookProgressEvent
- HookResponseEvent
- HookExecutionEvent
- HookEventHandler
- registerHookEventHandler
- emitHookStarted
- emitHookProgress
- startHookProgressInterval
- emitHookResponse
- setAllHookEventsEnabled
- clearHookEventState

## Source
`hookEvents.ts`