## Purpose
Displays a diagnostic section showing sandbox dependency status with errors and warnings.

## Imports
- **Stdlib**: None
- **External**: `react`, `react/compiler-runtime`
- **Internal**: `ink`, `utils/sandbox/sandbox-adapter`

## Logic
1. Returns null if the platform is not supported or sandbox is not enabled in settings
2. Runs SandboxManager.checkDependencies() to get error and warning lists
3. Returns null if there are no errors or warnings
4. Renders a status section with color-coded errors and warnings, plus a hint to run /sandbox for install instructions when errors exist

## Exports
- `SandboxDoctorSection` - Renders sandbox dependency diagnostic output or null if no issues exist
- `_temp` - Renders individual error messages in red
- `_temp2` - Renders individual warning messages in yellow
