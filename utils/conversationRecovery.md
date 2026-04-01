# conversationRecovery

## Purpose
Dead code elimination: ant-only tool names are conditionally required so

## Imports
- **Stdlib**: bun:bundle, crypto, path, src/utils/cwd.js
- **Internal**: ../bootstrap/state.js, ../types/ids.js, ../types/permissions.js, ./attachments.js, ./log.js, ./plans.js, ./sessionStart.js, ./toolResultStorage.js

## Items

### migrateLegacyAttachmentTypes
**Type**: Function

### deserializeMessages
**Type**: Function

### deserializeMessagesWithInterruptDetection
**Type**: Function

### detectTurnInterruption
**Type**: Function

### isTerminalToolResult
**Type**: Function

### restoreSkillStateFromMessages
**Type**: Function

### loadMessagesFromJsonlPath
**Type**: Function

### loadConversationForResume
**Type**: Function

### TeleportRemoteResponse
**Type**: Type alias

### TurnInterruptionState
**Type**: Type alias

### DeserializeResult
**Type**: Type alias

### InternalInterruptionState
**Type**: Type alias

## Exports
- TeleportRemoteResponse
- TurnInterruptionState
- DeserializeResult
- deserializeMessages
- deserializeMessagesWithInterruptDetection
- restoreSkillStateFromMessages
- loadMessagesFromJsonlPath
- loadConversationForResume

## Source
`conversationRecovery.ts`