# markdownConfigLoader

## Purpose
Claude configuration directory names

## Imports
- **Stdlib**: bun:bundle, fs, fs/promises, lodash-es/memoize.js, os, path
- **Internal**: ../bootstrap/state.js, ./debug.js, ./envUtils.js, ./errors.js, ./file.js, ./frontmatterParser.js, ./frontmatterParser.js, ./git.js, ./permissions/permissionSetup.js, ./ripgrep.js...

## Items

### extractDescriptionFromMarkdown
**Type**: Function

### parseToolListString
**Type**: Function

### parseAgentToolsFromFrontmatter
**Type**: Function

### parseSlashCommandToolsFromFrontmatter
**Type**: Function

### getFileIdentity
**Type**: Function

### resolveStopBoundary
**Type**: Function

### getProjectDirsUpToHome
**Type**: Function

### findMarkdownFilesNative
**Type**: Function

### walk
**Type**: Function

### loadMarkdownFiles
**Type**: Function

### ClaudeConfigDirectory
**Type**: Type alias

### MarkdownFile
**Type**: Type alias

## Exports
- CLAUDE_CONFIG_DIRECTORIES
- ClaudeConfigDirectory
- MarkdownFile
- extractDescriptionFromMarkdown
- parseAgentToolsFromFrontmatter
- parseSlashCommandToolsFromFrontmatter
- getProjectDirsUpToHome
- loadMarkdownFilesForSubdir

## Source
`markdownConfigLoader.ts`