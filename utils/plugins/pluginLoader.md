# pluginLoader

## Purpose
Sanitize version to prevent path traversal attacks

## Imports
- **Stdlib**: lodash-es/memoize.js, path
- **Internal**: ../../bootstrap/state.js, ../debug.js, ../envUtils.js, ../execFileNoThrow.js, ../file.js, ../fsOperations.js, ../git.js, ../lazySchema.js, ../log.js, ../settings/settings.js...

## Items

### getPluginCachePath
**Type**: Function

### getVersionedCachePathIn
**Type**: Function

### getVersionedCachePath
**Type**: Function

### getVersionedZipCachePath
**Type**: Function

### probeSeedCache
**Type**: Function

### probeSeedCacheAnyVersion
**Type**: Function

### getLegacyCachePath
**Type**: Function

### resolvePluginPath
**Type**: Function

### copyDir
**Type**: Function

### copyPluginToVersionedCache
**Type**: Function

### validateGitUrl
**Type**: Function

### installFromNpm
**Type**: Function

### gitClone
**Type**: Function

### installFromGit
**Type**: Function

### installFromGitHub
**Type**: Function

### resolveGitSubdirUrl
**Type**: Function

### installFromGitSubdir
**Type**: Function

### installFromLocal
**Type**: Function

### generateTemporaryCacheNameForPlugin
**Type**: Function

### cachePlugin
**Type**: Function

### loadPluginManifest
**Type**: Function

### if
**Type**: Function

### loadPluginHooks
**Type**: Function

### validatePluginPaths
**Type**: Function

### createPluginFromPath
**Type**: Function

### parsePluginSettings
**Type**: Function

### loadPluginSettings
**Type**: Function

### mergeHooksSettings
**Type**: Function

### loadPluginsFromMarketplaces
**Type**: Function

### loadPluginFromMarketplaceEntryCacheOnly
**Type**: Function

### loadPluginFromMarketplaceEntry
**Type**: Function

### finishLoadingPluginFromPath
**Type**: Function

### loadSessionOnlyPlugins
**Type**: Function

### mergePluginSources
**Type**: Function

### assemblePluginLoadResult
**Type**: Function

### clearPluginCache
**Type**: Function

### mergePluginSettings
**Type**: Function

### cachePluginSettings
**Type**: Function

### isRecord
**Type**: Function

## Exports
- getPluginCachePath
- getVersionedCachePathIn
- getVersionedCachePath
- getVersionedZipCachePath
- probeSeedCacheAnyVersion
- getLegacyCachePath
- resolvePluginPath
- copyDir
- copyPluginToVersionedCache
- installFromNpm
- gitClone
- installFromGitSubdir
- generateTemporaryCacheNameForPlugin
- cachePlugin
- loadPluginManifest
- createPluginFromPath
- mergePluginSources
- loadAllPlugins
- loadAllPluginsCacheOnly
- clearPluginCache
- cachePluginSettings

## Source
`pluginLoader.ts`