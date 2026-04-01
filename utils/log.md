# log

## Purpose
Skip firstPrompt if it's a tick/goal message (autonomous mode auto-prompt)

## Imports
- **Stdlib**: bun:bundle, fs/promises, lodash-es/memoize.js, path, src/constants/querySource.js
- **External**: @anthropic-ai/sdk/resources/beta/messages/messages.mjs
- **Internal**: ../constants/xml.js, ./cachePaths.js, ./displayTags.js, ./envUtils.js, ./errors.js, ./privacyLevel.js, ./slowOperations.js

## Items

### getLogDisplayTitle
**Type**: Function

### dateToFilename
**Type**: Function

### addToInMemoryErrorLog
**Type**: Function

### attachErrorLogSink
**Type**: Function

### logError
**Type**: Function

### getInMemoryErrors
**Type**: Function

### loadErrorLogs
**Type**: Function

### getErrorLogByIndex
**Type**: Function

### loadLogList
**Type**: Function

### parseISOString
**Type**: Function

### logMCPError
**Type**: Function

### logMCPDebug
**Type**: Function

### captureAPIRequest
**Type**: Function

### _resetErrorLogForTesting
**Type**: Function

### for
**Type**: Interface

### ErrorLogSink
**Type**: Type alias

### QueuedErrorEvent
**Type**: Type alias

## Exports
- getLogDisplayTitle
- dateToFilename
- ErrorLogSink
- attachErrorLogSink
- logError
- getInMemoryErrors
- loadErrorLogs
- getErrorLogByIndex
- logMCPError
- logMCPDebug
- captureAPIRequest
- _resetErrorLogForTesting

## Source
`log.ts`