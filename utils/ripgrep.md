# ripgrep

## Purpose
we use node:path.join instead of node:url.resolve because the former doesn't encode spaces

## Imports
- **Stdlib**: child_process, child_process, lodash-es/memoize.js, os, path, src/services/analytics/index.js, url
- **Internal**: ./bundledMode.js, ./debug.js, ./envUtils.js, ./execFileNoThrow.js, ./findExecutable.js, ./log.js, ./platform.js, ./stringUtils.js

## Items

### RipgrepTimeoutError
**Type**: Class

### ripgrepCommand
**Type**: Function

### isEagainError
**Type**: Function

### ripGrepRaw
**Type**: Function

### ripGrepFileCount
**Type**: Function

### ripGrepStream
**Type**: Function

### ripGrep
**Type**: Function

### getRipgrepStatus
**Type**: Function

### codesignRipgrepIfNecessary
**Type**: Function

### RipgrepConfig
**Type**: Type alias

## Exports
- ripgrepCommand
- RipgrepTimeoutError
- ripGrepStream
- ripGrep
- countFilesRoundedRg
- getRipgrepStatus

## Source
`ripgrep.ts`