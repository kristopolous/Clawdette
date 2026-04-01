# queryHelpers

## Purpose
Small cache size for ask operations which typically access few files

## Imports
- **Stdlib**: lodash-es/last.js, src/entrypoints/agentSdkTypes.js
- **External**: @anthropic-ai/sdk/resources/index.mjs
- **Internal**: ../hooks/useCanUseTool.js, ../services/tools/toolOrchestration.js, ../Tool.js, ../tools/BashTool/toolName.js, ../tools/FileEditTool/constants.js, ../tools/FileReadTool/FileReadTool.js, ../tools/FileWriteTool/prompt.js, ../types/message, ../types/textInputTypes, ./debug...

## Items

### isResultSuccessful
**Type**: Function

### extractReadFilesFromMessages
**Type**: Function

### extractBashToolsFromMessages
**Type**: Function

### extractCliName
**Type**: Function

### PermissionPromptTool
**Type**: Type alias

## Exports
- PermissionPromptTool
- isResultSuccessful
- extractReadFilesFromMessages
- extractBashToolsFromMessages

## Source
`queryHelpers.ts`