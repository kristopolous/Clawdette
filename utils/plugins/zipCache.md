# zipCache

## Purpose
Session plugin cache: a temp directory on local disk (NOT in the mounted zip cache)

## Imports
- **Stdlib**: crypto, os, path
- **Internal**: ../debug.js, ../dxt/zip.js, ../envUtils.js, ../fsOperations.js, ../permissions/pathValidation.js, ./schemas.js

## Items

### isPluginZipCacheEnabled
**Type**: Function

### getPluginZipCachePath
**Type**: Function

### getZipCacheKnownMarketplacesPath
**Type**: Function

### getZipCacheInstalledPluginsPath
**Type**: Function

### getZipCacheMarketplacesDir
**Type**: Function

### getZipCachePluginsDir
**Type**: Function

### getSessionPluginCachePath
**Type**: Function

### cleanupSessionPluginCache
**Type**: Function

### resetSessionPluginCache
**Type**: Function

### atomicWriteToZipCache
**Type**: Function

### createZipFromDirectory
**Type**: Function

### collectFilesForZip
**Type**: Function

### extractZipToDirectory
**Type**: Function

### convertDirectoryToZipInPlace
**Type**: Function

### getMarketplaceJsonRelativePath
**Type**: Function

### isMarketplaceSourceSupportedByZipCache
**Type**: Function

### ZipEntry
**Type**: Type alias

## Exports
- isPluginZipCacheEnabled
- getPluginZipCachePath
- getZipCacheKnownMarketplacesPath
- getZipCacheInstalledPluginsPath
- getZipCacheMarketplacesDir
- getZipCachePluginsDir
- getSessionPluginCachePath
- cleanupSessionPluginCache
- resetSessionPluginCache
- atomicWriteToZipCache
- createZipFromDirectory
- extractZipToDirectory
- convertDirectoryToZipInPlace
- getMarketplaceJsonRelativePath
- isMarketplaceSourceSupportedByZipCache

## Source
`zipCache.ts`