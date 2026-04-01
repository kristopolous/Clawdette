# diff

## Purpose
For some reason, & confuses the diff library, so we replace it with a token,

## Imports
- **Stdlib**: diff, src/services/analytics/index.js
- **Internal**: ../bootstrap/state.js, ../cost-tracker.js, ../tools/FileEditTool/types.js, ./array.js, ./file.js

## Items

### adjustHunkLineNumbers
**Type**: Function

### escapeForDiff
**Type**: Function

### unescapeFromDiff
**Type**: Function

### countLinesChanged
**Type**: Function

### getPatchFromContents
**Type**: Function

### getPatchForDisplay
**Type**: Function

## Exports
- CONTEXT_LINES
- DIFF_TIMEOUT_MS
- adjustHunkLineNumbers
- countLinesChanged
- getPatchFromContents
- getPatchForDisplay

## Source
`diff.ts`