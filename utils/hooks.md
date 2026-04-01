# hooks

## Purpose
biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered

## Imports
- **Stdlib**: path, child_process, crypto, src/types/message.js, chalk
- **External**: @modelcontextprotocol/sdk/types.js
- **Internal**: ./file.js, ./ShellCommand.js, ./task/TaskOutput.js, ./cwd.js, ./bash/shellPrefix.js, ./subprocessEnv.js, ./platform.js, ./windowsPaths.js, ./shell/powershellDetection.js, ./shell/shellProvider.js...

## Items

### getSessionEndHookTimeoutMs
**Type**: Function

### executeInBackground
**Type**: Function

### shouldSkipHookDueToTrust
**Type**: Function

### createBaseHookInput
**Type**: Function

### validateHookJson
**Type**: Function

### parseHookOutput
**Type**: Function

### parseHttpHookOutput
**Type**: Function

### processHookJSONOutput
**Type**: Function

### execCommandHook
**Type**: Function

### matchesPattern
**Type**: Function

### prepareIfConditionMatcher
**Type**: Function

### isInternalHook
**Type**: Function

### hookDedupKey
**Type**: Function

### getPluginHookCounts
**Type**: Function

### getHookTypeCounts
**Type**: Function

### getHooksConfig
**Type**: Function

### hasHookForEvent
**Type**: Function

### getMatchingHooks
**Type**: Function

### getPreToolHookBlockingMessage
**Type**: Function

### getStopHookMessage
**Type**: Function

### getTeammateIdleHookMessage
**Type**: Function

### getTaskCreatedHookMessage
**Type**: Function

### getTaskCompletedHookMessage
**Type**: Function

### getUserPromptSubmitHookBlockingMessage
**Type**: Function

### getJsonInput
**Type**: Function

### hook
**Type**: Function

### hasBlockingResult
**Type**: Function

### executeHooksOutsideREPL
**Type**: Function

### executeNotificationHooks
**Type**: Function

### executeStopFailureHooks
**Type**: Function

### executePreCompactHooks
**Type**: Function

### executePostCompactHooks
**Type**: Function

### executeSessionEndHooks
**Type**: Function

### executeConfigChangeHooks
**Type**: Function

### executeEnvHooks
**Type**: Function

### executeCwdChangedHooks
**Type**: Function

### executeFileChangedHooks
**Type**: Function

### hasInstructionsLoadedHook
**Type**: Function

### executeInstructionsLoadedHooks
**Type**: Function

### parseElicitationHookOutput
**Type**: Function

### executeElicitationHooks
**Type**: Function

### executeElicitationResultHooks
**Type**: Function

### executeStatusLineCommand
**Type**: Function

### executeFileSuggestionCommand
**Type**: Function

### executeFunctionHook
**Type**: Function

### executeHookCallback
**Type**: Function

### hasWorktreeCreateHook
**Type**: Function

### executeWorktreeCreateHook
**Type**: Function

### executeWorktreeRemoveHook
**Type**: Function

### getHookDefinitionsForTelemetry
**Type**: Function

### HookBlockingError
**Type**: Interface

### HookResult
**Type**: Interface

### ElicitationResponse
**Type**: Type alias

### AggregatedHookResult
**Type**: Type alias

### IfConditionMatcher
**Type**: Type alias

### FunctionHookMatcher
**Type**: Type alias

### MatchedHook
**Type**: Type alias

### HookOutsideReplResult
**Type**: Type alias

### ConfigChangeSource
**Type**: Type alias

### InstructionsLoadReason
**Type**: Type alias

### InstructionsMemoryType
**Type**: Type alias

### ElicitationHookResult
**Type**: Type alias

### ElicitationResultHookResult
**Type**: Type alias

## Exports
- getSessionEndHookTimeoutMs
- shouldSkipHookDueToTrust
- createBaseHookInput
- HookBlockingError
- ElicitationResponse
- HookResult
- AggregatedHookResult
- getMatchingHooks
- getPreToolHookBlockingMessage
- getStopHookMessage
- getTeammateIdleHookMessage
- getTaskCreatedHookMessage
- getTaskCompletedHookMessage
- getUserPromptSubmitHookBlockingMessage
- HookOutsideReplResult
- hasBlockingResult
- executeNotificationHooks
- executeStopFailureHooks
- executePreCompactHooks
- executePostCompactHooks
- executeSessionEndHooks
- ConfigChangeSource
- executeConfigChangeHooks
- executeCwdChangedHooks
- executeFileChangedHooks
- InstructionsLoadReason
- InstructionsMemoryType
- hasInstructionsLoadedHook
- executeInstructionsLoadedHooks
- ElicitationHookResult
- ElicitationResultHookResult
- executeElicitationHooks
- executeElicitationResultHooks
- executeStatusLineCommand
- executeFileSuggestionCommand
- hasWorktreeCreateHook
- executeWorktreeCreateHook
- executeWorktreeRemoveHook

## Source
`hooks.ts`