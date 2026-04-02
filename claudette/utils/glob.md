# glob

## Purpose
File globbing using ripgrep for memory-efficient file listing. Extracts static base directories from glob patterns and delegates to ripgrep with appropriate flags for sorting, ignore handling, and exclusion patterns.

## Imports
- **Stdlib**: `path` (`basename`, `dirname`, `isAbsolute`, `join`, `sep`)
- **Internal**: `../Tool` (`ToolPermissionContext`), `./envUtils` (`isEnvTruthy`), `./permissions/filesystem` (`getFileReadIgnorePatterns`, `normalizePatternsToPath`), `./platform` (`getPlatform`), `./plugins/orphanedPluginCache` (`getGlobExclusionsForPluginCache`), `./ripgrep` (`ripGrep`)

## Items

### extractGlobBaseDirectory
**Type**: Function
Extracts the static base directory from a glob pattern. Finds first glob special character (`*`, `?`, `[`, `{`), splits at last path separator before it. Handles: literal paths (no glob chars → dirname + basename), root directory patterns (`/*.txt` → `/`), Windows drive roots (`C:/*.txt` → `C:\`). Returns `{ baseDir, relativePattern }`.

### glob
**Type**: Async Function
Lists files matching a glob pattern using ripgrep. Converts absolute paths to baseDir + relative pattern. Applies ignore patterns from permissions, plugin cache exclusions. Default flags: `--no-ignore` (set `CLAUDE_CODE_GLOB_NO_IGNORE=false` to respect .gitignore), `--hidden` (set `CLAUDE_CODE_GLOB_HIDDEN=false` to exclude). Sorts by modification time (oldest first). Returns `{ files: string[], truncated: boolean }` with offset/limit pagination.

## Exports
- `extractGlobBaseDirectory` — extracts static base dir from glob pattern
- `glob` — async function to list files matching a glob pattern via ripgrep

## Source
`glob`