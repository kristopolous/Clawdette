# utils/queryContext

## Purpose
Provides shared helpers for building API cache-key prefix for query() calls.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: commands, constants prompts, context, services mcp types, state AppStateStore, Tool, AgentTool loadAgentsDir, message types, abortController, fileStateCache, forkedAgent, model model, systemPromptType, thinking

## Logic
1. Lives in separate file to avoid import cycles (imports from context.ts, constants/prompts.ts)
2. Only entrypoint-layer files import from here (QueryEngine.ts, cli/print.ts)
3. `fetchSystemPromptParts` - fetches systemPrompt, userContext, systemContext
4. When customSystemPrompt set, default getSystemPrompt and getSystemContext skipped
5. Custom prompt replaces default entirely, systemContext would be appended to unused default
6. Callers assemble final systemPrompt from defaultSystemPrompt (or custom) + optional extras + appendSystemPrompt
7. QueryEngine injects coordinator userContext and memory-mechanics prompt
8. sideQuestion's fallback uses base result directly
9. `buildCacheSafeParams` - builds CacheSafeParams from raw inputs
10. Used by SDK side_question handler on resume before turn completes
11. No stopHooks snapshot yet, mirrors system prompt building
12. `getLastCacheSafeParams` - gets last cache-safe params
13. `setLastCacheSafeParams` - sets last cache-safe params
14. `clearLastCacheSafeParams` - clears last cache-safe params
15. `getMainLoopModel` - gets main loop model
16. `asSystemPrompt` - converts to system prompt
17. `shouldEnableThinkingByDefault`, `ThinkingConfig` - thinking functions/types
18. `createAbortController` - creates abort controller
19. `FileStateCache`, `CacheSafeParams` - cache types

## Exports
- `fetchSystemPromptParts` - fetches system prompt parts
- `buildCacheSafeParams` - builds cache-safe params
- `getLastCacheSafeParams` - gets last cache-safe params
- `setLastCacheSafeParams` - sets last cache-safe params
- `clearLastCacheSafeParams` - clears last cache-safe params
- (Query context functions)
