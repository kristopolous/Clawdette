# utils/plugins/pluginOptionsStorage

## Purpose
Provides plugin option storage and substitution utilities.

## Imports
- **Stdlib**: (none)
- **External**: `lodash-es/memoize`
- **Internal**: plugin types, debug, log, secureStorage, settings settings, plugins mcpbHandler/pluginDirectories

## Logic
1. Plugins declare user-configurable options in manifest.userConfig (McpbUserConfigurationOption schemas)
2. At enable time, user prompted for values
3. Storage splits by sensitive: true → secureStorage (keychain on macOS, credentialson elsewhere)
4. Everything else →settingson pluginConfigs[pluginId].options
5. `PluginOptionValues` - alias for UserConfigValues
6. `PluginOptionSchema` - alias for UserConfigSchema
7. `getPluginStorageId` - gets canonical storage key (plugin.source = "name@marketplace")
8. `loadPluginOptions` - memoized loader merging non-sensitive (settings) with sensitive (secureStorage)
9. SecureStorage wins on key collision
10. Memoized per-pluginId (hooks fire per-tool-call, would otherwise do settings read + keychain spawn each time)
11. Cache cleared via clearPluginOptionsCache when settings change or plugins reload
12. `clearPluginOptionsCache` - clears options cache
13. `savePluginOptions` - saves plugin options
14. `substitutePluginVariables` - substitutes plugin variables in content
15. `substituteUserConfigVariables` - substitutes user config variables
16. `substituteUserConfigInContent` - substitutes user config in content
17. `getPluginDataDir` - gets plugin data directory

## Exports
- `PluginOptionValues` - option values type
- `PluginOptionSchema` - option schema type
- `getPluginStorageId` - gets storage ID
- `loadPluginOptions` - loads plugin options
- `clearPluginOptionsCache` - clears options cache
- `savePluginOptions` - saves plugin options
- `substitutePluginVariables` - substitutes plugin variables
- `substituteUserConfigVariables` - substitutes user config variables
- `substituteUserConfigInContent` - substitutes in content
