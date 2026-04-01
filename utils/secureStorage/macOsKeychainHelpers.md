# macOsKeychainHelpers

## Purpose
Suffix distinguishing the OAuth credentials keychain entry from the legacy

## Imports
- **Stdlib**: crypto, os, src/constants/oauth.js
- **Internal**: ../envUtils.js, ./types.js

## Items

### getMacOsKeychainStorageServiceName
**Type**: Function

### getUsername
**Type**: Function

### clearKeychainCache
**Type**: Function

### primeKeychainCacheFromPrefetch
**Type**: Function

## Exports
- CREDENTIALS_SERVICE_SUFFIX
- getMacOsKeychainStorageServiceName
- getUsername
- KEYCHAIN_CACHE_TTL_MS
- keychainCacheState
- clearKeychainCache
- primeKeychainCacheFromPrefetch

## Source
`macOsKeychainHelpers.ts`