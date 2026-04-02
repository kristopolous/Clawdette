# outputsScanner

## Purpose
Scans the outputs directory to detect the session environment kind and find files modified since a turn started, for use by file persistence.

## Imports
- **Stdlib**: `fs/promises` (as fs), `path`
- **Internal**: ../debug (logForDebugging), ../teleport/environments (EnvironmentKind), ./types (TurnStartTime)

## Logic
1. `logDebug` - shared debug logger prefixed with `[file-persistence]`
2. `getEnvironmentKind` - reads CLAUDE_CODE_ENVIRONMENT_KIND env var, returns 'byoc' or 'anthropic_cloud' or null
3. `hasParentPath` / `hasPath` - type guards for Node version compatibility (parentPath in Node 20+, path in older)
4. `getEntryParentPath` - extracts parent path from readdir entry with fallback
5. `findModifiedFiles` - finds files modified since turn start:
   - Recursively reads all entries in outputs directory
   - Filters to regular files only (skips symlinks for security)
   - Builds full file paths with version-compatible parent path resolution
   - Parallelizes stat calls via Promise.all for efficiency
   - Re-checks for symlinks between readdir and stat (race condition)
   - Returns files with mtimeMs >= turnStartTime
   - Handles missing directory and deleted files gracefully

## Exports
- `logDebug` - debug logger for file persistence modules
- `getEnvironmentKind` - returns environment kind from env var
- `findModifiedFiles` - async function that returns array of file paths modified since turnStartTime
