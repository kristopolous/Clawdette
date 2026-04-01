# trustedDevice

## Purpose
Manages trusted device token enrollment and retrieval for elevated-auth bridge (Remote Control) sessions.

## Imports
- **Stdlib**: `os`
- **External**: `axios`, `lodash-es/memoize`
- **Internal**: oauth config, GrowthBook, debug/error utils, privacyLevel, secureStorage, JSON utils

## Logic
1. GrowthBook gate `tengu_sessions_elevated_auth_enforcement` controls feature availability
2. `getTrustedDeviceToken` - returns memoized token from secure storage (env var takes precedence)
3. Token enrollment via POST /auth/trusted_devices during login (gated by account_session.created_at < 10min)
4. 90-day rolling expiry with persistent keychain storage
5. Cache cleared on enrollment and logout
6. Server-side gate controls ConnectBridgeWorker enforcement; CLI-side gate controls header sending
7. Two-phase rollout: CLI sends headers first, server enforces later

## Exports
- `getTrustedDeviceToken` - gets cached trusted device token for elevated auth
- `clearTrustedDeviceTokenCache` - clears memoization cache
- `clearTrustedDeviceToken` - removes token from secure storage and cache
- `enrollTrustedDevice` - enrolls device via API and persists token to keychain
