# computerUseLock

## Purpose
Holds the unregister function for the shutdown cleanup handler.

## Imports
- **Stdlib**: fs/promises, path
- **Internal**: ../../bootstrap/state.js, ../../utils/cleanupRegistry.js, ../../utils/debug.js, ../../utils/envUtils, ../../utils/slowOperations, ../errors

## Items

### isComputerUseLock
**Type**: Function

### getLockPath
**Type**: Function

### readLock
**Type**: Function

### isProcessRunning
**Type**: Function

### tryCreateExclusive
**Type**: Function

### registerLockCleanup
**Type**: Function

### checkComputerUseLock
**Type**: Function

### isLockHeldLocally
**Type**: Function

### tryAcquireComputerUseLock
**Type**: Function

### releaseComputerUseLock
**Type**: Function

### ComputerUseLock
**Type**: Type alias

### AcquireResult
**Type**: Type alias

### CheckResult
**Type**: Type alias

## Exports
- AcquireResult
- CheckResult
- checkComputerUseLock
- isLockHeldLocally
- tryAcquireComputerUseLock
- releaseComputerUseLock

## Source
`computerUseLock.ts`