# oauth/getOauthProfile

## Purpose
Fetches OAuth profile information from API using either API key or OAuth access token.

## Imports
- **Stdlib**: (none)
- **External**: `axios`
- **Internal**: oauth constants/types, auth, config, log

## Logic
1. `getOauthProfileFromApiKey` - fetches profile using API key
2. Requires both account UUID and API key
3. Endpoint: /api/claude_cli_profile with account_uuid param
4. Headers: x-api-key, anthropic-beta
5. 10-second timeout
6. `getOauthProfileFromOauthToken` - fetches profile using OAuth access token
7. Endpoint: /api/oauth/profile
8. Headers: Authorization Bearer token, Content-Type
9. 10-second timeout
10. Both functions return undefined on error (logged via logError)

## Exports
- `getOauthProfileFromApiKey` - fetches profile using API key
- `getOauthProfileFromOauthToken` - fetches profile using OAuth token
