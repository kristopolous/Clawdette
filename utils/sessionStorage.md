# sessionStorage

## Purpose
Sync fs primitives for readFileTailSync — separate from fs/promises

## Imports
- **Stdlib**: bun:bundle, crypto, fs, fs, lodash-es/memoize.js, path
- **Internal**: ../commands.js, ../constants/xml.js, ../services/analytics/growthbook.js, ../services/api/sessionIngress.js, ../tools/REPLTool/constants.js, ../types/logs.js, ../types/messageQueueTypes.js, ./array.js, ./cleanupRegistry.js, ./concurrentSessions.js...

## Items

### isTranscriptMessage
**Type**: Function

### isChainParticipant
**Type**: Function

### isLegacyProgressEntry
**Type**: Function

### isEphemeralToolProgress
**Type**: Function

### getProjectsDir
**Type**: Function

### getTranscriptPath
**Type**: Function

### getTranscriptPathForSession
**Type**: Function

### setAgentTranscriptSubdir
**Type**: Function

### clearAgentTranscriptSubdir
**Type**: Function

### getAgentTranscriptPath
**Type**: Function

### getAgentMetadataPath
**Type**: Function

### writeAgentMetadata
**Type**: Function

### readAgentMetadata
**Type**: Function

### getRemoteAgentsDir
**Type**: Function

### getRemoteAgentMetadataPath
**Type**: Function

### writeRemoteAgentMetadata
**Type**: Function

### readRemoteAgentMetadata
**Type**: Function

### deleteRemoteAgentMetadata
**Type**: Function

### listRemoteAgentMetadata
**Type**: Function

### sessionIdExists
**Type**: Function

### getNodeEnv
**Type**: Function

### getUserType
**Type**: Function

### getEntrypoint
**Type**: Function

### isCustomTitleEnabled
**Type**: Function

### getProject
**Type**: Function

### resetProjectFlushStateForTesting
**Type**: Function

### resetProjectForTesting
**Type**: Function

### setSessionFileForTesting
**Type**: Function

### setInternalEventWriter
**Type**: Function

### setInternalEventReader
**Type**: Function

### setRemoteIngressUrlForTesting
**Type**: Function

### recordTranscript
**Type**: Function

### recordSidechainTranscript
**Type**: Function

### recordQueueOperation
**Type**: Function

### removeTranscriptMessage
**Type**: Function

### recordFileHistorySnapshot
**Type**: Function

### recordAttributionSnapshot
**Type**: Function

### recordContentReplacement
**Type**: Function

### resetSessionFilePointer
**Type**: Function

### adoptResumedSessionFile
**Type**: Function

### recordContextCollapseCommit
**Type**: Function

### recordContextCollapseSnapshot
**Type**: Function

### flushSessionStorage
**Type**: Function

### hydrateRemoteSession
**Type**: Function

### hydrateFromCCRv2InternalEvents
**Type**: Function

### extractFirstPrompt
**Type**: Function

### removeExtraFields
**Type**: Function

### applyPreservedSegmentRelinks
**Type**: Function

### applySnipRemovals
**Type**: Function

### buildConversationChain
**Type**: Function

### recoverOrphanedParallelToolResults
**Type**: Function

### checkResumeConsistency
**Type**: Function

### buildFileHistorySnapshotChain
**Type**: Function

### buildAttributionSnapshotChain
**Type**: Function

### loadTranscriptFromFile
**Type**: Function

### hasVisibleUserContent
**Type**: Function

### hasVisibleAssistantContent
**Type**: Function

### countVisibleMessages
**Type**: Function

### convertToLogOption
**Type**: Function

### trackSessionBranchingAnalytics
**Type**: Function

### fetchLogs
**Type**: Function

### appendEntryToFile
**Type**: Function

### readFileTailSync
**Type**: Function

### saveCustomTitle
**Type**: Function

### saveAiGeneratedTitle
**Type**: Function

### saveTaskSummary
**Type**: Function

### saveTag
**Type**: Function

### linkSessionToPR
**Type**: Function

### getCurrentSessionTag
**Type**: Function

### getCurrentSessionTitle
**Type**: Function

### getCurrentSessionAgentColor
**Type**: Function

### restoreSessionMetadata
**Type**: Function

### clearSessionMetadata
**Type**: Function

### reAppendSessionMetadata
**Type**: Function

### saveAgentName
**Type**: Function

### saveAgentColor
**Type**: Function

### saveAgentSetting
**Type**: Function

### cacheSessionTitle
**Type**: Function

### saveMode
**Type**: Function

### saveWorktreeState
**Type**: Function

### getSessionIdFromLog
**Type**: Function

### isLiteLog
**Type**: Function

### loadFullLog
**Type**: Function

### searchSessionsByCustomTitle
**Type**: Function

### resolveMetadataBuf
**Type**: Function

### scanPreBoundaryMetadata
**Type**: Function

### pickDepthOneUuidCandidate
**Type**: Function

### walkChainBeforeParse
**Type**: Function

### loadTranscriptFile
**Type**: Function

### loadSessionFile
**Type**: Function

### clearSessionMessagesCache
**Type**: Function

