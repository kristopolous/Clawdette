# oauth/client

## Purpose
Implements OAuth client for authentication flows with Claude services.

## Imports
- **Stdlib**: (none)
- **External**: `axios`
- **Internal**: analytics, oauth constants, auth utils, config, debug, getOauthProfile, types

## Logic
1. `shouldUseClaudeAIAuth` - checks for CLAUDE_AI_INFERENCE_SCOPE in scopes
2. `parseScopes` - parses space-separated scope string to array
3. `buildAuthUrl` - builds OAuth authorization URL with PKCE params
4. Supports Claude.ai vs Console auth based on loginWithClaudeAi flag
5. Inference-only mode for limited scope
6. Org UUID for enterprise org selection
7. loginHint for pre-filling email
8. loginMethod for tracking auth method
9. `exchangeCodeForTokens` - exchanges authorization code for tokens
10. `refreshOAuthToken` - refreshes expired access token
11. `fetchAndStoreUserRoles` - fetches user roles from API
12. `storeOAuthAccountInfo` - stores account info in config
13. `saveOAuthTokensIfNeeded` - saves tokens to secure storage
14. `clearOAuthTokenCache` - clears cached tokens
15. `getAuthTokenSource` - determines auth token source (user/project/org/temporary/oauth)

## Exports
- `shouldUseClaudeAIAuth` - checks Claude.ai auth scope
- `parseScopes` - parses scope string
- `buildAuthUrl` - builds authorization URL
- `exchangeCodeForTokens` - exchanges code for tokens
- `refreshOAuthToken` - refreshes access token
- `fetchAndStoreUserRoles` - fetches user roles
- `storeOAuthAccountInfo` - stores account info
- `saveOAuthTokensIfNeeded` - saves tokens to storage
- `clearOAuthTokenCache` - clears token cache
- `getAuthTokenSource` - gets auth token source
