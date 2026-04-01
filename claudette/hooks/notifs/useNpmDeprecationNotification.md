## Purpose
Shows a high-priority startup warning that the npm install method is deprecated in favor of the native installer.

## Imports
- **Internal**:
  - src/utils/bundledMode` (isInBundledMode)
  - src/utils/doctorDiagnostic` (getCurrentInstallationType)
  - src/utils/envUtils` (isEnvTruthy)
  - `/useStartupNotification` (useStartupNotification)

## Logic
- Hook uses `useStartupNotification` with async `_temp`
- Conditions: not bundled mode, `DISABLE_INSTALLATION_CHECKS` env not truthy, installation type !== "development"
- Shows a warning notification with:
  - `key`: "npm-deprecation-warning"
  - `text`: hardcoded message with `claude install` command and docs link
  - `color`: "warning"
  - `priority`: "high"
  - `timeoutMs`: 15000 (15 seconds)

## Exports
- `useNpmDeprecationNotification` - Hook with no parameters
