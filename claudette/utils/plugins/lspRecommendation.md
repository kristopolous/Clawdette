# lspRecommendation

## Purpose
Scans installed marketplaces for LSP plugins and recommends plugins based on file extensions, but only when the LSP binary is already installed on the system.

## Imports
- **Stdlib**: `path`
- **Internal**: `../binaryCheck`, `../config`, `../debug`, `./installedPluginsManager`, `./marketplaceManager`, `./schemas`

## Logic
1. **getMatchingLspPlugins** — Main entry point. For a given file path: extracts extension, loads all LSP plugins from installed marketplaces, filters to those matching the extension, not already installed, not in the user's "never suggest" list, and whose LSP binary is installed on the system. Sorts official marketplace plugins first.
2. **extractLspInfoFromManifest** — Extracts extensions and command from inline `lspServers` config. Skips string paths (external `.lsp.json` files) since they're only readable after installation.
3. **getLspPluginsFromMarketplaces** — Iterates all installed marketplaces, extracts LSP info from each plugin's manifest.
4. **User controls** — `addToNeverSuggest` adds a plugin to the permanent blocklist. `incrementIgnoredCount`/`resetIgnoredCount` manage the ignore counter. After 5 ignores, recommendations are auto-disabled.
5. **isLspRecommendationsDisabled** — Returns `true` if explicitly disabled or ignore count >= 5.

## Exports
- `LspPluginRecommendation` - Type with `pluginId`, `pluginName`, `marketplaceName`, `description?`, `isOfficial`, `extensions`, `command`
- `getMatchingLspPlugins` - Find LSP plugin recommendations for a file path
- `addToNeverSuggest` - Add a plugin to the permanent "never suggest" list
- `incrementIgnoredCount` - Increment the ignore counter (auto-disables after 5)
- `isLspRecommendationsDisabled` - Check if recommendations are disabled
- `resetIgnoredCount` - Reset the ignore counter to 0
