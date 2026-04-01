# pluginOptionsStorage

## Purpose
NOTE: storage.read() spawns `security find-generic-password` on macOS

## Imports
- **Stdlib**: lodash-es/memoize.js
- **Internal**: ../../types/plugin.js, ../debug.js, ../log.js, ../secureStorage/index.js, ./pluginDirectories.js

## Items

### getPluginStorageId
**Type**: Function

### clearPluginOptionsCache
**Type**: Function

### savePluginOptions
**Type**: Function

### deletePluginOptions
**Type**: Function

### getUnconfiguredOptions
**Type**: Function

### substitutePluginVariables
**Type**: Function

### substituteUserConfigVariables
**Type**: Function

### substituteUserConfigInContent
**Type**: Function

### PluginOptionValues
**Type**: Type alias

### PluginOptionSchema
**Type**: Type alias

### PluginConfigs
**Type**: Type alias

## Exports
- PluginOptionValues
- PluginOptionSchema
- getPluginStorageId
- loadPluginOptions
- clearPluginOptionsCache
- savePluginOptions
- deletePluginOptions
- getUnconfiguredOptions
- substitutePluginVariables
- substituteUserConfigVariables
- substituteUserConfigInContent

## Source
`pluginOptionsStorage.ts`