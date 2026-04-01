# utils/toolResultStorage

## Purpose
Provides utility for persisting large tool results to disk instead of truncating.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: `@anthropic-ai/sdk`
- **Internal**: bootstrap state, constants toolLimits, growthbook, analytics, analytics metadata, message types, debug, errors, format, log, sessionStorage, JSON utils

## Logic
1. `TOOL_RESULTS_SUBDIR` - 'tool-results' subdirectory name within session
2. `PERSISTED_OUTPUT_TAG`, `PERSISTED_OUTPUT_CLOSING_TAG` - XML tags for persisted output
3. `TOOL_RESULT_CLEARED_MESSAGE` - message when tool result cleared without persisting
4. `PERSIST_THRESHOLD_OVERRIDE_FLAG` - 'tengu_satin_quoll' GrowthBook flag
5. GrowthBook override map: tool name -> persistence threshold (chars)
6. When tool name present in map, that value used directly as effective threshold
7. Bypasses Math.min() clamp against 50k default
8. Tools absent from map use hardcoded fallback
9. Flag default is {} (no overrides == behavior unchanged)
10. `getPersistenceThreshold` - resolves effective persistence threshold for tool
11. GrowthBook override wins when present
12. Falls back to declared per-tool cap clamped by global default
13. Defensive: GrowthBook cache returns `cached !== undefined ? cached : default`
14. Flag served as `null` leaks through - guard with optional chaining and typeof check
15. Non-object flag value (null, string, number) falls through to hardcoded default
16. Infinity = hard opt-out - read self-bounds via maxTokens
17. Persisting output to file model reads back with Read is circular
18. Checked before GB override so tengu_satin_quoll can't force it back on
19. `persistToolResult` - persists tool result to disk
20. `readPersistedToolResult` - reads persisted tool result
21. `deletePersistedToolResult` - deletes persisted tool result
22. `getPersistedToolResultPath` - gets persisted tool result path
23. `shouldPersistToolResult` - checks if should persist tool result
24. `processToolResultBlock` - processes tool result block
25. `getToolResultsDir` - gets tool results directory
26. `TOOL_RESULT_FILE_PREFIX` - tool result file prefix
27. `BYTES_PER_TOKEN`, `DEFAULT_MAX_RESULT_SIZE_CHARS`, `MAX_TOOL_RESULT_BYTES`, `MAX_TOOL_RESULTS_PER_MESSAGE_CHARS` - constants

## Exports
- `TOOL_RESULTS_SUBDIR` - tool results subdirectory
- `PERSISTED_OUTPUT_TAG`, `PERSISTED_OUTPUT_CLOSING_TAG` - persisted output tags
- `TOOL_RESULT_CLEARED_MESSAGE` - cleared message
- `PERSIST_THRESHOLD_OVERRIDE_FLAG` - override flag
- `getPersistenceThreshold` - gets persistence threshold
- `persistToolResult` - persists tool result
- `readPersistedToolResult` - reads persisted result
- `deletePersistedToolResult` - deletes persisted result
- `getPersistedToolResultPath` - gets result path
- `shouldPersistToolResult` - checks if should persist
- `processToolResultBlock` - processes result block
- `getToolResultsDir` - gets results directory
