# pluginBlocklist

## Purpose
Detects plugins that have been delisted (removed) from their marketplaces and auto-uninstalls them. Shared between interactive mode (useManagePlugins) and headless mode ([```main```](../../main.md) print path).

## Imports
- **Stdlib**: None
- **Internal**: `../../services/plugins/pluginOperations.js`, `../debug.js`, `../errors.js`, `./installedPluginsManager.js`, `./marketplaceManager.js`, `./pluginFlagging.js`, `./schemas.js`

## Logic
1. **Delisting detection**: `detectDelistedPlugins()` compares installed plugin names against marketplace plugin names. Any installed plugin not found in the marketplace is considered delisted.
2. **Auto-uninstall flow**: `detectAndUninstallDelistedPlugins()` iterates all known marketplaces. For marketplaces with `forceRemoveDeletedPlugins` enabled, finds delisted plugins, skips already-flagged ones, skips managed-only plugins (enterprise admin handles those), auto-uninstalls from user/project/local scopes, and adds to flagged list.
3. **Flagged tracking**: Newly delisted plugins are recorded via `addFlaggedPlugin()` so they appear in a "Flagged" section in /plugins until dismissed.
4. **Resilience**: Uses `loadKnownMarketplacesConfigSafe()` (safe variant) so a corrupted config doesn't throw. Marketplace failures are logged and skipped.

## Exports
- `detectDelistedPlugins` - function that compares installed plugins against a marketplace to find delisted ones; returns list of plugin IDs in "name@marketplace" format
- `detectAndUninstallDelistedPlugins` - async function that detects delisted plugins across all marketplaces, auto-uninstalls them, and records them as flagged; returns list of newly flagged plugin IDs

## Source
`pluginBlocklist`
