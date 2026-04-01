# autoDream/consolidationLock

## Purpose
Implements file-based locking for memory consolidation using mtime as lastConsolidatedAt timestamp.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: (none)
- **Internal**: bootstrap state, memdir paths, debug, genericProcessUtils, listSessionsImpl, sessionStorage

## Logic
1. Lock file `.consolidate-lock` lives in memory dir (keys on git-root like memory)
2. Lock body contains holder's PID; mtime = lastConsolidatedAt
3. `HOLDER_STALE_MS` (1 hour) - stale threshold even if PID live (PID reuse guard)
4. `readLastConsolidatedAt` - returns lock file mtime (0 if absent), one stat per turn
5. `tryAcquireConsolidationLock` - writes PID, sets mtime = now, returns prior mtime for rollback
6. Checks if holder PID still running via isProcessRunning
7. Reclaims lock if holder dead or unparseable
8. Creates memory dir if needed (recursive)
9. Verifies write succeeded (last writer wins)
10. `rollbackConsolidationLock` - rewinds mtime to prior value on failure
11. `listSessionsTouchedSince` - lists sessions modified since lastConsolidatedAt

## Exports
- `readLastConsolidatedAt` - reads lock file mtime
- `tryAcquireConsolidationLock` - acquires consolidation lock
- `rollbackConsolidationLock` - rolls back lock on failure
- `listSessionsTouchedSince` - lists sessions modified since timestamp
