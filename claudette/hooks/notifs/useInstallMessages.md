## Purpose
Runs installation checks at startup and displays any resulting messages (errors, warnings, info) as notifications.

## Imports
- **Internal**:
  - `src/utils/nativeInstaller/index.js` (checkInstall)
  - `./useStartupNotification.js` (useStartupNotification)

## Logic
- Hook uses `useStartupNotification` with async `_temp2`
- `_temp2()`: calls `checkInstall()` which returns array of `{ type, message, userActionRequired? }`
- Maps each message to a notification:
  - `key`: `install-message-${index}-${type}`
  - `text`: message.message
  - `priority`: `error` or `userActionRequired` → `high`; `path` or `alias` → `medium`; else `low`
  - `color`: `error` → `error`; else `warning`
- Returns array of notification objects (or null if empty)

## Exports
- `useInstallMessages` - Hook with no parameters
