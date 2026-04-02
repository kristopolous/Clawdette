# hooksConfigSnapshot

## Purpose
Maintains a snapshot of the hooks configuration at session start, respecting policy restrictions (managed-only, disable-all). The settings module is imported as a namespace object so that spyOn works in tests.

## Imports
- **Internal**: ../../bootstrap/state, ../settings/pluginOnlyPolicy, ../settings/settings (as namespace), ../settings/settingsCache, ../settings/types

## Logic
1. `getHooksFromAllowedSources` (internal) applies a hierarchy of policy checks: (a) if policySettings disables all hooks, return empty; (b) if policySettings allows managed hooks only, return only managed hooks; (c) if restrictedToPluginOnly('hooks'), return only policy hooks; (d) if non-managed settings disable all hooks, return only managed hooks; (e) otherwise return merged hooks from all sources.
2. Snapshot functions (`capture`, `update`, `get`) manage a module-level `initialHooksConfig` variable. `updateHooksConfigSnapshot` resets the settings cache first to ensure fresh disk reads.
3. `shouldAllowManagedHooksOnly` returns true when policySettings has allowManagedHooksOnly, or when non-managed settings disable all hooks (managed hooks still run).
4. `shouldDisableAllHooksIncludingManaged` returns true only when policySettings has disableAllHooks (non-managed disableAllHooks cannot disable managed hooks).
5. `resetHooksConfigSnapshot` clears the snapshot and resets SDK init state to prevent test pollution.

## Exports
- `shouldAllowManagedHooksOnly()` - Returns true if only managed/policy hooks should run.
- `shouldDisableAllHooksIncludingManaged()` - Returns true only if policy settings disables all hooks including managed ones.
- `captureHooksConfigSnapshot()` - Captures current hooks config respecting policy; called once at startup.
- `updateHooksConfigSnapshot()` - Re-captures hooks config after resetting settings cache; called when settings change.
- `getHooksConfigFromSnapshot()` - Returns the captured snapshot; auto-captures if not yet done.
- `resetHooksConfigSnapshot()` - Clears snapshot and resets SDK init state (for testing).

## Source
`hooksConfigSnapshot`