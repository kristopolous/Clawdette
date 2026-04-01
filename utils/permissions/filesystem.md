# filesystem

## Purpose
Try both path separators (Windows paths may not be normalized to /)

## Imports
- **Stdlib**: bun:bundle, crypto, ignore, lodash-es/memoize.js, os, path, src/memdir/paths.js, src/tools/AgentTool/agentMemory.js, zod/v4
- **Internal**: ../../bootstrap/state.js, ../../services/analytics/growthbook.js, ../../Tool.js, ../../tools/FileReadTool/prompt.js, ../cwd.js, ../envUtils.js, ../plans.js, ../platform.js, ../sessionStorage.js, ../settings/constants.js...

## Items

### normalizeCaseForComparison
**Type**: Function

### getClaudeSkillScope
**Type**: Function

### relativePath
**Type**: Function

### toPosixPath
**Type**: Function

### getSettingsPaths
**Type**: Function

### isClaudeSettingsPath
**Type**: Function

### isClaudeConfigFilePath
**Type**: Function

### isSessionPlanFile
**Type**: Function

### getSessionMemoryDir
**Type**: Function

### getSessionMemoryPath
**Type**: Function

### isSessionMemoryPath
**Type**: Function

### isProjectDirPath
**Type**: Function

### isScratchpadEnabled
**Type**: Function

### getClaudeTempDirName
**Type**: Function

### getClaudeTempDir
**Type**: Function

### getBundledSkillsRoot
**Type**: Function

### getProjectTempDir
**Type**: Function

### getScratchpadDir
**Type**: Function

### ensureScratchpadDir
**Type**: Function

### isScratchpadPath
**Type**: Function

### isDangerousFilePathToAutoEdit
**Type**: Function

### hasSuspiciousWindowsPathPattern
**Type**: Function

### checkPathSafetyForAutoEdit
**Type**: Function

### allWorkingDirectories
**Type**: Function

### pathInAllowedWorkingPath
**Type**: Function

### pathInWorkingPath
**Type**: Function

### rootPathForSource
**Type**: Function

### prependDirSep
**Type**: Function

### normalizePatternToPath
**Type**: Function

### normalizePatternsToPath
**Type**: Function

### getFileReadIgnorePatterns
**Type**: Function

### patternWithRoot
**Type**: Function

### getPatternsByRoot
**Type**: Function

### matchingRuleForInput
**Type**: Function

### checkReadPermissionForTool
**Type**: Function

### generateSuggestions
**Type**: Function

### checkEditableInternalPath
**Type**: Function

### checkReadableInternalPath
**Type**: Function

## Exports
- DANGEROUS_FILES
- DANGEROUS_DIRECTORIES
- normalizeCaseForComparison
- getClaudeSkillScope
- relativePath
- toPosixPath
- isClaudeSettingsPath
- getSessionMemoryDir
- getSessionMemoryPath
- isScratchpadEnabled
- getClaudeTempDirName
- getClaudeTempDir
- getBundledSkillsRoot
- getProjectTempDir
- getScratchpadDir
- ensureScratchpadDir
- checkPathSafetyForAutoEdit
- allWorkingDirectories
- getResolvedWorkingDirPaths
- pathInAllowedWorkingPath
- pathInWorkingPath
- normalizePatternsToPath
- getFileReadIgnorePatterns
- matchingRuleForInput
- checkReadPermissionForTool
- checkWritePermissionForTool
- generateSuggestions
- checkEditableInternalPath
- checkReadableInternalPath

## Source
`filesystem.ts`