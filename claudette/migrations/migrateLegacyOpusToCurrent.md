## Purpose
Migrates first-party users off explicit Opus 4.0/4.1 model strings to the `opus` alias, which now resolves to Opus 4.6.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `services/analytics` (logEvent), `utils/config` (saveGlobalConfig), `utils/model/model` (isLegacyModelRemapEnabled), `utils/model/providers` (getAPIProvider), `utils/settings/settings` (getSettingsForSource, updateSettingsForSource)

## Logic
1. Returns early if not using first-party provider or legacy model remap is not enabled
2. Checks if userSettings model matches any legacy Opus 4.0/4.1 string variant
3. Updates userSettings to use the `opus` alias
4. Records migration timestamp in global config for REPL notification
5. Logs analytics event with the original model string

## Exports
- `migrateLegacyOpusToCurrent` - Migrates explicit Opus 4.0/4.1 model strings to the `opus` alias
