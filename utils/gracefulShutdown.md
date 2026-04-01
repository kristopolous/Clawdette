# gracefulShutdown

## Purpose
Disable mouse tracking FIRST, before the React unmount tree-walk.

## Imports
- **Stdlib**: chalk, fs, lodash-es/memoize.js, signal-exit, src/entrypoints/agentSdkTypes.js
- **Internal**: ../ink/instances.js, ../services/analytics/datadog.js, ../services/analytics/firstPartyEventLogger.js, ../state/AppState.js, ./cleanupRegistry.js, ./debug.js, ./diagLogs.js, ./envUtils.js, ./sessionStorage.js, ./sleep.js...

## Items

### CleanupTimeoutError
**Type**: Class

### cleanupTerminalModes
**Type**: Function

### printResumeHint
**Type**: Function

### forceExit
**Type**: Function

### gracefulShutdownSync
**Type**: Function

### isShuttingDown
**Type**: Function

### resetShutdownState
**Type**: Function

### getPendingShutdownForTesting
**Type**: Function

### gracefulShutdown
**Type**: Function

## Exports
- setupGracefulShutdown
- gracefulShutdownSync
- isShuttingDown
- resetShutdownState
- getPendingShutdownForTesting
- gracefulShutdown

## Source
`gracefulShutdown.ts`