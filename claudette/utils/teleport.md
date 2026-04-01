# teleport

## Purpose
Extract text from the response

## Imports
- **Stdlib**: axios, chalk, crypto, react,src/bootstrap/state,src/services/analytics/growthbook,src/services/analytics/index,src/services/policyLimits/index, zod/v4
- **Internal**: ../components/TeleportError, ./constants/oauth, ./entrypoints/agentSdkTypes, ./ink, ./keybindings/KeybindingProviderSetup, ./services/api/claude, ./services/api/sessionIngress, ../services/oauth/client, ../state/AppState, ../types/message...

## Items

### createTeleportResumeSystemMessage
**Type**: Function

### createTeleportResumeUserMessage
**Type**: Function

### generateTitleAndBranch
**Type**: Function

### validateGitState
**Type**: Function

### fetchFromOrigin
**Type**: Function

### ensureUpstreamIsSet
**Type**: Function

### checkoutBranch
**Type**: Function

### getCurrentBranch
**Type**: Function

### processMessagesForTeleportResume
**Type**: Function

### checkOutTeleportedSessionBranch
**Type**: Function

### validateSessionRepository
**Type**: Function

### teleportResumeCodeSession
**Type**: Function

### handleTeleportPrerequisites
**Type**: Function

### teleportToRemoteWithErrorHandling
**Type**: Function

### teleportFromSessionsAPI
**Type**: Function

### pollRemoteSessionEvents
**Type**: Function

### teleportToRemote
**Type**: Function

### archiveRemoteSession
**Type**: Function

### TeleportResult
**Type**: Type alias

### TeleportProgressStep
**Type**: Type alias

### TeleportProgressCallback
**Type**: Type alias

### TeleportToRemoteResponse
**Type**: Type alias

### TitleAndBranch
**Type**: Type alias

### RepoValidationResult
**Type**: Type alias

### PollRemoteSessionResponse
**Type**: Type alias

### EventsResponse
**Type**: Type alias

## Exports
- TeleportResult
- TeleportProgressStep
- TeleportProgressCallback
- validateGitState
- processMessagesForTeleportResume
- checkOutTeleportedSessionBranch
- RepoValidationResult
- validateSessionRepository
- teleportResumeCodeSession
- teleportToRemoteWithErrorHandling
- teleportFromSessionsAPI
- PollRemoteSessionResponse
- pollRemoteSessionEvents
- teleportToRemote
- archiveRemoteSession

## Source
`teleport.tsx`