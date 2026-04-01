# oauth/auth-code-listener

## Purpose
Implements temporary localhost HTTP server for capturing OAuth authorization code redirects.

## Imports
- **Stdlib**: `http`, `net`
- **External**: (none)
- **Internal**: analytics, oauth config, log, client utils

## Logic
1. `AuthCodeListener` - class for OAuth callback capture
2. Listens for redirects: http://localhost:[port]/callback?code=AUTH_CODE&state=STATE
3. NOT an OAuth server - just redirect capture mechanism
4. `localServer` - HTTP server instance
5. `promiseResolver`/`promiseRejecter` - resolve/reject authorization promise
6. `expectedState` - CSRF protection state parameter
7. `pendingResponse` - stored response for final redirect
8. `callbackPath` - configurable callback path (default: /callback)
9. `start` - starts listening on OS-assigned or specified port
10. `getPort` - returns listening port
11. `hasPendingResponse` - checks if response pending
12. `waitForAuthorization` - waits for authorization with state validation
13. `handleSuccessRedirect` - redirects browser to success page based on scopes
14. `startLocalListener` - starts request handler for callback endpoint

## Exports
- `AuthCodeListener` - class for OAuth callback capture
