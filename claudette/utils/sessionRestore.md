# sessionRestore

## Purpose
Restore file history state

## Imports
- **Stdlib**: bun:bundle, crypto, path
- **Internal**: ../constants/systemPromptSections.js, ../cost-tracker.js, ../state/AppState.js, ../tools/AgentTool/agentColorManager.js, ../tools/TodoWriteTool/constants.js, ../types/ids.js, ../types/message.js, ./asciicast.js, ./claudemd.js, ./concurrentSessions...

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