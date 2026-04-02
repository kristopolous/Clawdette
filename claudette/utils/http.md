# http

## Purpose
HTTP utility constants and helpers for building user agents, getting auth headers, and handling OAuth retries for API requests.

## Imports
- **External**: axios
- **Internal**: ../constants/oauth, ./auth, ./userAgent, ./workloadContext

## Logic
1. `getUserAgent` - builds User-Agent string with version, user type, entrypoint, optional SDK version, client app, and workload suffix. WARNING: `claude-cli` prefix is used for log filtering.
2. `getMCPUserAgent` - builds User-Agent for MCP with entrypoint, SDK version, and client app suffixes.
3. `getWebFetchUserAgent` - builds User-Agent for arbitrary web fetches using documented `Claude-User` agent.
4. `getAuthHeaders` - returns OAuth Bearer token headers for Max/Pro subscribers, or `x-api-key` header for API key users. Returns error string if no auth available.
5. `withOAuth401Retry` - wraps a request, catches 401 (and optionally 403 with "OAuth token has been revoked"), refreshes token via `handleOAuth401Error`, and retries once. Request closure should re-read auth on retry.

## Exports
- `getUserAgent` - builds full CLI User-Agent string
- `getMCPUserAgent` - builds MCP-specific User-Agent string
- `getWebFetchUserAgent` - builds User-Agent for WebFetch to arbitrary sites
- `AuthHeaders` - type alias for `{ headers, error? }`
- `getAuthHeaders` - returns auth headers (OAuth or API key) based on user type
- `withOAuth401Retry` - retries request once on OAuth 401/403 errors after token refresh
