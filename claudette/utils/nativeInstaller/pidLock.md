# utils/nativeInstaller/pidLock

## Purpose
Provides PID-based version locking for Claude Code installations, replacing mtime-based locking. Lock files contain JSON with the PID and metadata; staleness is determined by checking if the process is still alive, allowing immediate detection of crashed processes.

## Imports
- **Stdlib**: `path`
- **External**: GrowthBook feature flag (`tengu_pid_based_version_locking`)
- **Internal**: `../../services/analytics/growthbook.js`, `../debug.js`, `../envUtils.js`, `../errors.js`, `../fsOperations.js`, `../genericProcessUtils.js`, `../log.js`, `../slowOperations.js`

## Logic
1. `isPidBasedLockingEnabled()` — checks `ENABLE_PID_BASED_VERSION_LOCKING` env var (true/false override); falls back to GrowthBook feature flag for gradual rollout
2. `VersionLockContent` type: `{ pid, version, execPath, acquiredAt }` — stored in lock files as JSON
3. `LockInfo` type: `{ version, pid, isProcessRunning, execPath, acquiredAt, lockFilePath }` — diagnostic info
4. `FALLBACK_STALE_MS` — 2 hours; used when PID check is inconclusive (e.g. network filesystems)
5. `isProcessRunning(pid)` — uses `process.kill(pid, 0)` to check if process exists; rejects PID <= 1
6. `isClaudeProcess(pid, expectedExecPath)` — validates the running process is actually Claude by checking `getProcessCommand(pid)` for 'claude' or the expected execPath; trusts PID check if command lookup fails (conservative)
7. `readLockContent(lockFilePath)` — reads and parses lock file JSON; validates required fields
8. `isLockActive(lockFilePath)` — returns true if lock file exists, process is running, AND it's a Claude process; includes 2-hour fallback staleness check
9. `writeLockFile(lockFilePath, content)` — atomic write via temp file + rename; cleans up temp file on failure
10. `tryAcquireLock(versionPath, lockFilePath)` — checks for existing active lock; writes lock content; verifies ownership (race condition check); returns release function or null
11. `acquireProcessLifetimeLock(versionPath, lockFilePath)` — acquires lock and holds until process exits; registers cleanup on `exit`, `SIGINT`, `SIGTERM`
12. `withLock(versionPath, lockFilePath, callback)` — acquires lock, runs callback, releases in finally block
13. `getAllLockInfo(locksDir)` — reads all `.lock` files in directory; returns `LockInfo[]` with process running status
14. `cleanupStaleLocks(locksDir)` — removes stale PID-based locks and legacy proper-lockfile directory locks; returns count of cleaned locks

## Exports
- `isPidBasedLockingEnabled()` — checks if PID-based locking is enabled (env var or GrowthBook)
- `VersionLockContent` — type for lock file content
- `LockInfo` — type for diagnostic lock information
- `isProcessRunning(pid: number)` — returns `boolean`; checks if PID is alive via signal 0
- `readLockContent(lockFilePath: string)` — returns `VersionLockContent | null`
- `isLockActive(lockFilePath: string)` — returns `boolean`; checks if lock holder process is still running
- `tryAcquireLock(versionPath, lockFilePath)` — returns `(() => void) | null`; acquire with release function
- `acquireProcessLifetimeLock(versionPath, lockFilePath)` — returns `Promise<boolean>`; holds lock until exit
- `withLock(versionPath, lockFilePath, callback)` — returns `Promise<boolean>`; runs callback under lock
- `getAllLockInfo(locksDir: string)` — returns `LockInfo[]`
- `cleanupStaleLocks(locksDir: string)` — returns `number` of locks cleaned
