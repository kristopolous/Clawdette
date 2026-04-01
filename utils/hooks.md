# utils/hooks

## Purpose
Provides user-defined hook execution at various lifecycle points.

## Imports
- **Stdlib**: `path`, `child_process`, `crypto`
- **External**: (none)
- **Internal**: file, ShellCommand, task TaskOutput, cwd, bash shellPrefix, sessionEnvironment, subprocessEnv, platform, windowsPaths, shell powershellDetection/shellProvider/powershellProvider, plugins pluginOptionsStorage/pluginDirectories, bootstrap state, config, hooks hooksConfigSnapshot, sessionStorage, settings, analytics, telemetry events/sessionTracing, types hooks

## Logic
1. Hooks are user-defined shell commands at lifecycle points
2. `HookEvent` - enum of hook events (PreToolUse, PostToolUse, etc.)
3. `HookInput` - input type for hooks
4. `HookJSONOutput` - JSON output type for hooks
5. `HookCallback` - callback type for hooks
6. `HookCallbackMatcher` - matcher for hook callbacks
7. `PromptRequest`/`PromptResponse` - prompt elicitation types
8. `isAsyncHookJSONOutput`/`isSyncHookJSONOutput` - type guards
9. `PermissionRequestResult` - permission request result type
10. `executeHooks` - executes hooks at specified event
11. `executePreToolHooks` - executes pre-tool hooks
12. `executePostToolHooks` - executes post-tool hooks
13. `executePostToolUseFailureHooks` - executes failure hooks
14. `executePermissionDeniedHooks` - executes permission denied hooks
15. `executeInstructionsLoadedHooks` - executes instructions loaded hooks
16. `hasInstructionsLoadedHook` - checks if instructions loaded hook exists
17. `getHookEnvFilePath` - gets hook environment file path
18. `invalidateSessionEnvCache` - invalidates session env cache
19. Supports plugin options with variable substitution
20. OTel tracing for hook execution
21. Session tracing with startHookSpan/endHookSpan

## Exports
- `HookEvent` - hook event enum
- `HookInput` - hook input type
- `HookJSONOutput` - hook output type
- `HookCallback` - hook callback type
- `HookCallbackMatcher` - hook matcher type
- `executeHooks` - executes hooks
- `executePreToolHooks` - executes pre-tool hooks
- `executePostToolHooks` - executes post-tool hooks
- `executePostToolUseFailureHooks` - executes failure hooks
- `executePermissionDeniedHooks` - executes permission denied hooks
- `executeInstructionsLoadedHooks` - executes instructions loaded hooks
- `hasInstructionsLoadedHook` - checks instructions loaded hook
- `getHookEnvFilePath` - gets hook env file path
- `invalidateSessionEnvCache` - invalidates session env cache