### doesMessageExistInSession
**Type**: Function

### getLastSessionLog
**Type**: Function

### loadMessageLogs
**Type**: Function

### loadAllProjectsMessageLogs
**Type**: Function

### loadAllProjectsMessageLogsFull
**Type**: Function

### loadAllProjectsMessageLogsProgressive
**Type**: Function

### loadSameRepoMessageLogs
**Type**: Function

### loadSameRepoMessageLogsProgressive
**Type**: Function

### getStatOnlyLogsForWorktrees
**Type**: Function

### getAgentTranscript
**Type**: Function

### extractAgentIdsFromMessages
**Type**: Function

### extractTeammateTranscriptsFromTasks
**Type**: Function

### loadSubagentTranscripts
**Type**: Function

### loadAllSubagentTranscriptsFromDisk
**Type**: Function

### isLoggableMessage
**Type**: Function

### collectReplIds
**Type**: Function

### transformMessagesForExternalTranscript
**Type**: Function

### cleanMessagesForLogging
**Type**: Function

### getLogByIndex
**Type**: Function

### findUnresolvedToolUse
**Type**: Function

### getSessionFilesWithMtime
**Type**: Function

### loadAllLogsFromSessionFile
**Type**: Function

### getLogsWithoutIndex
**Type**: Function

### readLiteMetadata
**Type**: Function

### extractFirstPromptFromChunk
**Type**: Function

### extractJsonStringFieldPrefix
**Type**: Function

### deduplicateLogsBySessionId
**Type**: Function

### getSessionFilesLite
**Type**: Function

### enrichLog
**Type**: Function

### enrichLogs
**Type**: Function

### Transcript
**Type**: Type alias

### LegacyProgressEntry
**Type**: Type alias

### AgentMetadata
**Type**: Type alias

### RemoteAgentMetadata
**Type**: Type alias

### InternalEventWriter
**Type**: Type alias

### InternalEventReader
**Type**: Type alias

### TeamInfo
**Type**: Type alias

### Seg
**Type**: Type alias

### WithSnipMeta
**Type**: Type alias

### ChainAssistant
**Type**: Type alias

### SessionLogResult
**Type**: Type alias

### LiteMetadata
**Type**: Type alias

## Exports
- isTranscriptMessage
- isChainParticipant
- isEphemeralToolProgress
- getProjectsDir
- getTranscriptPath
- getTranscriptPathForSession
- MAX_TRANSCRIPT_READ_BYTES
- setAgentTranscriptSubdir
- clearAgentTranscriptSubdir
- getAgentTranscriptPath
- AgentMetadata
- writeAgentMetadata
- readAgentMetadata
- RemoteAgentMetadata
- writeRemoteAgentMetadata
- readRemoteAgentMetadata
- deleteRemoteAgentMetadata
- listRemoteAgentMetadata
- sessionIdExists
- getNodeEnv
- getUserType
- isCustomTitleEnabled
- getProjectDir
- resetProjectFlushStateForTesting
- resetProjectForTesting
- setSessionFileForTesting
- setInternalEventWriter
- setInternalEventReader
- setRemoteIngressUrlForTesting
- TeamInfo
- recordTranscript
- recordSidechainTranscript
- recordQueueOperation
- removeTranscriptMessage
- recordFileHistorySnapshot
- recordAttributionSnapshot
- recordContentReplacement
- resetSessionFilePointer
- adoptResumedSessionFile
- recordContextCollapseCommit
- recordContextCollapseSnapshot
- flushSessionStorage
- hydrateRemoteSession
- hydrateFromCCRv2InternalEvents
- getFirstMeaningfulUserMessageTextContent
- removeExtraFields
- buildConversationChain
- checkResumeConsistency
- loadTranscriptFromFile
- fetchLogs
- saveCustomTitle
- saveAiGeneratedTitle
- saveTaskSummary
- saveTag
- linkSessionToPR
- getCurrentSessionTag
- getCurrentSessionTitle
- getCurrentSessionAgentColor
- restoreSessionMetadata
- clearSessionMetadata
- reAppendSessionMetadata
- saveAgentName
- saveAgentColor
- saveAgentSetting
- cacheSessionTitle
- saveMode
- saveWorktreeState
- getSessionIdFromLog
- isLiteLog
- loadFullLog
- searchSessionsByCustomTitle
- loadTranscriptFile
- clearSessionMessagesCache
- doesMessageExistInSession
- getLastSessionLog
- loadMessageLogs
- loadAllProjectsMessageLogs
- loadAllProjectsMessageLogsProgressive
- SessionLogResult
- loadSameRepoMessageLogs
- loadSameRepoMessageLogsProgressive
- getAgentTranscript
- extractAgentIdsFromMessages
- extractTeammateTranscriptsFromTasks
- loadSubagentTranscripts
- loadAllSubagentTranscriptsFromDisk
- isLoggableMessage
- cleanMessagesForLogging
- getLogByIndex
- findUnresolvedToolUse
- getSessionFilesWithMtime
- loadAllLogsFromSessionFile
- getSessionFilesLite
- enrichLogs

## Source
`sessionStorage.ts`