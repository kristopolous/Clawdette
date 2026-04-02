# queryHelpers

## Purpose
Small cache size for ask operations which typically access few files

## Imports
- **Stdlib**: lodashes/last,src/entrypoints/agentSdkTypes
- **External**: @anthropic-ai/sdk/resources/index.mjs
- **Internal**: ../hooks/useCanUseTool, ./services/tools/toolOrchestration, ./Tool, ./tools/BashTool/toolName, ./tools/FileEditTool/constants, ./tools/FileReadTool/FileReadTool, ./tools/FileWriteTool/prompt, ../types/message, ../types/textInputTypes, ./debug...

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
`queryHelpers`