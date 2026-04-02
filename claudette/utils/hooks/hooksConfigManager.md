# hooksConfigManager

## Purpose
Provides metadata for all hook events (summaries, descriptions, matcher fields) and utilities to group, sort, and retrieve hooks by event and matcher.

## Imports
- **Stdlib**: lodash-es/memoize
- **External**: src/entrypoints/agentSdkTypes (HookEvent)
- **Internal**: ../../bootstrap/state, ../../state/AppState, ./hooksSettings

## Logic
1. `getHookEventMetadata` is memoized (cache key = sorted-joined toolNames) to avoid per-call cache misses from callers like HooksConfigMenu. Returns metadata for all 27+ hook events including PreToolUse, PostToolUse, Stop, SessionStart, CwdChanged, FileChanged, etc. Each entry has summary, description (with exit code behavior), and optional matcherMetadata (fieldToMatch + values).
2. `groupHooksByEventAndMatcher` assembles hooks from all sources: settings files (user/project/local), session hooks, registered plugin hooks, and built-in hooks (ANT-only). Groups them into a Record<HookEvent, Record<matcherKey, IndividualHookConfig[]>>.
3. `getSortedMatchersForEvent` returns matchers sorted by source priority (using SOURCES order) then alphabetically.
4. `getHooksForMatcher` retrieves hooks for a given event/matcher pair; uses empty string key for events without matchers.
5. `getMatcherMetadata` returns the matcherMetadata for a specific event (e.g., PreToolUse matches on tool_name).

## Exports
- `MatcherMetadata` - Type: `{ fieldToMatch: string, values: string[] }`.
- `HookEventMetadata` - Type: `{ summary: string, description: string, matcherMetadata?: MatcherMetadata }`.
- `getHookEventMetadata(toolNames)` - Memoized function returning metadata for all hook events.
- `groupHooksByEventAndMatcher(appState, toolNames)` - Groups all hooks by event and matcher from all sources (settings, session, plugins, builtins).
- `getSortedMatchersForEvent(hooksByEventAndMatcher, event)` - Returns matchers for an event sorted by source priority.
- `getHooksForMatcher(hooksByEventAndMatcher, event, matcher)` - Returns hooks for a specific event/matcher combination.
- `getMatcherMetadata(event, toolNames)` - Returns matcher metadata (field and values) for a hook event.

## Source
`hooksConfigManager`