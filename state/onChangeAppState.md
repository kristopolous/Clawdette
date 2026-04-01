# onChangeAppState.ts

## Purpose
Side-effect handler for AppState changes. Implements the single choke point for synchronizing state changes to external systems (CCR, SDK, config persistence) without scattering update logic throughout the codebase.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**:
  - `setMainLoopModelOverride` from `src/bootstrap/state.js`
  - `clearApiKeyHelperCache`, `clearAwsCredentialsCache`, `clearGcpCredentialsCache` from `src/utils/auth.js`
  - `getGlobalConfig`, `saveGlobalConfig` from `src/utils/config.js`
  - `toError` from `src/utils/errors.js`
  - `logError` from `src/utils/log.js`
  - `applyConfigEnvironmentVariables` from `src/utils/managedEnv.js`
  - `permissionModeFromString`, `toExternalPermissionMode` from `src/utils/permissions/PermissionMode.js`
  - `notifyPermissionModeChanged`, `notifySessionMetadataChanged`, `SessionExternalMetadata` from `src/utils/sessionState.js`
  - `updateSettingsForSource` from `src/utils/settings/settings.js`
  - `AppState` from `src/state/AppStateStore.js`

## Logic
Implements change handlers for specific AppState mutations:

1. **Permission Mode Sync** - When `toolPermissionContext.mode` changes:
   - Externalizes internal mode names (filters out `bubble`, `ungated auto`)
   - Notifies CCR via `notifySessionMetadataChanged` with external mode
   - Notifies SDK status stream via `notifyPermissionModeChanged`
   - Handles ultraplan mode transition detection

2. **mainLoopModel Changes** - When model selection changes:
   - If set to `null`: removes model from settings and clears override
   - If set to a value: saves to settings and updates override

3. **expandedView Changes** - Persists view mode to global config:
   - Maps `expandedView: 'tasks'` to `showExpandedTodos: true`
   - Maps `expandedView: 'teammates'` to `showSpinnerTree: true`

4. **verbose Changes** - Persists verbose flag to global config

5. **tungstenPanelVisible** (ANT-only) - Persists panel visibility to global config

6. **settings Changes** - Clears auth caches and re-applies environment variables:
   - Clears API key helper cache
   - Clears AWS credentials cache
   - Clears GCP credentials cache
   - Re-applies config environment variables if `settings.env` changed

## Exports
- `externalMetadataToAppState` - Inverse mapper from `SessionExternalMetadata` to an AppState updater function
- `onChangeAppState` - Main handler called when AppState changes; syncs state to external systems
