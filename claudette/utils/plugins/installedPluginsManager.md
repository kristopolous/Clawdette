# installedPluginsManager

## Purpose
Type alias for V2 plugins map

## Imports
- **Stdlib**: path
- **Internal**: ../debug.js, ../errors.js, ../fsOperations.js, ../log.js, ./pluginDirectories.js, ../../bootstrap/state.js, ../cwd.js, ../git/gitFilesystem.js, ../settings/constants.js, ./marketplaceManager.js...

## Items

### getInstalledPluginsFilePath
**Type**: Function

### getInstalledPluginsV2FilePath
**Type**: Function

### clearInstalledPluginsCache
**Type**: Function

### migrateToSinglePluginFile
**Type**: Function

### cleanupLegacyCache
**Type**: Function

### resetMigrationState
**Type**: Function

### readInstalledPluginsFileRaw
**Type**: Function

### migrateV1ToV2
**Type**: Function

### loadInstalledPluginsV2
**Type**: Function

### saveInstalledPluginsV2
**Type**: Function

### addPluginInstallation
**Type**: Function

### removePluginInstallation
**Type**: Function

### getInMemoryInstalledPlugins
**Type**: Function

### loadInstalledPluginsFromDisk
**Type**: Function

### updateInstallationPathOnDisk
**Type**: Function

### hasPendingUpdates
**Type**: Function

### getPendingUpdateCount
**Type**: Function

### getPendingUpdatesDetails
**Type**: Function

### resetInMemoryState
**Type**: Function

### initializeVersionedPlugins
**Type**: Function

### removeAllPluginsForMarketplace
**Type**: Function

### isInstallationRelevantToCurrentProject
**Type**: Function

### isPluginInstalled
**Type**: Function

### isPluginGloballyInstalled
**Type**: Function

### addInstalledPlugin
**Type**: Function

### removeInstalledPlugin
**Type**: Function

### deletePluginCache
**Type**: Function

### getGitCommitSha
**Type**: Function

### getPluginVersionFromManifest
**Type**: Function

### migrateFromEnabledPlugins
**Type**: Function

### InstalledPluginsMapV2
**Type**: Type alias

### PersistableScope
**Type**: Type alias

## Exports
- PersistableScope
- getInstalledPluginsFilePath
- getInstalledPluginsV2FilePath
- clearInstalledPluginsCache
- migrateToSinglePluginFile
- resetMigrationState
- loadInstalledPluginsV2
- addPluginInstallation
- removePluginInstallation
- getInMemoryInstalledPlugins
- loadInstalledPluginsFromDisk
- updateInstallationPathOnDisk
- hasPendingUpdates
- getPendingUpdateCount
- getPendingUpdatesDetails
- resetInMemoryState
- initializeVersionedPlugins
- removeAllPluginsForMarketplace
- isInstallationRelevantToCurrentProject
- isPluginInstalled
- isPluginGloballyInstalled
- addInstalledPlugin
- removeInstalledPlugin
- deletePluginCache
- migrateFromEnabledPlugins

## Source
`installedPluginsManager.ts`