# utils/secureStorage/index

## Purpose
Provides secure storage abstraction for different platforms.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: secureStorage fallbackStorage/macOsKeychainStorage/plainTextStorage/types

## Logic
1. `getSecureStorage` - gets appropriate secure storage for platform
2. macOS: uses createFallbackStorage with macOsKeychainStorage and plainTextStorage fallback
3. Linux: TODO - add libsecret support
4. Other platforms: uses plainTextStorage
5. `createFallbackStorage` - creates storage with fallback
6. `macOsKeychainStorage` - macOS keychain storage implementation
7. `plainTextStorage` - plain text storage implementation (fallback)
8. `SecureStorage` - secure storage interface

## Exports
- `getSecureStorage` - gets secure storage for platform
