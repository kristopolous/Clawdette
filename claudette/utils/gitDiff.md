# gitDiff

## Purpose
Skip diff calculation during transient git states since the

## Imports
- **Stdlib**: diff, fs/promises, path
- **Internal**: ./cwd, ./detectRepository, ./execFileNoThrow, ./file

## Items

### fetchGitDiff
**Type**: Function

### fetchGitDiffHunks
**Type**: Function

### parseGitNumstat
**Type**: Function

### parseGitDiff
**Type**: Function

### isInTransientGitState
**Type**: Function

### fetchUntrackedFiles
**Type**: Function

### parseShortstat
**Type**: Function

### fetchSingleFileGitDiff
**Type**: Function

### parseRawDiffToToolUseDiff
**Type**: Function

### getDiffRef
**Type**: Function

### generateSyntheticDiff
**Type**: Function

### GitDiffStats
**Type**: Type alias

### PerFileStats
**Type**: Type alias

### GitDiffResult
**Type**: Type alias

### NumstatResult
**Type**: Type alias

### ToolUseDiff
**Type**: Type alias

## Exports
- GitDiffStats
- PerFileStats
- GitDiffResult
- fetchGitDiff
- fetchGitDiffHunks
- NumstatResult
- parseGitNumstat
- parseGitDiff
- parseShortstat
- ToolUseDiff
- fetchSingleFileGitDiff

## Source
`gitDiff`