# headlessPluginInstall

## Purpose
Installs plugins for headless/CCR (non-interactive) mode without AppState updates.

## Imports
- **Internal**: `../../services/analytics/index`, `../cleanupRegistry`, `../debug`, `../diagLogs`, `../fsOperations`, `../log`, `./marketplaceManager`, `./pluginBlocklist`, `./pluginLoader`, `./reconciler`, `./zipCache`, `./zipCacheAdapters`

## Logic
Headless equivalent of `performBackgroundPluginInstallations()`. Steps:
1. Register seed marketplaces from `CLAUDE_CODE_PLUGIN_SEED_DIR`. If changed, clear marketplace and plugin caches.
2. If zip cache mode (`CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE`) is enabled, ensure cache directory structure exists.
3. Reconcile declared marketplaces with materialized state. In zip cache mode, skips unsupported source types.
4. Clear caches if marketplaces were installed or updated.
5. Sync marketplace JSONs to zip cache for offline access on ephemeral containers.
6. Detect and uninstall delisted plugins via blocklist.
7. Register session cleanup for extracted plugin temp dirs (zip cache mode).
8. Returns `true` if any plugins changed (caller should refresh MCP). Logs `tengu_headless_plugin_install` analytics event.

## Exports
- `installPluginsForHeadless` - Install plugins in headless mode, returns `true` if plugins changed
