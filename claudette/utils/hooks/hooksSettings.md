# hooksSettings

## Purpose
Core hook configuration utilities: assembling hooks from all sources, comparing hooks, generating display strings, and sorting matchers by source priority.

## Imports
- **Stdlib**: path
- **External**: src/entrypoints/agentSdkTypes (HookEvent)
- **Internal**: ../../bootstrap/state, ../../state/AppState, ../settings/constants, ../settings/settings, ../settings/types, ../shell/shellProvider, ./sessionHooks

## Logic
1. `IndividualHookConfig` represents a single hook with event, config (HookCommand), optional matcher, source, and optional pluginName.
2. `isHookEqual` compares two hooks by type, command/prompt/url content, `if` condition, and shell (for command hooks). Function hooks always return false (no stable identifier).
3. `getHookDisplayText` returns the human-readable text for a hook (command, prompt, url, or 'callback'/'function'), respecting custom statusMessage.
4. `getAllHooks` assembles hooks from userSettings, projectSettings, localSettings (deduplicating by resolved file path), and session hooks. Respects allowManagedHooksOnly policy by hiding all UI-visible hooks when set.
5. `getHooksForEvent` filters getAllHooks by event.
6. Three display string functions (`Description`, `Header`, `Inline`) map HookSource values to human-readable strings for UI display.
7. `sortMatchersByPriority` sorts matchers by their highest-priority source (SOURCES order), with plugin/builtin hooks at lowest priority (999), then alphabetically as tiebreaker.

## Exports
- `HookSource` - Type union: EditableSettingSource | 'policySettings' | 'pluginHook' | 'sessionHook' | 'builtinHook'.
- `IndividualHookConfig` - Interface: `{ event, config, matcher?, source, pluginName? }`.
- `isHookEqual(a, b)` - Compares two hooks for equality (command/prompt content, if condition, shell).
- `getHookDisplayText(hook)` - Returns human-readable display text for a hook.
- `getAllHooks(appState)` - Assembles all hooks from settings files and session hooks, respecting managed-only policy.
- `getHooksForEvent(appState, event)` - Filters hooks by event type.
- `hookSourceDescriptionDisplayString(source)` - Returns descriptive string (e.g., "User settings (~/.claude/settings.json)").
- `hookSourceHeaderDisplayString(source)` - Returns header string (e.g., "User Settings").
- `hookSourceInlineDisplayString(source)` - Returns inline string (e.g., "User").
- `sortMatchersByPriority(matchers, hooksByEventAndMatcher, selectedEvent)` - Sorts matchers by source priority then alphabetically.

## Source
`hooksSettings`