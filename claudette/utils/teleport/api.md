# api

## Purpose
Retry configuration for teleport API requests

## Imports
- **Stdlib**: axios, crypto, src/constants/oauth.js, src/services/oauth/client.js, zod/v4
- **Internal**: ../auth.js, ../debug.js, ../detectRepository.js, ../errors.js, ../lazySchema.js, ../log.js, ../sleep.js, ../slowOperations

## Items

### isTransientNetworkError
**Type**: Function

### prepareApiRequest
**Type**: Function

### fetchCodeSessionsFromSessionsAPI
**Type**: Function

### getOAuthHeaders
**Type**: Function

### fetchSession
**Type**: Function

### getBranchFromSession
**Type**: Function

### sendEventToRemoteSession
**Type**: Function

### updateSessionTitle
**Type**: Function

### SessionStatus
**Type**: Type alias

### GitSource
**Type**: Type alias

### KnowledgeBaseSource
**Type**: Type alias

### SessionContextSource
**Type**: Type alias

### OutcomeGitInfo
**Type**: Type alias

### GitRepositoryOutcome
**Type**: Type alias

### Outcome
**Type**: Type alias

### SessionContext
**Type**: Type alias

### SessionResource
**Type**: Type alias

### ListSessionsResponse
**Type**: Type alias

### CodeSession
**Type**: Type alias

### RemoteMessageContent
**Type**: Type alias

## Exports
- CCR_BYOC_BETA
- isTransientNetworkError
- axiosGetWithRetry
- SessionStatus
- GitSource
- KnowledgeBaseSource
- SessionContextSource
- OutcomeGitInfo
- GitRepositoryOutcome
- Outcome
- SessionContext
- SessionResource
- ListSessionsResponse
- CodeSessionSchema
- CodeSession
- prepareApiRequest
- fetchCodeSessionsFromSessionsAPI
- getOAuthHeaders
- fetchSession
- getBranchFromSession
- RemoteMessageContent
- sendEventToRemoteSession
- updateSessionTitle

## Source
`api.ts`