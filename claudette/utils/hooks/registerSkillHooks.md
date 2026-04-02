# registerSkillHooks

## Purpose
Registers hooks from a skill's frontmatter as session-scoped hooks. Supports `once: true` hooks that auto-remove after their first successful execution.

## Imports
- **External**: src/entrypoints/agentSdkTypes (HOOK_EVENTS), src/state/AppState
- **Internal**: ../debug, ../settings/types, ./sessionHooks

## Logic
1. Iterates over all HOOK_EVENTS and extracts matchers/hooks from the skill's HooksSettings.
2. For hooks with `once: true`, an `onHookSuccess` callback is created that calls `removeSessionHook` after the hook's first successful execution.
3. Each hook is registered via `addSessionHook` with the optional `skillRoot` parameter (sets CLAUDE_PLUGIN_ROOT env var for command hooks).
4. Hooks persist for the duration of the session (unless `once: true`).
5. Logs the total count of registered hooks if any were added.

## Exports
- `registerSkillHooks(setAppState, sessionId, hooks, skillName, skillRoot?)` - Registers skill frontmatter hooks as session-scoped hooks. Hooks with `once: true` auto-remove after first success. skillRoot sets CLAUDE_PLUGIN_ROOT for command hooks.

## Source
`registerSkillHooks`