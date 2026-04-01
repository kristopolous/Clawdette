# yoloClassifier

## Purpose
Dead code elimination: conditional imports for auto mode classifier prompts.

## Imports
- **Stdlib**: bun:bundle, fs/promises, path, zod/v4
- **External**: @anthropic-ai/sdk, @anthropic-ai/sdk/resources/beta/messages.js
- **Internal**: ../../services/analytics/growthbook.js, ../../services/analytics/index.js, ../../services/analytics/metadata.js, ../../services/api/claude.js, ../../services/api/errors.js, ../../services/api/withRetry.js, ../../Tool.js, ../../types/message.js, ../debug.js, ../envUtils.js...

## Items

### txtRequire
**Type**: Function

### isUsingExternalPermissions
**Type**: Function

### getDefaultExternalAutoModeRules
**Type**: Function

### extractTaggedBullets
**Type**: Function

### buildDefaultExternalSystemPrompt
**Type**: Function

### getAutoModeDumpDir
**Type**: Function

### maybeDumpAutoMode
**Type**: Function

### getAutoModeClassifierErrorDumpPath
**Type**: Function

### getAutoModeClassifierTranscript
**Type**: Function

### dumpErrorPrompts
**Type**: Function

### buildTranscriptEntries
**Type**: Function

### buildToolLookup
**Type**: Function

### toCompactBlock
**Type**: Function

### toCompact
**Type**: Function

### buildTranscriptForClassifier
**Type**: Function

### buildClaudeMdMessage
**Type**: Function

### buildYoloSystemPrompt
**Type**: Function

### stripThinking
**Type**: Function

### parseXmlBlock
**Type**: Function

### parseXmlReason
**Type**: Function

### parseXmlThinking
**Type**: Function

### extractUsage
**Type**: Function

### extractRequestId
**Type**: Function

### combineUsage
**Type**: Function

### replaceOutputFormatWithXml
**Type**: Function

### getClassifierThinkingConfig
**Type**: Function

### classifyYoloActionXml
**Type**: Function

### classifyYoloAction
**Type**: Function

### getClassifierModel
**Type**: Function

### resolveTwoStageClassifier
**Type**: Function

### isTwoStageClassifierEnabled
**Type**: Function

### isJsonlTranscriptEnabled
**Type**: Function

### logAutoModeOutcome
**Type**: Function

### detectPromptTooLong
**Type**: Function

### getTwoStageMode
**Type**: Function

### formatActionForClassifier
**Type**: Function

### AutoModeRules
**Type**: Type alias

### TranscriptBlock
**Type**: Type alias

### TranscriptEntry
**Type**: Type alias

### ToolLookup
**Type**: Type alias

### TwoStageMode
**Type**: Type alias

### AutoModeConfig
**Type**: Type alias

### AutoModeOutcome
**Type**: Type alias

## Exports
- AutoModeRules
- getDefaultExternalAutoModeRules
- buildDefaultExternalSystemPrompt
- getAutoModeClassifierErrorDumpPath
- getAutoModeClassifierTranscript
- YOLO_CLASSIFIER_TOOL_NAME
- TranscriptEntry
- buildTranscriptEntries
- buildTranscriptForClassifier
- buildYoloSystemPrompt
- classifyYoloAction
- formatActionForClassifier

## Source
`yoloClassifier.ts`