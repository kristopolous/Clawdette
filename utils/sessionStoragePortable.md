# sessionStoragePortable

## Purpose
---------------------------------------------------------------------------

## Imports
- **Stdlib**: crypto, fs/promises, path
- **Internal**: ./envUtils.js, ./getWorktreePathsPortable.js, ./hash.js

## Items

### validateUuid
**Type**: Function

### unescapeJsonString
**Type**: Function

### extractJsonStringField
**Type**: Function

### extractLastJsonStringField
**Type**: Function

### extractFirstPromptFromHead
**Type**: Function

### readHeadAndTail
**Type**: Function

### readSessionLite
**Type**: Function

### simpleHash
**Type**: Function

### sanitizePath
**Type**: Function

### getProjectsDir
**Type**: Function

### getProjectDir
**Type**: Function

### canonicalizePath
**Type**: Function

### findProjectDir
**Type**: Function

### resolveSessionFilePath
**Type**: Function

### compactBoundaryMarker
**Type**: Function

### parseBoundaryLine
**Type**: Function

### sinkWrite
**Type**: Function

### hasPrefix
**Type**: Function

### processStraddle
**Type**: Function

### scanChunkLines
**Type**: Function

### captureSnap
**Type**: Function

### captureCarry
**Type**: Function

### finalizeOutput
**Type**: Function

### readTranscriptForLoad
**Type**: Function

### LiteSessionFile
**Type**: Type alias

### Sink
**Type**: Type alias

### LoadState
**Type**: Type alias

## Exports
- LITE_READ_BUF_SIZE
- validateUuid
- unescapeJsonString
- extractJsonStringField
- extractLastJsonStringField
- extractFirstPromptFromHead
- readHeadAndTail
- LiteSessionFile
- readSessionLite
- MAX_SANITIZED_LENGTH
- sanitizePath
- getProjectsDir
- getProjectDir
- canonicalizePath
- findProjectDir
- resolveSessionFilePath
- SKIP_PRECOMPACT_THRESHOLD
- readTranscriptForLoad

## Source
`sessionStoragePortable.ts`