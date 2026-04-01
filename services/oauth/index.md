# oauth/index

## Purpose
Implements OAuthService for OAuth 2.0 authorization code flow with PKCE.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: analytics, browser, auth-code-listener, client, crypto, types

## Logic
1. `OAuthService` - main OAuth service class
2. Supports automatic (browser redirect) and manual (copy/paste) flows
3. `codeVerifier` - PKCE code verifier generated on construction
4. `authCodeListener` - localhost server for capturing authorization code
5. `port` - listening port for callback
6. `manualAuthCodeResolver` - resolver for manual auth code input
7. `startOAuthFlow` - main entry point for OAuth flow
8. Creates AuthCodeListener and starts it on random port
9. Generates PKCE code challenge and state
10. Builds both automatic and manual flow URLs
11. `waitForAuthorizationCode` - waits for either automatic or manual code
12. `completeOAuthFlow` - exchanges code for tokens
13. `cleanup` - closes auth code listener
14. Supports skipBrowserOpen for SDK control protocol (caller owns display)

## Exports
- `OAuthService` - OAuth service class handling authorization code flow with PKCE
