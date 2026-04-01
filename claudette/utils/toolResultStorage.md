# toolResultStorage

## Purpose
Subdirectory name for tool results within a session

## Imports
- **Stdlib**: fs/promises, path
- **External**: @anthropic-ai/sdk/resources/index.mjs
- **Internal**: ../bootstrap/state.js, ../services/analytics/growthbook.js, ../services/analytics/index.js, ../services/analytics/metadata.js, ../types/message.js, ./debug.js, ./errors.js, ./format.js, ./log.js, ./sessionStorage.js...

## Items

### getPersistenceThreshold
**Type**: Function

### getSessionDir
**Type**: Function

### getToolResultsDir
**Type**: Function

### getToolResultPath
**Type**: Function

### ensureToolResultsDir
**Type**: Function

### persistToolResult
**Type**: Function

### buildLargeToolResultMessage
**Type**: Function

### processPreMappedToolResultBlock
**Type**: Function

### isToolResultContentEmpty
**Type**: Function

### maybePersistLargeToolResult
**Type**: Function

### generatePreview
**Type**: Function

### isPersistError
**Type**: Function

### createContentReplacementState
**Type**: Function

### cloneContentReplacementState
**Type**: Function

### getPerMessageBudgetLimit
**Type**: Function

### provisionContentReplacementState
**Type**: Function

### isContentAlreadyCompacted
**Type**: Function

### hasImageBlock
**Type**: Function

### contentSize
**Type**: Function

### buildToolNameMap
**Type**: Function

### collectCandidatesFromMessage
**Type**: Function

### collectCandidatesByMessage
**Type**: Function

### partitionByPriorDecision
**Type**: Function

### selectFreshToReplace
**Type**: Function

### replaceToolResultContents
**Type**: Function

### buildReplacement
**Type**: Function

### enforceToolResultBudget
**Type**: Function

### applyToolResultBudget
**Type**: Function

### reconstructContentReplacementState
**Type**: Function

### reconstructForSubagentResume
**Type**: Function

### getFileSystemErrorMessage
**Type**: Function

### PersistedToolResult
**Type**: Type alias

### PersistToolResultError
**Type**: Type alias

### ContentReplacementState
**Type**: Type alias

### ContentReplacementRecord
**Type**: Type alias

### ToolResultReplacementRecord
**Type**: Type alias

### ToolResultCandidate
**Type**: Type alias

### CandidatePartition
**Type**: Type alias

## Exports
- TOOL_RESULTS_SUBDIR
- PERSISTED_OUTPUT_TAG
- PERSISTED_OUTPUT_CLOSING_TAG
- TOOL_RESULT_CLEARED_MESSAGE
- getPersistenceThreshold
- PersistedToolResult
- PersistToolResultError
- getToolResultsDir
- PREVIEW_SIZE_BYTES
- getToolResultPath
- ensureToolResultsDir
- persistToolResult
- buildLargeToolResultMessage
- processToolResultBlock
- processPreMappedToolResultBlock
- isToolResultContentEmpty
- generatePreview
- isPersistError
- ContentReplacementState
- createContentReplacementState
- cloneContentReplacementState
- getPerMessageBudgetLimit
- provisionContentReplacementState
- ContentReplacementRecord
- ToolResultReplacementRecord
- enforceToolResultBudget
- applyToolResultBudget
- reconstructContentReplacementState
- reconstructForSubagentResume

## Source
`toolResultStorage.ts`