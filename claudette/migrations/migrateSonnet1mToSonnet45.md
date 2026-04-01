## Purpose
Migrates users who had `sonnet[1m]` saved to the explicit `sonnet-4-5-20250929[1m]` to preserve their intended model after the `sonnet` alias changed to Sonnet 4.6.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `bootstrap/state` (getMainLoopModelOverride, setMainLoopModelOverride), `utils/config` (getGlobalConfig, saveGlobalConfig), `utils/settings/settings` (getSettingsForSource, updateSettingsForSource)

## Logic
1. Returns early if migration has already completed (tracked by `sonnet1m45MigrationComplete` flag)
2. Checks if userSettings model is exactly `sonnet[1m]` and updates it to the explicit Sonnet 4.5 1M string
3. Also migrates the in-memory main loop model override if it matches the old alias
4. Marks migration as complete in global config

## Exports
- `migrateSonnet1mToSonnet45` - Pins `sonnet[1m]` users to explicit Sonnet 4.5 1M before the alias changed
