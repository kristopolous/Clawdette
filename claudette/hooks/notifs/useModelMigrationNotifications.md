## Purpose
Shows one-time high-priority startup notifications for recent model migrations (e.g., Sonnet 4.5→4.6, Opus Pro→4.6).

## Imports
- **Internal**:
  - `src/context/notifications.js` (Notification type)
  - `src/utils/config.js` (GlobalConfig type, getGlobalConfig)
  - `./useStartupNotification.js` (useStartupNotification)

## Logic
- `MIGRATIONS`: array of functions `(config: GlobalConfig) => Notification | undefined`
  - Checks migration timestamp fields in config; if set within last 3 seconds, returns a notification
  - Sonnet: "Model updated to Sonnet 4.6" (suggestion, high, 3s)
  - Opus: two cases:
    - Legacy remap (legacyOpusMigrationTimestamp): "Model updated to Opus 4.6 · Set CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP=1 to opt out" (suggestion, high, 8s)
    - Normal: "Model updated to Opus 4.6" (suggestion, high, 3s)
- Hook calls `useStartupNotification(_temp)`, where `_temp` iterates MIGRATIONS and returns an array of notifications (or null if none)

## Exports
- `useModelMigrationNotifications` - Hook with no parameters
