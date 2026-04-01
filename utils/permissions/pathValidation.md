# pathValidation

## Purpose
Get everything before the first glob character

## Imports
- **Stdlib**: lodash-es/memoize.js, os, path
- **Internal**: ../../Tool.js, ../../utils/platform.js, ../path.js, ../sandbox/sandbox-adapter.js, ../shell/readOnlyCommandValidation.js, ./PermissionResult.js

## Items

### formatDirectoryList
**Type**: Function

### getGlobBaseDirectory
**Type**: Function

### expandTilde
**Type**: Function

### isPathInSandboxWriteAllowlist
**Type**: Function

### isPathAllowed
**Type**: Function

### validateGlobPattern
**Type**: Function

### isDangerousRemovalPath
**Type**: Function

### validatePath
**Type**: Function

### FileOperationType
**Type**: Type alias

### PathCheckResult
**Type**: Type alias

### ResolvedPathCheckResult
**Type**: Type alias

## Exports
- FileOperationType
- PathCheckResult
- ResolvedPathCheckResult
- formatDirectoryList
- getGlobBaseDirectory
- expandTilde
- isPathInSandboxWriteAllowlist
- isPathAllowed
- validateGlobPattern
- isDangerousRemovalPath
- validatePath

## Source
`pathValidation.ts`