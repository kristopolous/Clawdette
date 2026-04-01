## Purpose
Migrates Pro/Max/Team Premium first-party users from explicit Sonnet 4.5 model strings to the `sonnet` alias, which now resolves to Sonnet 4.6.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `services/analytics` (logEvent), `utils/auth` (isMaxSubscriber, isProSubscriber, isTeamPremiumSubscriber), `utils/config` (getGlobalConfig, saveGlobalConfig), `utils/model/providers` (getAPIProvider), `utils/settings/settings` (getSettingsForSource, updateSettingsForSource)

## Logic
1. Returns early if not using the first-party inference provider or if the user is not a Pro/Max/Team Premium subscriber
2. Reads the model from userSettings and checks if it matches any Sonnet 4.5 string variant
3. If matched, updates the model to `sonnet` or `sonnet[1m]` depending on whether the original had the 1M context suffix
4. Records a migration timestamp in global config for users with more than one startup (to skip notification for new users)
5. Logs an analytics event with the original model and 1M flag

## Exports
- `migrateSonnet45ToSonnet46` - Migrates Sonnet 4.5 model pins to the Sonnet 4.6 alias in userSettings
