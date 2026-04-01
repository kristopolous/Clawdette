# config

## Purpose
Re-entrancy guard: prevents getConfig → logEvent → getGlobalConfig → getConfig

## Imports
- **Stdlib**: bun:bundle, crypto, fs, lodash-es/memoize.js, lodash-es/pickBy.js, path
- **Internal**: ../bootstrap/state.js, ../memdir/paths.js, ../services/analytics/index.js, ../services/mcp/types.js, ../utils/cwd.js, ./cleanupRegistry.js, ./debug.js, ./diagLogs.js, ./env.js, ./envUtils.js...

## Items

### createDefaultGlobalConfig
**Type**: Function

### isGlobalConfigKey
**Type**: Function

### resetTrustDialogAcceptedCacheForTesting
**Type**: Function

### checkHasTrustDialogAccepted
**Type**: Function

### computeTrustDialogAccepted
**Type**: Function

### isPathTrusted
**Type**: Function

### isProjectConfigKey
**Type**: Function

### wouldLoseAuthState
**Type**: Function

### saveGlobalConfig
**Type**: Function

### getGlobalConfigWriteCount
**Type**: Function

### reportConfigCacheStats
**Type**: Function

### migrateConfigFields
**Type**: Function

### removeProjectHistory
**Type**: Function

### startGlobalConfigFreshnessWatcher
**Type**: Function

### writeThroughGlobalConfigCache
**Type**: Function

### getGlobalConfig
**Type**: Function

### getRemoteControlAtStartup
**Type**: Function

### getCustomApiKeyStatus
**Type**: Function

### enableConfigs
**Type**: Function

### getConfigBackupDir
**Type**: Function

### findMostRecentBackup
**Type**: Function

### getCurrentProjectConfig
**Type**: Function

### saveCurrentProjectConfig
**Type**: Function

### isAutoUpdaterDisabled
**Type**: Function

### shouldSkipPluginAutoupdate
**Type**: Function

### formatAutoUpdaterDisabledReason
**Type**: Function

### getAutoUpdaterDisabledReason
**Type**: Function

### getOrCreateUserID
**Type**: Function

### recordFirstStartTime
**Type**: Function

### getMemoryPath
**Type**: Function

### getManagedClaudeRulesDir
**Type**: Function

### getUserClaudeRulesDir
**Type**: Function

### _setGlobalConfigCacheForTesting
**Type**: Function

### SerializedStructuredHistoryEntry
**Type**: Interface

### HistoryEntry
**Type**: Interface

### PastedContent
**Type**: Type alias

### ReleaseChannel
**Type**: Type alias

### ProjectConfig
**Type**: Type alias

### InstallMethod
**Type**: Type alias

### NotificationChannel
**Type**: Type alias

### AccountInfo
**Type**: Type alias

### EditorMode
**Type**: Type alias

### DiffTool
**Type**: Type alias

### OutputStyle
**Type**: Type alias

### GlobalConfig
**Type**: Type alias

### GlobalConfigKey
**Type**: Type alias

### ProjectConfigKey
**Type**: Type alias

### AutoUpdaterDisabledReason
**Type**: Type alias

## Exports
- PastedContent
- SerializedStructuredHistoryEntry
- HistoryEntry
- ReleaseChannel
- ProjectConfig
- InstallMethod
- NotificationChannel
- AccountInfo
- EditorMode
- DiffTool
- OutputStyle
- GlobalConfig
- DEFAULT_GLOBAL_CONFIG
- GLOBAL_CONFIG_KEYS
- GlobalConfigKey
- isGlobalConfigKey
- PROJECT_CONFIG_KEYS
- ProjectConfigKey
- resetTrustDialogAcceptedCacheForTesting
- checkHasTrustDialogAccepted
- isPathTrusted
- isProjectConfigKey
- saveGlobalConfig
- getGlobalConfigWriteCount
- CONFIG_WRITE_DISPLAY_THRESHOLD
- getGlobalConfig
- getRemoteControlAtStartup
- getCustomApiKeyStatus
- enableConfigs
- getProjectPathForConfig
- getCurrentProjectConfig
- saveCurrentProjectConfig
- isAutoUpdaterDisabled
- shouldSkipPluginAutoupdate
- AutoUpdaterDisabledReason
- formatAutoUpdaterDisabledReason
- getAutoUpdaterDisabledReason
- getOrCreateUserID
- recordFirstStartTime
- getMemoryPath
- getManagedClaudeRulesDir
- getUserClaudeRulesDir
- _getConfigForTesting
- _wouldLoseAuthStateForTesting
- _setGlobalConfigCacheForTesting

## Source
`config.ts`