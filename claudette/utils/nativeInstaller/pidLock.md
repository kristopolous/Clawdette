# pidLock

## Purpose
If env var is explicitly set, respect it

## Imports
- **Stdlib**: path
- **Internal**: ../../services/analytics/growthbook.js, ../debug.js, ../envUtils.js, ../errors.js, ../fsOperations.js, ../genericProcessUtils.js, ../log.js

## Items

### isPidBasedLockingEnabled
**Type**: Function

### isProcessRunning
**Type**: Function

### isClaudeProcess
**Type**: Function

### readLockContent
**Type**: Function

### isLockActive
**Type**: Function

### writeLockFile
**Type**: Function

### tryAcquireLock
**Type**: Function

### return
**Type**: Function

### acquireProcessLifetimeLock
**Type**: Function

### withLock
**Type**: Function

### getAllLockInfo
**Type**: Function

### cleanupStaleLocks
**Type**: Function

### VersionLockContent
**Type**: Type alias

### LockInfo
**Type**: Type alias

## Exports
- isPidBasedLockingEnabled
- VersionLockContent
- LockInfo
- isProcessRunning
- readLockContent
- isLockActive
- tryAcquireLock
- acquireProcessLifetimeLock
- withLock
- getAllLockInfo
- cleanupStaleLocks

## Source
`pidLock.ts`