## Purpose
Auto-migrates Pro subscribers on the first-party provider to use Opus 4.5 as their default model.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `services/analytics` (logEvent), `utils/auth` (isProSubscriber), `utils/config` (getGlobalConfig, saveGlobalConfig), `utils/model/providers` (getAPIProvider), `utils/settings/settings` (getSettings_DEPRECATED)

## Logic
1. Returns early if migration has already completed (tracked by `opusProMigrationComplete` flag)
2. For non-first-party providers or non-Pro subscribers, marks migration complete and logs a skipped event
3. For eligible Pro users, checks if they have a custom model setting
4. If no custom model, records a timestamp to show a notification about the new default
5. If user has a custom model, only marks migration complete without notification
6. Logs analytics events indicating whether migration was skipped and if user had a custom model

## Exports
- `resetProToOpusDefault` - Resets Pro subscribers to Opus 4.5 as the default model
