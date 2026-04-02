# diskOutput

## Purpose
SECURITY: O_NOFOLLOW prevents following symlinks when opening task output files.

## Imports
- **Stdlib**: fs, path
- **Internal**: ../../bootstrap/state, ./errors, ../fsOperations, ../log, ../permissions/filesystem

## Items

### getTaskOutputDir
**Type**: Function

### _resetTaskOutputDirForTest
**Type**: Function

### ensureOutputDir
**Type**: Function

### getTaskOutputPath
**Type**: Function

### _clearOutputsForTest
**Type**: Function

### getOrCreateOutput
**Type**: Function

### appendTaskOutput
**Type**: Function

### flushTaskOutput
**Type**: Function

### evictTaskOutput
**Type**: Function

### getTaskOutputDelta
**Type**: Function

### getTaskOutput
**Type**: Function

### getTaskOutputSize
**Type**: Function

### cleanupTaskOutput
**Type**: Function

### initTaskOutput
**Type**: Function

### initTaskOutputAsSymlink
**Type**: Function

## Exports
- MAX_TASK_OUTPUT_BYTES
- MAX_TASK_OUTPUT_BYTES_DISPLAY
- getTaskOutputDir
- _resetTaskOutputDirForTest
- getTaskOutputPath
- DiskTaskOutput
- _clearOutputsForTest
- appendTaskOutput
- flushTaskOutput
- evictTaskOutput
- getTaskOutputDelta
- getTaskOutput
- getTaskOutputSize
- cleanupTaskOutput
- initTaskOutput
- initTaskOutputAsSymlink

## Source
`diskOutput`