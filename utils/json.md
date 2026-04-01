# json

## Purpose
Memoized inner parse. Uses a discriminated-union wrapper because:

## Imports
- **Stdlib**: fs/promises
- **Internal**: ./jsonRead.js, ./log.js, ./memoize.js, ./slowOperations.js

## Items

### parseJSONUncached
**Type**: Function

### safeParseJSON
**Type**: Function

### safeParseJSONC
**Type**: Function

### addItemToJSONCArray
**Type**: Function

### CachedParse
**Type**: Type alias

### BunJSONLParseChunk
**Type**: Type alias

## Exports
- safeParseJSON
- safeParseJSONC
- parseJSONL
- readJSONLFile
- addItemToJSONCArray

## Source
`json.ts`