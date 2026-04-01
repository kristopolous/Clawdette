# macOsKeychainStorage

## Purpose
`security -i` reads stdin with a 4096-byte fgets() buffer (BUFSIZ on darwin).

## Imports
- **Stdlib**: execa
- **Internal**: ../debug.js, ../execFileNoThrow.js, ../execFileNoThrowPortable.js, ../slowOperations.js, ./types.js

## Items

### doReadAsync
**Type**: Function

### isMacOsKeychainLocked
**Type**: Function

## Exports
- macOsKeychainStorage
- isMacOsKeychainLocked

## Source
`macOsKeychainStorage.ts`