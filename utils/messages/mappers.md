# mappers

## Purpose
Handle compact boundary messages

## Imports
- **Stdlib**: crypto, src/bootstrap/state.js, src/services/claudeAiLimits.js, src/tools/ExitPlanModeTool/constants.js, src/types/utils.js, strip-ansi
- **External**: @anthropic-ai/sdk/resources/beta/messages/messages.mjs
- **Internal**: ../messages.js, ../plans.js

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