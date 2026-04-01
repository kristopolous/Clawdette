# betaSessionTracing

## Purpose
Message type for API calls (UserMessage or AssistantMessage)

## Imports
- **Stdlib**: crypto
- **External**: @opentelemetry/api
- **Internal**: ../../bootstrap/state, .././services/analytics/growthbook, .././services/analytics/metadata, .././types/message, ../envUtils, ../slowOperations, ./events

## Items

### clearBetaTracingState
**Type**: Function

### isBetaTracingEnabled
**Type**: Function

### truncateContent
**Type**: Function

### shortHash
**Type**: Function

### hashSystemPrompt
**Type**: Function

### hashMessage
**Type**: Function

### extractSystemReminderContent
**Type**: Function

### formatMessagesForContext
**Type**: Function

### addBetaInteractionAttributes
**Type**: Function

### addBetaLLMRequestAttributes
**Type**: Function

### addBetaLLMResponseAttributes
**Type**: Function

### addBetaToolInputAttributes
**Type**: Function

### addBetaToolResultAttributes
**Type**: Function

### FormattedMessages
**Type**: Interface

### LLMRequestNewContext
**Type**: Interface

### APIMessage
**Type**: Type alias

## Exports
- clearBetaTracingState
- isBetaTracingEnabled
- truncateContent
- LLMRequestNewContext
- addBetaInteractionAttributes
- addBetaLLMRequestAttributes
- addBetaLLMResponseAttributes
- addBetaToolInputAttributes
- addBetaToolResultAttributes

## Source
`betaSessionTracing.ts`