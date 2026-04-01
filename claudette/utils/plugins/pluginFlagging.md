# pluginFlagging

## Purpose
Module-level cache — populated by loadFlaggedPlugins(), updated by writes.

## Imports
- **Stdlib**: crypto, fs/promises, path
- **Internal**: ../debug.js, ../fsOperations.js, ../log, ../slowOperations, ./pluginDirectories

## Items

### getFlaggedPluginsPath
**Type**: Function

### parsePluginsData
**Type**: Function

### readFromDisk
**Type**: Function

### writeToDisk
**Type**: Function

### loadFlaggedPlugins
**Type**: Function

### getFlaggedPlugins
**Type**: Function

### addFlaggedPlugin
**Type**: Function

### markFlaggedPluginsSeen
**Type**: Function

### removeFlaggedPlugin
**Type**: Function

### FlaggedPlugin
**Type**: Type alias

## Exports
- FlaggedPlugin
- loadFlaggedPlugins
- getFlaggedPlugins
- addFlaggedPlugin
- markFlaggedPluginsSeen
- removeFlaggedPlugin

## Source
`pluginFlagging.ts`