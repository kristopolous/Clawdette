# AsyncHookRegistry

## Purpose
Global registry state

## Imports
- **Internal**: ../debug.js, ../ShellCommand.js, ../sessionEnvironment.js, ../slowOperations.js, ./hookEvents

## Items

### registerPendingAsyncHook
**Type**: Function

### getPendingAsyncHooks
**Type**: Function

### finalizeHook
**Type**: Function

### checkForAsyncHookResponses
**Type**: Function

### removeDeliveredAsyncHooks
**Type**: Function

### finalizePendingAsyncHooks
**Type**: Function

### clearAllAsyncHooks
**Type**: Function

### PendingAsyncHook
**Type**: Type alias

## Exports
- PendingAsyncHook
- registerPendingAsyncHook
- getPendingAsyncHooks
- checkForAsyncHookResponses
- removeDeliveredAsyncHooks
- finalizePendingAsyncHooks
- clearAllAsyncHooks

## Source
`AsyncHookRegistry.ts`