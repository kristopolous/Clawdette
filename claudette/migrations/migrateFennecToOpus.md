## Purpose
Migrates users on removed fennec model aliases to their new Opus 4.6 equivalents.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `utils/settings/settings` (getSettingsForSource, updateSettingsForSource)

## Logic
1. Returns early if `USER_TYPE` environment variable is not `ant`
2. Reads userSettings model and checks for fennec-related prefixes
3. Maps `fennec-latest` to `opus` and `fennec-latest[1m]` to `opus[1m]`
4. Maps `fennec-fast-latest` and `opus-4-5-fast` to `opus[1m]` with `fastMode` enabled
5. Only touches userSettings, leaving project/local/policy settings untouched (idempotent without completion flag)

## Exports
- `migrateFennecToOpus` - Migrates deprecated fennec model aliases to Opus 4.6 aliases
