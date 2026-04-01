# utils/json

## Purpose
Provides JSON parsing utilities with caching and JSONC support.

## Imports
- **Stdlib**: `fs/promises`
- **External**: `jsonc-parser`
- **Internal**: jsonRead, log, memoize, JSON utils

## Logic
1. `CachedParse` - { ok: true, value } | { ok: false } discriminated union
2. `parseJSONUncached` - uncached JSON parse with BOM stripping
3. `parseJSONCached` - memoized parse with LRU cache (50 entries)
4. `PARSE_CACHE_MAX_KEY_BYTES` (8KB) - skip caching above this size
5. Prevents memory leak from large configs pinning cache slots
6. `safeParseJSON` - safely parses JSON with optional error logging
7. Handles null/undefined input, returns null
8. Uses discriminated union for memoization (JSON.parse can return null)
9. Caches invalid JSON to prevent repeated parse attempts
10. `safeParseJSONC` - safely parses JSON with comments
11. Uses jsonc-parser for VS Code config file support
12. Strips BOM before parsing (PowerShell 5.x adds BOM to UTF-8)
13. `modifyJsonc` - modifies JSONC by adding item to array
14. Preserves comments and formatting
15. `writeJsonc` - writes JSONC to file
16. `readJsonc` - reads JSONC from file

## Exports
- `safeParseJSON` - safely parses JSON with caching
- `safeParseJSONC` - safely parses JSONC (with comments)
- `modifyJsonc` - modifies JSONC array
- `writeJsonc` - writes JSONC to file
- `readJsonc` - reads JSONC from file
