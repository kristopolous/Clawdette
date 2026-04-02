# cronTasksLock

## Purpose
Scheduler lease lock for claude/scheduled_taskson.

## Imports
- **Stdlib**: fs/promises, path, zod/v4
- **Internal**: ../bootstrap/state, /cleanupRegistry, /debug, /errors, /genericProcessUtils, ./json, ./lazySchema, ./slowOperations

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
`cronTasksLock`