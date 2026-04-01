# createSession

## Purpose
Creates a bridge session via POST /v1/sessions with conversation history, git source, and permission mode configuration.

## Imports
- **Stdlib**: (none)
- **External**: `axios` (dynamic import)
- **Internal**: SDK types, debug utils, error utils, sessionIdCompat, auth, oauth, git, model utils

## Logic
1. Builds git source and outcome context from repo URL and branch
2. Parses GitHub repository info and determines default branch if needed
3. Constructs session creation payload with events, git info, and permission mode
4. Wraps SDK messages in `{ type: 'event', data: ... }` discriminated union format
5. Fetches access token, org UUID, and OAuth headers for authentication
6. Returns session ID on success, null on failure (non-fatal)
7. Used by both `claude remote-control` (empty session) and `/remote-control` (pre-populated history)

## Exports
- `createBridgeSession` - creates a bridge session with conversation history and git context
