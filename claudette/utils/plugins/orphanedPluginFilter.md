# orphanedPluginFilter

## Purpose
Generates ripgrep glob exclusion patterns for orphaned plugin versions. When plugin versions are updated, old versions are marked with `.orphaned_at` files but kept on disk for 7 days. This module prevents Grep/Glob from returning files from those orphaned versions.

## Imports
- **Stdlib**: `path` (dirname, isAbsolute, join, normalize, relative, sep)
- **Internal**: `../ripgrep.js`, `./pluginDirectories.js`

## Logic
1. **Orphan detection**: Uses ripgrep with `--files --hidden --no-ignore --max-depth 4 --glob .orphaned_at` to find all `.orphaned_at` marker files within the plugin cache directory.
2. **Exclusion generation**: For each marker, extracts the parent directory (version dir) and generates `!**/<posix-relative-path>/**` glob patterns.
3. **Session caching**: Results are cached in a module-level variable (`cachedExclusions`) and frozen for the session. Only cleared by explicit `/reload-plugins` via `clearPluginCacheExclusions()`.
4. **Path overlap optimization**: If a `searchPath` is provided, exclusions are only returned if the search overlaps the plugin cache directory (avoids unnecessary `--glob` args).
5. **Best-effort**: Returns empty array if ripgrep fails — don't break core search tools.

## Exports
- `getGlobExclusionsForPluginCache` - async function that returns ripgrep glob exclusion patterns for orphaned plugin versions; optionally takes a `searchPath` to filter results
- `clearPluginCacheExclusions` - clears the session-scoped cache (called by `/reload-plugins`)

## Source
`orphanedPluginFilter`
