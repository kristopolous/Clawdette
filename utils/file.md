# file

## Purpose
Normalize any existing CRLF to LF first so a new_string that already

## Imports
- **Stdlib**: fs, fs/promises, os, src/services/analytics/index.js
- **Internal**: ../services/analytics/growthbook.js, ../utils/cwd.js, ./debug.js, ./errors.js, ./fileReadCache.js, ./fsOperations.js, ./log.js, ./path.js, ./platform.js

## Items

### pathExists
**Type**: Function

### readFileSafe
**Type**: Function

### getFileModificationTime
**Type**: Function

### getFileModificationTimeAsync
**Type**: Function

### writeTextContent
**Type**: Function

### detectFileEncoding
**Type**: Function

### detectLineEndings
**Type**: Function

### convertLeadingTabsToSpaces
**Type**: Function

### getAbsoluteAndRelativePaths
**Type**: Function

### getDisplayPath
**Type**: Function

### findSimilarFile
**Type**: Function

### suggestPathUnderCwd
**Type**: Function

### isCompactLinePrefixEnabled
**Type**: Function

### addLineNumbers
**Type**: Function

### stripLineNumberPrefix
**Type**: Function

### isDirEmpty
**Type**: Function

### readFileSyncCached
**Type**: Function

### writeFileSyncAndFlush_DEPRECATED
**Type**: Function

### getDesktopPath
**Type**: Function

### isFileWithinReadSizeLimit
**Type**: Function

### normalizePathForComparison
**Type**: Function

### pathsEqual
**Type**: Function

### File
**Type**: Type alias

## Exports
- File
- pathExists
- MAX_OUTPUT_SIZE
- readFileSafe
- getFileModificationTime
- getFileModificationTimeAsync
- writeTextContent
- detectFileEncoding
- detectLineEndings
- convertLeadingTabsToSpaces
- getAbsoluteAndRelativePaths
- getDisplayPath
- findSimilarFile
- FILE_NOT_FOUND_CWD_NOTE
- suggestPathUnderCwd
- isCompactLinePrefixEnabled
- addLineNumbers
- stripLineNumberPrefix
- isDirEmpty
- readFileSyncCached
- writeFileSyncAndFlush_DEPRECATED
- getDesktopPath
- isFileWithinReadSizeLimit
- normalizePathForComparison
- pathsEqual

## Source
`file.ts`