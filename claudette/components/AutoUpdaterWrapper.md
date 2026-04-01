## Purpose
A higher-order component that abstracts the logic for detecting the application's installation environment and conditionally renders the most appropriate auto-updater mechanism.

## Imports
- **Stdlib**: None
- **External**: `react`
- **Internal**: `feature` (from `bun:bundle`), `services/analytics`, `utils/autoUpdater`, `utils/config`, `utils/debug`, `utils/doctorDiagnostic`, `components/AutoUpdater`, `components/NativeAutoUpdater`, `components/PackageManagerAutoUpdater`

## Logic
1. **Environment Detection**:
    - On component mount, it asynchronously determines the current installation type (e.g., "native," "npm-local," "npm-global") using `getCurrentInstallationType`.
    - This detection is skipped if auto-updates are explicitly disabled via configuration or if running in a development/testing environment.
2. **Updater Selection**:
    - Based on the detected installation type, it dynamically chooses between:
        - `NativeAutoUpdater`: For applications installed via native means.
        - `PackageManagerAutoUpdater`: For applications installed via package managers like npm.
    - Falls back to `AutoUpdater` (likely a default or simplified mechanism) if neither native nor package manager is detected or if a specific `isPackageManager` flag is true.
3. **Conditional Rendering**:
    - Renders the selected updater component, passing through all relevant props for managing update status, notifications, and results.
    - If no suitable updater can be determined or if auto-updates are disabled, it renders nothing, effectively hiding the updater UI.
4. **State Management**: Utilizes internal state (`useNativeInstaller`, `isPackageManager`) to track the results of the environment detection and control which updater component is rendered.

## Exports
- `AutoUpdaterWrapper` - The component responsible for selecting and rendering the correct auto-update implementation.
