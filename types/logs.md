# logs

## Purpose
Provides types for serialized messages and log options for session history and resume functionality.

## Imports
- **Stdlib**: `crypto`
- **External**: (none)
- **Internal**: fileHistory, toolResultStorage, ids, message, messageQueueTypes

## Logic
1. `SerializedMessage` - Message with metadata (cwd, userType, entrypoint, sessionId, timestamp, version, gitBranch, slug)
2. `LogOption` - session log metadata (date, messages, fullPath, value, created, modified, firstPrompt, messageCount, fileSize)
3. Session tracking: isSidechain, isLite, sessionId, teamName, agentName, agentColor, agentSetting, isTeammate
4. Session identification: leafUuid, summary, customTitle, tag (searchable in /resume)
5. Snapshots: fileHistorySnapshots, attributionSnapshots, contextCollapseCommits, contextCollapseSnapshot
6. Session state: gitBranch, projectPath, prNumber, prUrl, prRepository, mode (coordinator/normal)
7. `worktreeSession` - worktree state at session end (null = exited, undefined = never entered)
8. `contentReplacements` - replacement decisions for resume reconstruction
9. `SummaryMessage` - summary type with leafUuid and summary text

## Exports
- `SerializedMessage` - message with metadata type
- `LogOption` - session log option type
- `SummaryMessage` - summary message type
- (Additional log-related types)
