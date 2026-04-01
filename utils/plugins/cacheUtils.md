# cacheUtils

## Purpose
Prune hooks from plugins no longer in the enabled set so uninstalled/

## Imports
- **Stdlib**: fs/promises, path
- **Internal**: ../../commands.js, ../../constants/outputStyles.js, ../../tools/AgentTool/loadAgentsDir.js, ../../tools/SkillTool/prompt.js, ../attachments.js, ../debug.js, ../errors.js, ../log.js, ./installedPluginsManager.js, ./loadPluginAgents.js...

## Items

### clearAllPluginCaches
**Type**: Function

### clearAllCaches
**Type**: Function

### markPluginVersionOrphaned
**Type**: Function

### cleanupOrphanedPluginVersionsInBackground
**Type**: Function

### getOrphanedAtPath
**Type**: Function

### removeOrphanedAtMarker
**Type**: Function

### getInstalledVersionPaths
**Type**: Function

### processOrphanedPluginVersion
**Type**: Function

### removeIfEmpty
**Type**: Function

### readSubdirs
**Type**: Function

## Exports
- clearAllPluginCaches
- clearAllCaches
- markPluginVersionOrphaned
- cleanupOrphanedPluginVersionsInBackground

## Source
`cacheUtils.ts`