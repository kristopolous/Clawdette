# sandbox-adapter

## Purpose
============================================================================

## Imports
- **Stdlib**: fs, fs/promises, lodash-es, path, src/tools/BashTool/toolName.js, src/tools/FileEditTool/constants.js, src/tools/FileReadTool/prompt.js, src/tools/WebFetchTool/prompt.js
- **Internal**: ../debug.js, ../path.js, ../platform.js, ../settings/changeDetector.js, ../settings/constants.js, ../settings/managedPath.js, ../settings/types.js, ../errors.js, ../permissions/filesystem.js, ../permissions/PermissionRule.js...

## Items

### permissionRuleValueFromString
**Type**: Function

### permissionRuleExtractPrefix
**Type**: Function

### resolvePathPatternForSandbox
**Type**: Function

### resolveSandboxFilesystemPath
**Type**: Function

### shouldAllowManagedSandboxDomainsOnly
**Type**: Function

### shouldAllowManagedReadPathsOnly
**Type**: Function

### convertToSandboxRuntimeConfig
**Type**: Function

### scrubBareGitRepoFiles
**Type**: Function

### detectWorktreeMainRepoPath
**Type**: Function

### getSandboxEnabledSetting
**Type**: Function

### isAutoAllowBashIfSandboxedEnabled
**Type**: Function

### areUnsandboxedCommandsAllowed
**Type**: Function

### isSandboxRequired
**Type**: Function

### isPlatformInEnabledList
**Type**: Function

### isSandboxingEnabled
**Type**: Function

### getSandboxUnavailableReason
**Type**: Function

### getLinuxGlobPatternWarnings
**Type**: Function

### areSandboxSettingsLockedByPolicy
**Type**: Function

### setSandboxSettings
**Type**: Function

### getExcludedCommands
**Type**: Function

### wrapWithSandbox
**Type**: Function

### initialize
**Type**: Function

### refreshConfig
**Type**: Function

### reset
**Type**: Function

### addToExcludedCommands
**Type**: Function

### and
**Type**: Interface

### ISandboxManager
**Type**: Interface

## Exports
- resolvePathPatternForSandbox
- resolveSandboxFilesystemPath
- shouldAllowManagedSandboxDomainsOnly
- convertToSandboxRuntimeConfig
- addToExcludedCommands
- ISandboxManager
- SandboxManager

## Source
`sandbox-adapter.ts`