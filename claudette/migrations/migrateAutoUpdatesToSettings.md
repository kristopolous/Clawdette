## Purpose
Migrates user-set auto-updates preference from global config tosettingson as an environment variable.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `services/analytics` (logEvent), `utils/config` (getGlobalConfig, saveGlobalConfig), `utils/log` (logError), `utils/settings/settings` (getSettingsForSource, updateSettingsForSource)

## Logic
1. Returns early if `autoUpdates` is not explicitly set to false or if it was set for native protection
2. Reads existing userSettings and sets `DISABLE_AUTOUPDATER` environment variable to preserve user intent
3. Sets `process.env.DISABLE_AUTOUPDATER` immediately for the current session
4. Removes `autoUpdates` and `autoUpdatesProtectedForNative` fields from global config
5. Wraps operations in try/catch, logging errors without breaking startup

## Exports
- `migrateAutoUpdatesToSettings` - Moves auto-updates preference from global config tosettingson env var
