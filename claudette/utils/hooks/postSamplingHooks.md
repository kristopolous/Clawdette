# postSamplingHooks

## Purpose
Programmatic post-sampling hook system (not exposed in settings.json config). Hooks run after model sampling completes, receiving full conversation context.

## Imports
- **Internal**: ../../constants/querySource, ../../Tool, ../../types/message, ../errors, ../log, ../systemPromptType

## Logic
1. Maintains an internal array of `PostSamplingHook` functions.
2. `REPLHookContext` provides full context to hooks: messages array, systemPrompt, userContext, systemContext, toolUseContext, and optional querySource.
3. `executePostSamplingHooks` constructs the context object and sequentially awaits each hook. Errors are logged but do not interrupt execution of remaining hooks.
4. This is an internal API used programmatically, not through settings configuration.

## Exports
- `REPLHookContext` - Type: `{ messages, systemPrompt, userContext, systemContext, toolUseContext, querySource? }`.
- `PostSamplingHook` - Type: `(context: REPLHookContext) => Promise<void> | void`.
- `registerPostSamplingHook(hook)` - Adds a hook to the internal registry.
- `clearPostSamplingHooks()` - Clears all registered hooks (for testing).
- `executePostSamplingHooks(messages, systemPrompt, userContext, systemContext, toolUseContext, querySource?)` - Executes all registered hooks sequentially with the provided context.

## Source
`postSamplingHooks`