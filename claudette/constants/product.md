## Purpose
Manages product URLs and environment detection for remote sessions.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: none

## Logic
Provides base URLs for production, staging, and local development environments. Determines the current environment by inspecting session IDs and ingress URLs, then returns the appropriate base URL or full session URL.

## Exports
- `PRODUCT_URL` - public product documentation URL
- `CLAUDE_AI_BASE_URL` - production base URL for remote sessions
- `CLAUDE_AI_STAGING_BASE_URL` - staging base URL for remote sessions
- `CLAUDE_AI_LOCAL_BASE_URL` - local development base URL for remote sessions
- `isRemoteSessionStaging` - checks if a session is running in staging
- `isRemoteSessionLocal` - checks if a session is running in local development
- `getClaudeAiBaseUrl` - returns the appropriate base URL based on session environment
- `getRemoteSessionUrl` - returns the full session URL with compatibility shim for session ID formats
