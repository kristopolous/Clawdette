# hooks

## Purpose
Provides Zod schemas and types for hook system including sync/async hook responses and elicitation protocol.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: lazySchema, agentSdkTypes, message types, PermissionResult, PermissionRule, AppState, commitAttribution

## Logic
1. `isHookEvent` - validates string against HOOK_EVENTS array
2. `promptRequestSchema` - elicitation protocol with prompt id, message, options array
3. `PromptRequest`/`PromptResponse` - elicitation request/response types
4. `syncHookResponseSchema` - sync hook response with continue, suppressOutput, stopReason, decision, reason
5. Hook-specific responses: PreToolUse (permissionDecision, updatedInput, additionalContext), UserPromptSubmit, etc.
6. `hookJSONOutputSchema` - JSON output schema for hook callbacks
7. `AsyncHookJSONOutput`/`SyncHookJSONOutput` - discriminated output types
8. `HookCallbackMatcher` - matches hook events to callbacks with timeout
9. `HooksSettings` - settings structure for hook configuration

## Exports
- `isHookEvent` - hook event validator
- `promptRequestSchema`, `PromptRequest`, `PromptResponse` - elicitation types
- `syncHookResponseSchema` - sync hook response schema
- `hookJSONOutputSchema` - hook JSON output schema
- `HookCallbackMatcher` - callback matcher type
- `HooksSettings` - hook settings type
