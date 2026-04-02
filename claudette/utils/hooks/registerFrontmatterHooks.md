# registerFrontmatterHooks

## Purpose
Registers hooks from frontmatter (agent or skill definitions) as session-scoped hooks. For agents, converts Stop hooks to SubagentStop since subagents trigger SubagentStop, not Stop.

## Imports
- **External**: src/entrypoints/agentSdkTypes (HOOK_EVENTS, HookEvent), src/state/AppState
- **Internal**: ../debug, ../settings/types, ./sessionHooks

## Logic
1. Iterates over all HOOK_EVENTS and extracts matchers/hooks from the provided HooksSettings.
2. When `isAgent` is true, Stop events are retargeted to SubagentStop (with a debug log).
3. Each hook is registered via `addSessionHook` scoped to the provided sessionId (agent ID for agents, session ID for skills).
4. Hooks are cleaned up automatically when the session/agent ends.
5. Logs the total count of registered hooks if any were added.

## Exports
- `registerFrontmatterHooks(setAppState, sessionId, hooks, sourceName, isAgent?)` - Registers frontmatter hooks as session-scoped hooks. When isAgent is true, Stop hooks are converted to SubagentStop.

## Source
`registerFrontmatterHooks`