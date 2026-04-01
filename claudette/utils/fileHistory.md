# fileHistory

## Purpose
Monotonically-increasing counter incremented on every snapshot, even when

## Imports
- **Stdlib**: crypto, diff, fs, path, src/services/analytics/index.js, src/services/mcp/vscodeSdkMcp.js, src/types/logs.js, util
- **Internal**: ./config.js, ./debug.js, ./envUtils.js, ./errors.js, ./file, ./log, ./sessionStorage

## Items

### fileHistoryEnabled
**Type**: Function

### fileHistoryEnabledSdk
**Type**: Function

### fileHistoryTrackEdit
**Type**: Function

### fileHistoryMakeSnapshot
**Type**: Function

### fileHistoryRewind
**Type**: Function

### fileHistoryCanRestore
**Type**: Function

### fileHistoryGetDiffStats
**Type**: Function

### fileHistoryHasAnyChanges
**Type**: Function

### applySnapshot
**Type**: Function

### checkOriginFileChanged
**Type**: Function

### computeDiffStatsForFile
**Type**: Function

### getBackupFileName
**Type**: Function

### resolveBackupPath
**Type**: Function

### createBackup
**Type**: Function

### restoreBackup
**Type**: Function

### getBackupFileNameFirstVersion
**Type**: Function

### maybeShortenFilePath
**Type**: Function

### maybeExpandFilePath
**Type**: Function

### fileHistoryRestoreStateFromLog
**Type**: Function

### copyFileHistoryForResume
**Type**: Function

### notifyVscodeSnapshotFilesUpdated
**Type**: Function

### readFileAsyncOrNull
**Type**: Function

### maybeDumpStateForDebug
**Type**: Function

### BackupFileName
**Type**: Type alias

### FileHistoryBackup
**Type**: Type alias

### FileHistorySnapshot
**Type**: Type alias

### FileHistoryState
**Type**: Type alias

### DiffStats
**Type**: Type alias

## Exports
- FileHistoryBackup
- FileHistorySnapshot
- FileHistoryState
- DiffStats
- fileHistoryEnabled
- fileHistoryTrackEdit
- fileHistoryMakeSnapshot
- fileHistoryRewind
- fileHistoryCanRestore
- fileHistoryGetDiffStats
- fileHistoryHasAnyChanges
- checkOriginFileChanged
- fileHistoryRestoreStateFromLog
- copyFileHistoryForResume

## Source
`fileHistory.ts`