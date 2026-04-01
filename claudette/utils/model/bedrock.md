# bedrock

## Purpose
Filter for Anthropic models (SYSTEM_DEFINED filtering handled in query)

## Imports
- **Stdlib**: lodash-es/memoize.js
- **Internal**: ../auth.js, ../envUtils.js, ../log.js, ../proxy.js

## Items

### findFirstMatch
**Type**: Function

### createBedrockClient
**Type**: Function

### createBedrockRuntimeClient
**Type**: Function

### isFoundationModel
**Type**: Function

### extractModelIdFromArn
**Type**: Function

### getBedrockRegionPrefix
**Type**: Function

### applyBedrockRegionPrefix
**Type**: Function

### BedrockRegionPrefix
**Type**: Type alias

## Exports
- getBedrockInferenceProfiles
- findFirstMatch
- createBedrockRuntimeClient
- getInferenceProfileBackingModel
- isFoundationModel
- extractModelIdFromArn
- BedrockRegionPrefix
- getBedrockRegionPrefix
- applyBedrockRegionPrefix

## Source
`bedrock.ts`