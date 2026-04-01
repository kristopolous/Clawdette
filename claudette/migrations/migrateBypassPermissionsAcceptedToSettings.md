## Purpose
Migrates `bypassPermissionsModeAccepted` from global config tosettingson as `skipDangerousModePermissionPrompt`.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `services/analytics` (logEvent), `utils/config` (getGlobalConfig, saveGlobalConfig), `utils/log` (logError), `utils/settings/settings` (hasSkipDangerousModePermissionPrompt, updateSettingsForSource)

## Logic
1. Returns early if `bypassPermissionsModeAccepted` is not set in global config
2. Checks if `skipDangerousModePermissionPrompt` is not already set in settings
3. Updates userSettings with the new `skipDangerousModePermissionPrompt` field
4. Removes `bypassPermissionsModeAccepted` from global config
5. Wraps operations in try/catch with error logging

## Exports
- `migrateBypassPermissionsAcceptedToSettings` - Moves bypass permissions acceptance from global config tosettingson
