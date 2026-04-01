# gitignore

## Purpose
First check if the pattern is already ignored by any gitignore file (including global)

## Imports
- **Stdlib**: fs/promises, os, path
- **Internal**: ../cwd.js, ../errors.js, ../execFileNoThrow, ../git, ../log

## Items

### isPathGitignored
**Type**: Function

### getGlobalGitignorePath
**Type**: Function

### addFileGlobRuleToGitignore
**Type**: Function

## Exports
- isPathGitignored
- getGlobalGitignorePath
- addFileGlobRuleToGitignore

## Source
`gitignore.ts`