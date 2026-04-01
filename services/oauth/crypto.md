# oauth/crypto

## Purpose
Provides cryptographic utilities for OAuth PKCE flow.

## Imports
- **Stdlib**: `crypto`
- **External**: (none)
- **Internal**: (none)

## Logic
1. `base64URLEncode` - encodes buffer to base64url (RFC 4648)
2. Replaces + with -, / with _, removes = padding
3. `generateCodeVerifier` - generates 32-byte random code verifier
4. `generateCodeChallenge` - generates SHA256 code challenge from verifier
5. `generateState` - generates 32-byte random state parameter for CSRF protection
6. All functions use cryptographically secure random bytes

## Exports
- `base64URLEncode` - base64url encoding function
- `generateCodeVerifier` - generates PKCE code verifier
- `generateCodeChallenge` - generates PKCE code challenge
- `generateState` - generates OAuth state parameter
