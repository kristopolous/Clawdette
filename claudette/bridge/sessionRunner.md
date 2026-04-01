# sessionRunner

## Purpose
Implements session spawner that launches child CLI processes and tracks their activity, stderr, and permission requests.

## Imports
- **Stdlib**: `child_process`, `fs`, `os`, `path`, `readline`
- **External**: (none)
- **Internal**: JSON utils, debugUtils, bridge types

## Logic
1. `createSessionSpawner` - factory that creates spawner with deps (execPath, env, sandbox, etc.)
2. Spawns child `claude` process with SDK URL and session configuration
3. Parses NDJSON stdout for assistant/tool messages to extract activity summaries
4. Tracks last N activities (max 10) for status display
5. Captures last N stderr lines (max 10) for error diagnostics
6. Forwards permission requests (can_use_tool) to parent via callback
7. Handles process exit and cleanup
8. `toolSummary` - maps tool names to human-readable verbs with target preview

## Exports
- `safeFilenameId` - sanitizes session ID for use in filenames
- `PermissionRequest` - type for tool permission requests
- `createSessionSpawner` - factory creating the session spawner
