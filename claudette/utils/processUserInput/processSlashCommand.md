# processSlashCommand

## Purpose
Poll interval and deadline for MCP settle before launching a background

## Imports
- **Stdlib**: bun:bundle, crypto,src/bootstrap/state,src/commands,src/constants/messages,src/Tool,src/types/message
- **External**: @anthropic-ai/sdk/resources
- **Internal**: ../../bootstrap/state, .././constants/xml, .././hooks/useCanUseTool, .././services/analytics/index, .././services/api/dumpPrompts, .././services/compact/compact, .././services/compact/microCompact, ../../tools/AgentTool/AgentTool, ../../tools/AgentTool/runAgent, ../../tools/AgentTool/UI...

## Items

### executeForkedSlashCommand
**Type**: Function

### looksLikeCommand
**Type**: Function

### processSlashCommand
**Type**: Function

### getMessagesForSlashCommand
**Type**: Function

### formatCommandInput
**Type**: Function

### formatSkillLoadingMetadata
**Type**: Function

### formatSlashCommandLoadingMetadata
**Type**: Function

### formatCommandLoadingMetadata
**Type**: Function

### processPromptSlashCommand
**Type**: Function

### getMessagesForPromptSlashCommand
**Type**: Function

### SlashCommandResult
**Type**: Type alias

## Exports
- looksLikeCommand
- processSlashCommand
- formatSkillLoadingMetadata
- processPromptSlashCommand

## Source
`processSlashCommand.tsx`