# pasteStore

## Purpose
Content-addressable: same hash = same content, so overwriting is safe

## Imports
- **Stdlib**: crypto, fs/promises, path
- **Internal**: ./debug.js, ./envUtils.js, ./errors.js

## Items

### getPasteStoreDir
**Type**: Function

### hashPastedText
**Type**: Function

### getPastePath
**Type**: Function

### storePastedText
**Type**: Function

### retrievePastedText
**Type**: Function

### cleanupOldPastes
**Type**: Function

## Exports
- hashPastedText
- storePastedText
- retrievePastedText
- cleanupOldPastes

## Source
`pasteStore.ts`