## Purpose
Migrates users with `opus` pinned in settings to `opus[1m]` when eligible for the merged Opus 1M experience.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `services/analytics` (logEvent), `utils/model/model` (getDefaultMainLoopModelSetting, isOpus1mMergeEnabled, parseUserSpecifiedModel), `utils/settings/settings` (getSettingsForSource, updateSettingsForSource)

## Logic
1. Returns early if Opus 1M merge is not enabled
2. Checks if userSettings model is exactly `opus`
3. Compares parsed `opus[1m]` against the default main loop model to determine if the value should be set or left undefined
4. Updates userSettings with the migrated model or undefined (if it matches the default)
5. Logs analytics event for the migration

## Exports
- `migrateOpusToOpus1m` - Migrates `opus` to `opus[1m]` for eligible users in the merged Opus 1M experience
