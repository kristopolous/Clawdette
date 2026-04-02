# performStartupChecks

## Purpose
Performs plugin startup checks and initiates background installations of marketplaces and plugins from trusted sources (repository and user settings) without blocking startup. Only runs after the "trust this folder" dialog has been confirmed.

## Imports
- **Stdlib**: None
- **Internal**: `../../services/plugins/PluginInstallationManager.js`, `../../state/AppState.js`, `../config.js`, `../debug.js`, `./marketplaceManager.js`, `./pluginLoader.js`

## Logic
1. **Trust check**: Verifies the current directory has been trusted via `checkHasTrustDialogAccepted()`. Skips all plugin installations if trust is not accepted.
2. **Seed marketplace registration**: Calls `registerSeedMarketplaces()` to register seed marketplaces (CLAUDE_CODE_PLUGIN_SEED_DIR) before diffing. If registration changed state, clears marketplace and plugin caches and sets `needsRefresh` in AppState so the user is notified to run `/reload-plugins`.
3. **Background installations**: Calls `performBackgroundPluginInstallations(setAppState)` to start installations without waiting. Progress and errors are tracked in AppState and shown via notifications.
4. **Error resilience**: All failures are caught and logged — never blocks startup.

## Exports
- `performStartupChecks` - async function that performs startup checks and initiates background plugin installations; takes a `SetAppState` function to update app state with installation progress

## Source
`performStartupChecks`
