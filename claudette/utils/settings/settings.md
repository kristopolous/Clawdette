# settings

## Purpose
dir doesn't exist

## Imports
- **Stdlib**: bun:bundle, lodash-es/mergeWith.js, path, zod/v4
- **Internal**: ../../services/remoteManagedSettings/syncCacheState.js, ../array.js, ../debug.js, ../diagLogs.js, ../envUtils.js, ../errors.js, ../file.js, ../fileRead.js, ../fsOperations.js, ../git/gitignore.js...

## Items

### getManagedSettingsFilePath
**Type**: Function

### loadManagedFileSettings
**Type**: Function

### getManagedFileSettingsPresence
**Type**: Function

### handleFileSystemError
**Type**: Function

### parseSettingsFile
**Type**: Function

### parseSettingsFileUncached
**Type**: Function

### getSettingsRootPathForSource
**Type**: Function

### getUserSettingsFilePath
**Type**: Function

### getSettingsFilePathForSource
**Type**: Function

### getRelativeSettingsFilePathForSource
**Type**: Function

### getSettingsForSource
**Type**: Function

### getSettingsForSourceUncached
**Type**: Function

### getPolicySettingsOrigin
**Type**: Function

### updateSettingsForSource
**Type**: Function

### settingsMergeCustomizer
**Type**: Function

### getManagedSettingsKeysForLogging
**Type**: Function

### loadSettingsFromDisk
**Type**: Function

### getInitialSettings
**Type**: Function

### getSettingsWithSources
**Type**: Function

### getSettingsWithErrors
**Type**: Function

### hasSkipDangerousModePermissionPrompt
**Type**: Function

### hasAutoModeOptIn
**Type**: Function

### getUseAutoModeDuringPlan
**Type**: Function

### getAutoModeConfig
**Type**: Function

### rawSettingsContainsKey
**Type**: Function

### SettingsWithSources
**Type**: Type alias

## Exports
- loadManagedFileSettings
- getManagedFileSettingsPresence
- parseSettingsFile
- getSettingsRootPathForSource
- getSettingsFilePathForSource
- getRelativeSettingsFilePathForSource
- getSettingsForSource
- getPolicySettingsOrigin
- updateSettingsForSource
- settingsMergeCustomizer
- getManagedSettingsKeysForLogging
- getInitialSettings
- getSettings_DEPRECATED
- SettingsWithSources
- getSettingsWithSources
- getSettingsWithErrors
- hasSkipDangerousModePermissionPrompt
- hasAutoModeOptIn
- getUseAutoModeDuringPlan
- getAutoModeConfig
- rawSettingsContainsKey

## Source
`settings.ts`