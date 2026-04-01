# sessionRestore

## Purpose
Restore file history state

## Imports
- **Stdlib**: bun:bundle, crypto, path
- **Internal**: ../constants/systemPromptSections, ../costtracker, ./state/AppState, ./tools/AgentTool/agentColorManager, ./tools/TodoWriteTool/constants, ./types/ids, ./types/message, ./asciicast, ./claudemd, ./concurrentSessions...

## Items

### extractTodosFromTranscript
**Type**: Function

### restoreSessionStateFromLog
**Type**: Function

### computeRestoredAttributionState
**Type**: Function

### computeStandaloneAgentContext
**Type**: Function

### restoreAgentFromSession
**Type**: Function

### refreshAgentDefinitionsForModeSwitch
**Type**: Function

### restoreWorktreeForResume
**Type**: Function

### exitRestoredWorktree
**Type**: Function

### processResumedConversation
**Type**: Function

### ResumeResult
**Type**: Type alias

### ProcessedResume
**Type**: Type alias

### CoordinatorModeApi
**Type**: Type alias

### ResumeLoadResult
**Type**: Type alias

## Exports
- restoreSessionStateFromLog
- computeRestoredAttributionState
- computeStandaloneAgentContext
- restoreAgentFromSession
- refreshAgentDefinitionsForModeSwitch
- ProcessedResume
- restoreWorktreeForResume
- exitRestoredWorktree
- processResumedConversation

## Source
`sessionRestore.ts`