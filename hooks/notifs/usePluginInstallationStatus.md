## Purpose
Monitors plugin and marketplace installation status; shows a medium-priority summary notification when any installations fail.

## Imports
- **External**: `react` (useEffect, useMemo)
- **Internal**:
  - `../../bootstrap/state.js` (getIsRemoteMode)
  - `../../context/notifications.js` (useNotifications)
  - `../../ink.js` (Text)
  - `../../state/AppState.js` (useAppState)
  - `../../utils/debug.js` (logForDebugging)
  - `../../utils/stringUtils.js` (plural)

## Logic
- Reads `installationStatus` from `appState.plugins.installationStatus`
- Computes `failedMarketplaces` (marketplaces with status "failed") and `failedPlugins` (plugins with status "failed")
- `totalFailed = failedMarketplaces.length + failedPlugins.length`
- When `totalFailed > 0` and not in remote mode:
  - Shows notification with:
    - `key`: "plugin-install-failed"
    - `jsx`: `<Text color="error">{totalFailed} {plural(totalFailed, "plugin")} failed to install</Text><Text dimColor> · /plugin for details</Text>`
    - `priority`: "medium"
- Notification is replaced each time counts change; persists until counts drop to zero (effect stops adding new ones but existing notification is not explicitly removed — key matches so may be overwritten on next add)

## Exports
- `usePluginInstallationStatus` - Hook with no parameters
