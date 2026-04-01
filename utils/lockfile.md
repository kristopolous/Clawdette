# utils/lockfile

## Purpose
Provides lazy file locking utilities via proper-lockfile.

## Imports
- **Stdlib**: (none)
- **External**: `proper-lockfile`
- **Internal**: (none)

## Logic
1. Lazy accessor for proper-lockfile to avoid startup cost
2. proper-lockfile depends on graceful-fs which monkey-patches fs (~8ms)
3. Static imports pull cost into startup even when no locking happens
4. `_lockfile` - cached lockfile module reference
5. `getLockfile` - gets/creates lockfile module reference
6. `lock` - async file lock, returns unlock function
7. `lockSync` - sync file lock, returns unlock function
8. `unlock` - async file unlock
9. `check` - checks if file is locked
10. LockOptions, UnlockOptions, CheckOptions types from proper-lockfile
11. Used for config file locking, session locking, etc.

## Exports
- `lock` - async file lock
- `lockSync` - sync file lock
- `unlock` - async file unlock
- `check` - checks if file locked
- (Lock option types)
