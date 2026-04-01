# pathValidation

## Purpose
Get everything before the first glob character

## Imports
- **Stdlib**: lodashes/memoize, os, path
- **Internal**: ../../Tool, .././utils/platform, ./path, ../sandbox/sandbox-adapter, ../shell/readOnlyCommandValidation, ./PermissionResult

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