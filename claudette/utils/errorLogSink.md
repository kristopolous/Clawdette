# errorLogSink

## Purpose
Buffered writers for JSONL log files, keyed by path

## Imports
- **Stdlib**: axios, path
- **Internal**: ../bootstrap/state.js, ./bufferedWriter.js, ./cachePaths.js, ./cleanupRegistry.js, ./debug.js, ./fsOperations.js, ./log.js, ./slowOperations

## Items

### getErrorsPath
**Type**: Function

### getMCPLogsPath
**Type**: Function

### createJsonlWriter
**Type**: Function

### _flushLogWritersForTesting
**Type**: Function

### _clearLogWritersForTesting
**Type**: Function

### getLogWriter
**Type**: Function

### appendToLog
**Type**: Function

### extractServerMessage
**Type**: Function

### logErrorImpl
**Type**: Function

### logMCPErrorImpl
**Type**: Function

### logMCPDebugImpl
**Type**: Function

### initializeErrorLogSink
**Type**: Function

### JsonlWriter
**Type**: Type alias

## Exports
- getErrorsPath
- getMCPLogsPath
- _flushLogWritersForTesting
- _clearLogWritersForTesting
- initializeErrorLogSink

## Source
`errorLogSink.ts`