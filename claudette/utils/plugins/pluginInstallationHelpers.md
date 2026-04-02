# pluginInstallationHelpers

## Purpose
Check if the resolved path starts with the base path

## Imports
- **Stdlib**: crypto, fs/promises, path
- **Internal**: ../cwd, ./errors, ./fsOperations, ./log, ./telemetry/pluginTelemetry, /cacheUtils, /managedPlugins, ./marketplaceManager, ./pluginPolicy, ./pluginVersioning

## Items

### getCurrentTimestamp
**Type**: Function

### validatePathWithinBase
**Type**: Function

### cacheAndRegisterPlugin
**Type**: Function

### registerPluginInstallation
**Type**: Function

### parsePluginId
**Type**: Function

### formatResolutionError
**Type**: Function

### installResolvedPlugin
**Type**: Function

### installPluginFromMarketplace
**Type**: Function

### PluginInstallationInfo
**Type**: Type alias

### InstallCoreResult
**Type**: Type alias

### InstallPluginResult
**Type**: Type alias

### InstallPluginParams
**Type**: Type alias

## Exports
- PluginInstallationInfo
- getCurrentTimestamp
- validatePathWithinBase
- cacheAndRegisterPlugin
- registerPluginInstallation
- parsePluginId
- InstallCoreResult
- formatResolutionError
- installResolvedPlugin
- InstallPluginResult
- InstallPluginParams
- installPluginFromMarketplace

## Source
`pluginInstallationHelpers`