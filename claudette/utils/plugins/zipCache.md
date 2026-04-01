# utils/plugins/zipCache

## Purpose
Manages plugins as ZIP archives in a mounted directory for headless mode.

## Imports
- **Stdlib**: `crypto`, `fs/promises`, `os`, `path`
- **External**: (none)
- **Internal**: debug, dxt zip, envUtils, fsOperations, permissions pathValidation, plugins schemas

## Logic
1. When CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE enabled and CLAUDE_CODE_PLUGIN_CACHE_DIR set:
   - Plugins stored as ZIPs in cache directory
   - Extracted to session-local temp directory at startup
2. Limitations: headless mode only, all settings sources used, only github/git/url sources, only strict:true entries, auto-update non-blocking
3. Directory structure: /mnt/pluginscache/known_marketplaceson,installed_pluginson, marketplaces/, plugins/
4. `isPluginZipCacheEnabled` - checks if zip cache mode enabled
5. `getPluginZipCachePath` - gets zip cache directory path
6. `getZipCacheKnownMarketplacesPath` - getsknown_marketplaceson path in zip cache
7. `getZipCacheInstalledPluginsPath` - getsinstalled_pluginson path in zip cache
8. `getZipCacheMarketplacesDir` - gets marketplaces directory in zip cache
9. `getZipCachePluginsDir` - gets plugins directory in zip cache
10. `getPluginZipPath` - gets plugin ZIP path in cache
11. `extractPluginZip` - extracts plugin ZIP to temp directory
12. `cachePluginZip` - caches plugin as ZIP
13. `shouldUseZipCache` - checks if should use zip cache for plugin
14. `parseZipModes` - parses ZIP modes
15. `unzipFile` - unzips file

## Exports
- `isPluginZipCacheEnabled` - checks zip cache enabled
- `getPluginZipCachePath` - gets zip cache path
- `getZipCacheKnownMarketplacesPath` - gets known marketplaces path
- `getZipCacheInstalledPluginsPath` - gets installed plugins path
- `getZipCacheMarketplacesDir` - gets marketplaces dir
- `getZipCachePluginsDir` - gets plugins dir
- `getPluginZipPath` - gets plugin ZIP path
- `extractPluginZip` - extracts plugin ZIP
- `cachePluginZip` - caches plugin ZIP
- `shouldUseZipCache` - checks if should use zip cache
- `parseZipModes` - parses ZIP modes
- `unzipFile` - unzips file
