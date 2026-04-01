# codeSessionApi

## Purpose
Provides thin HTTP wrappers for the CCR v2 code-session API, enabling session creation and remote credential fetching without heavy CLI dependencies.

## Imports
- **Stdlib**: (none)
- **External**: `axios`
- **Internal**: debug utils, error utils, JSON utils, debugUtils

## Logic
1. `createCodeSession` - POSTs to /v1/code/sessions with title, bridge runner, and optional tags
2. Validates response contains session.id starting with `cse_` prefix
3. `fetchRemoteCredentials` - GETs /v1/code/sessions/{id}/bridge to obtain worker JWT and API URL
4. Each /bridge call bumps worker_epoch server-side (serves as register heartbeat)
5. Supports optional trusted device token header for elevated auth
6. Handles errors gracefully, returning null on failure (non-fatal)

## Exports
- `RemoteCredentials` - type with worker_jwt, api_base_url, expires_in, worker_epoch
- `createCodeSession` - creates a code session, returns session ID or null
- `fetchRemoteCredentials` - fetches bridge credentials for a session
