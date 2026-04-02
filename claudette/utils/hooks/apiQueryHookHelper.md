# apiQueryHookHelper

## Purpose
Factory for creating API query hooks that make non-streaming LLM calls as part of the post-sampling hook pipeline. Provides a configurable template for building messages, parsing responses, and logging results.

## Imports
- **Stdlib**: `crypto` (randomUUID)
- **Internal**: `../../constants/querySource`, `../../services/api/claude`, `../../types/message`, `../../utils/abortController`, `../../utils/log`, `../errors`, `../messages`, `../systemPromptType`, `./postSamplingHooks`

## Logic
1. `createApiQueryHook` returns an async hook function that:
   - Checks `shouldRun` predicate; skips if false.
   - Builds the message list via `buildMessages(context)`.
   - Resolves system prompt (config override or context default).
   - Resolves tools (config `useTools` flag, defaults to true).
   - Gets model via lazy-loaded `getModel(context)`.
   - Calls `queryModelWithoutStreaming` with thinking disabled, passing tools, signal, and API options (model, agents, querySource, etc.).
   - Extracts text content from the response.
   - Parses the response via `parseResponse(content, context)`.
   - Logs success or error result via `logResult`.
2. All errors are caught and logged — the hook never throws.

## Exports
- `ApiQueryHookContext` — extends `REPLHookContext` with optional `queryMessageCount`.
- `ApiQueryHookConfig<TResult>` — configuration object with `name`, `shouldRun`, `buildMessages`, optional `systemPrompt`/`useTools`, `parseResponse`, `logResult`, and `getModel`.
- `ApiQueryResult<TResult>` — discriminated union: `{ type: 'success', result, messageId, model, uuid }` or `{ type: 'error', error, uuid }`.
- `createApiQueryHook<TResult>` — factory that takes `ApiQueryHookConfig<TResult>` and returns an async hook function `(context: ApiQueryHookContext) => Promise<void>`.
