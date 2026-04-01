# components/ManagedSettingsSecurityDialog/utils

## Purpose
Provides utilities for extracting and formatting dangerous settings.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: utils/managedEnvConstants (DANGEROUS_SHELL_SETTINGS, SAFE_ENV_VARS), utils/settings/types (SettingsJson), utils/slowOperations (jsonStringify)

## Logic
1. `DangerousShellSetting` - type for dangerous shell settings
2. `DangerousSettings` - { shellSettings, envVars, hasHooks, hooks? }
3. `extractDangerousSettings` - extracts dangerous settings from settings object
4. Returns { shellSettings, envVars, hasHooks } for null/undefined settings
5. Extracts dangerous shell settings from DANGEROUS_SHELL_SETTINGS
6. Extracts dangerous env vars - any var NOT in SAFE_ENV_VARS is dangerous
7. Checks for hooks (undefined/null/object with keys)
8. `hasDangerousSettings` - checks if settings contain dangerous settings
9. Returns true if shellSettings, envVars, or hasHooks present
10. `hasDangerousSettingsChanged` - compares two settings objects for dangerous changes
11. `formatDangerousSettingsList` - formats dangerous settings as list of names only
12. `DANGEROUS_SHELL_SETTINGS` - dangerous shell settings array
13. `SAFE_ENV_VARS` - safe env vars Set
14. `jsonStringify` - JSON stringify for comparison

## Exports
- `DangerousShellSetting` - dangerous shell setting type
- `DangerousSettings` - dangerous settings type
- `extractDangerousSettings` - extracts dangerous settings
- `hasDangerousSettings` - checks dangerous settings
- `hasDangerousSettingsChanged` - compares dangerous settings for changes
- `formatDangerousSettingsList` - formats settings list
