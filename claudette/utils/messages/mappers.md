# mappers

## Purpose
Handle compact boundary messages

## Imports
- **Stdlib**: crypto,src/bootstrap/state,src/services/claudeAiLimits,src/tools/ExitPlanModeTool/constants,src/types/utils, strip-ansi
- **External**: @anthropic-ai/sdk/resources/beta/messages/messages.mjs
- **Internal**: ../messages, ../plans

## Items

### toInternalMessages
**Type**: Function

### toSDKCompactMetadata
**Type**: Function

### fromSDKCompactMetadata
**Type**: Function

### toSDKMessages
**Type**: Function

### localCommandOutputToSDKAssistantMessage
**Type**: Function

### toSDKRateLimitInfo
**Type**: Function

### normalizeAssistantMessageForSDK
**Type**: Function

### SDKCompactMetadata
**Type**: Type alias

## Exports
- toInternalMessages
- toSDKCompactMetadata
- fromSDKCompactMetadata
- toSDKMessages
- localCommandOutputToSDKAssistantMessage
- toSDKRateLimitInfo

## Source
`mappers.ts`