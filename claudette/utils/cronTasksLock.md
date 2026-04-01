# cronTasksLock

## Purpose
Scheduler lease lock for .claude/scheduled_tasks.json.

## Imports
- **Stdlib**: fs/promises, path, zod/v4
- **Internal**: ../bootstrap/state.js, ./cleanupRegistry.js, ./debug.js, ./errors.js, ./genericProcessUtils.js, ./json.js, ./lazySchema.js, ./slowOperations

## Items

### getLockPath
**Type**: Function

### readLock
**Type**: Function

### tryCreateExclusive
**Type**: Function

### registerLockCleanup
**Type**: Function

### tryAcquireSchedulerLock
**Type**: Function

### releaseSchedulerLock
**Type**: Function

### SchedulerLock
**Type**: Type alias

### SchedulerLockOptions
**Type**: Type alias

## Exports
- SchedulerLockOptions
- tryAcquireSchedulerLock
- releaseSchedulerLock

## Source
`cronTasksLock.ts`