# permissionSetup

## Purpose
Only check Bash rules

## Imports
- **Stdlib**: bun:bundle, path, path
- **Internal**: ../cwd.js, ../envUtils.js, ../settings/constants.js, ../settings/constants.js, ./permissions.js, ./permissionsLoader.js, ../../tools/AgentTool/constants.js, ../../tools/BashTool/toolName.js, ../../tools/PowerShellTool/toolName.js, ../../tools.js...

## Items

### isDangerousBashPermission
**Type**: Function

### isDangerousPowerShellPermission
**Type**: Function

### isDangerousTaskPermission
**Type**: Function

### formatPermissionSource
**Type**: Function

### isDangerousClassifierPermission
**Type**: Function

### findDangerousClassifierPermissions
**Type**: Function

### isOverlyBroadBashAllowRule
**Type**: Function

### isOverlyBroadPowerShellAllowRule
**Type**: Function

### findOverlyBroadBashPermissions
**Type**: Function

### findOverlyBroadPowerShellPermissions
**Type**: Function

### isPermissionUpdateDestination
**Type**: Function

### removeDangerousPermissions
**Type**: Function

### stripDangerousPermissionsForAutoMode
**Type**: Function

### restoreDangerousPermissions
**Type**: Function

### transitionPermissionMode
**Type**: Function

### parseBaseToolsFromCLI
**Type**: Function

### isSymlinkTo
**Type**: Function

### initialPermissionModeFromCLI
**Type**: Function

### parseToolListFromCLI
**Type**: Function

### initializeToolPermissionContext
**Type**: Function

### getAutoModeUnavailableNotification
**Type**: Function

### verifyAutoModeGateAccess
**Type**: Function

### shouldDisableBypassPermissions
**Type**: Function

### isAutoModeDisabledBySettings
**Type**: Function

### isAutoModeGateEnabled
**Type**: Function

### getAutoModeUnavailableReason
**Type**: Function

### parseAutoModeEnabledState
**Type**: Function

### getAutoModeEnabledState
**Type**: Function

### getAutoModeEnabledStateIfCached
**Type**: Function

### hasAutoModeOptInAnySource
**Type**: Function

### isBypassPermissionsModeDisabled
**Type**: Function

### createDisabledBypassPermissionsContext
**Type**: Function

### checkAndDisableBypassPermissions
**Type**: Function

### isDefaultPermissionModeAuto
**Type**: Function

### shouldPlanUseAutoMode
**Type**: Function

### prepareContextForPlanMode
**Type**: Function

### transitionPlanAutoMode
**Type**: Function

### DangerousPermissionInfo
**Type**: Type alias

### AutoModeGateCheckResult
**Type**: Type alias

### AutoModeUnavailableReason
**Type**: Type alias

### AutoModeEnabledState
**Type**: Type alias

## Exports
- isDangerousBashPermission
- isDangerousPowerShellPermission
- isDangerousTaskPermission
- DangerousPermissionInfo
- findDangerousClassifierPermissions
- isOverlyBroadBashAllowRule
- isOverlyBroadPowerShellAllowRule
- findOverlyBroadBashPermissions
- findOverlyBroadPowerShellPermissions
- removeDangerousPermissions
- stripDangerousPermissionsForAutoMode
- restoreDangerousPermissions
- transitionPermissionMode
- parseBaseToolsFromCLI
- initialPermissionModeFromCLI
- parseToolListFromCLI
- initializeToolPermissionContext
- AutoModeGateCheckResult
- AutoModeUnavailableReason
- getAutoModeUnavailableNotification
- verifyAutoModeGateAccess
- shouldDisableBypassPermissions
- isAutoModeGateEnabled
- getAutoModeUnavailableReason
- AutoModeEnabledState
- getAutoModeEnabledState
- getAutoModeEnabledStateIfCached
- hasAutoModeOptInAnySource
- isBypassPermissionsModeDisabled
- createDisabledBypassPermissionsContext
- checkAndDisableBypassPermissions
- isDefaultPermissionModeAuto
- shouldPlanUseAutoMode
- prepareContextForPlanMode
- transitionPlanAutoMode

## Source
`permissionSetup.ts`