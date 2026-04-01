# marketplaceManager

## Purpose
Only the official marketplace can be implicitly declared — it's the one

## Imports
- **Stdlib**: axios, fs/promises, lodash-es/isEqual.js, lodash-es/memoize.js, path
- **Internal**: ../../services/analytics/growthbook.js, ../debug.js, ../envUtils.js, ../execFileNoThrow.js, ../fsOperations.js, ../git.js, ../log.js, ../settings/types.js, ./cacheUtils.js, ./fetchTelemetry.js...

## Items

### getKnownMarketplacesFile
**Type**: Function

### getMarketplacesCacheDir
**Type**: Function

### clearMarketplacesCache
**Type**: Function

### getDeclaredMarketplaces
**Type**: Function

### getMarketplaceDeclaringSource
**Type**: Function

### saveMarketplaceToSettings
**Type**: Function

### loadKnownMarketplacesConfig
**Type**: Function

### loadKnownMarketplacesConfigSafe
**Type**: Function

### saveKnownMarketplacesConfig
**Type**: Function

### registerSeedMarketplaces
**Type**: Function

### readSeedKnownMarketplaces
**Type**: Function

### findSeedMarketplaceLocation
**Type**: Function

### seedDirFor
**Type**: Function

### getPluginGitTimeoutMs
**Type**: Function

### gitPull
**Type**: Function

### gitSubmoduleUpdate
**Type**: Function

### enhanceGitPullErrorMessages
**Type**: Function

### isGitHubSshLikelyConfigured
**Type**: Function

### isAuthenticationError
**Type**: Function

### extractSshHost
**Type**: Function

### gitClone
**Type**: Function

### safeCallProgress
**Type**: Function

### reconcileSparseCheckout
**Type**: Function

### cacheMarketplaceFromGit
**Type**: Function

### redactHeaders
**Type**: Function

### redactUrlCredentials
**Type**: Function

### cacheMarketplaceFromUrl
**Type**: Function

### getCachePathForSource
**Type**: Function

### loadAndCacheMarketplace
**Type**: Function

### addMarketplaceSource
**Type**: Function

### removeMarketplaceSource
**Type**: Function

### readCachedMarketplace
**Type**: Function

### getMarketplaceCacheOnly
**Type**: Function

### getPluginByIdCacheOnly
**Type**: Function

### getPluginById
**Type**: Function

### refreshAllMarketplaces
**Type**: Function

### refreshMarketplace
**Type**: Function

### setMarketplaceAutoUpdate
**Type**: Function

### LoadedPluginMarketplace
**Type**: Type alias

### KnownMarketplacesConfig
**Type**: Type alias

### DeclaredMarketplace
**Type**: Type alias

### MarketplaceProgressCallback
**Type**: Type alias

## Exports
- getMarketplacesCacheDir
- clearMarketplacesCache
- KnownMarketplacesConfig
- DeclaredMarketplace
- getDeclaredMarketplaces
- getMarketplaceDeclaringSource
- saveMarketplaceToSettings
- loadKnownMarketplacesConfig
- loadKnownMarketplacesConfigSafe
- saveKnownMarketplacesConfig
- registerSeedMarketplaces
- gitPull
- gitClone
- MarketplaceProgressCallback
- reconcileSparseCheckout
- addMarketplaceSource
- removeMarketplaceSource
- getMarketplaceCacheOnly
- getMarketplace
- getPluginByIdCacheOnly
- getPluginById
- refreshAllMarketplaces
- refreshMarketplace
- setMarketplaceAutoUpdate
- _test

## Source
`marketplaceManager.ts`