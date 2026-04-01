# bridgePointer

## Purpose
Provides crash-recovery pointer tracking for Remote Control sessions, enabling session resume after unclean shutdowns.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: `zod/v4`
- **Internal**: debug utils, error utils, worktree/session storage utils, JSON utils

## Logic
1. Writes pointer file immediately after session creation with session/environment IDs
2. Periodically refreshes pointer mtime during long sessions (same-content write bumps staleness clock)
3. Reads pointer and calculates age from file mtime (not embedded timestamp)
4. Validates against 4-hour TTL (matches backend BRIDGE_LAST_POLL_TTL)
5. Clears stale/corrupted pointers to prevent repeated prompts for GC'd environments
6. Scoped per working directory to support concurrent bridges in different repos

## Exports
- `BRIDGE_POINTER_TTL_MS` - staleness threshold constant (4 hours)
- `BridgePointer` - schema type with sessionId, environmentId, source
- `getBridgePointerPath` - gets path to pointer file for a directory
- `writeBridgePointer` - writes/refreshes pointer file (best-effort)
- `readBridgePointer` - reads pointer with age, returns null if stale/invalid
