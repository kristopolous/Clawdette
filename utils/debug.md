# debug

## Purpose
Also check for --debug=pattern syntax

## Imports
- **Stdlib**: fs/promises, lodash-es/memoize.js, path, src/bootstrap/state.js
- **Internal**: ./bufferedWriter.js, ./cleanupRegistry.js, ./envUtils.js, ./fsOperations.js, ./process.js, ./slowOperations.js

## Items

### enableDebugLogging
**Type**: Function

### shouldLogDebugMessage
**Type**: Function

### setHasFormattedOutput
**Type**: Function

### getHasFormattedOutput
**Type**: Function

### appendAsync
**Type**: Function

### noop
**Type**: Function

### getDebugWriter
**Type**: Function

### flushDebugLogs
**Type**: Function

### logForDebugging
**Type**: Function

### getDebugLogPath
**Type**: Function

### logAntError
**Type**: Function

### DebugLogLevel
**Type**: Type alias

## Exports
- DebugLogLevel
- getMinDebugLogLevel
- isDebugMode
- enableDebugLogging
- getDebugFilter
- isDebugToStdErr
- getDebugFilePath
- setHasFormattedOutput
- getHasFormattedOutput
- flushDebugLogs
- logForDebugging
- getDebugLogPath
- logAntError

## Source
`debug.ts`