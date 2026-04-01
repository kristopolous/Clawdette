# fsOperations

## Purpose
File access and information operations

## Imports
- **Stdlib**: fs, os, path
- **Internal**: ./errors.js, ./slowOperations.js

## Items

### safeResolvePath
**Type**: Function

### isDuplicatePath
**Type**: Function

### resolveDeepestExistingAncestorSync
**Type**: Function

### getPathsForPermissionCheck
**Type**: Function

### setFsImplementation
**Type**: Function

### getFsImplementation
**Type**: Function

### setOriginalFsImplementation
**Type**: Function

### readFileRange
**Type**: Function

### tailFile
**Type**: Function

### based
**Type**: Interface

### FsOperations
**Type**: Type alias

### ReadFileRangeResult
**Type**: Type alias

## Exports
- FsOperations
- safeResolvePath
- isDuplicatePath
- resolveDeepestExistingAncestorSync
- getPathsForPermissionCheck
- NodeFsOperations
- setFsImplementation
- getFsImplementation
- setOriginalFsImplementation
- ReadFileRangeResult
- readFileRange
- tailFile

## Source
`fsOperations.ts`