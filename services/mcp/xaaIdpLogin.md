# mcp/xaaIdpLogin

## Purpose
Acquires OIDC id_token from enterprise IdP via authorization_code + PKCE flow for XAA authentication.

## Imports
- **Stdlib**: `crypto`, `http`, `url`
- **External**: `@modelcontextprotocol/sdk`, `xss`
- **Internal**: browser, envUtils, errors, log, platform, secureStorage, settings, JSON utils, oauthPort

## Logic
1. `isXaaEnabled` - checks CLAUDE_CODE_ENABLE_XAA env var
2. `XaaIdpSettings` - type with issuer, clientId, callbackPort
3. `getXaaIdpSettings` - typed accessor for settings.xaaIdp (env-gated field)
4. `IDP_LOGIN_TIMEOUT_MS` (5min), `IDP_REQUEST_TIMEOUT_MS` (30s), `ID_TOKEN_EXPIRY_BUFFER_S` (60s)
5. `IdpLoginOptions` - options with idpIssuer, idpClientId, idpClientSecret, callbackPort, onAuthorizationUrl, skipBrowserOpen, abortSignal
6. `normalizeIdpIssuer` - normalizes issuer URL for cache key (strip trailing slash, lowercase host)
7. `discoverOidc` - discovers OIDC metadata from issuer
8. `getCachedIdpIdToken` - retrieves cached id_token from keychain
9. `acquireIdpIdToken` - performs full authorization_code + PKCE flow
10. Creates local HTTP server for callback
11. Opens browser to authorization URL
12. Exchanges code for id_token
13. Caches id_token in keychain
14. `clearIdpIdToken` - clears cached id_token

## Exports
- `isXaaEnabled` - checks XAA enabled flag
- `XaaIdpSettings` - IdP settings type
- `getXaaIdpSettings` - gets IdP settings
- `IdpLoginOptions` - login options type
- `discoverOidc` - discovers OIDC metadata
- `getCachedIdpIdToken` - gets cached id_token
- `acquireIdpIdToken` - acquires id_token via PKCE flow
- `clearIdpIdToken` - clears cached id_token
