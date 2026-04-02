# doctorDiagnostic

## Purpose
Collects comprehensive diagnostic information about the Claude Code installation, including installation type, version, paths, multiple installations, configuration issues, and ripgrep status. Used by the `claude doctor` command.

## Imports
- **Stdlib**: `fs/promises`, `os`, `path`
- **External**: `execa`
- **Internal**: `./autoUpdater`, `./bundledMode`, `./config`, `./cwd`, `./envUtils`, `./execFileNoThrow`, `./fsOperations`, `./localInstaller`, `./nativeInstaller/packageManagers`, `./platform`, `./ripgrep`, `./sandbox/sandbox-adapter`, `./settings/managedPath`, `./settings/types`, `./shellConfig`, `./slowOperations`, `./which`

## Logic
1. Normalize binary paths (handle Windows backslash conversion)
2. Detect installation type by checking: dev mode, bundled mode + package managers, local npm install, global npm locations, npm config prefix
3. Resolve installation path based on mode (dev → cwd, bundled → realpath/which, npm → process.argv[0])
4. Detect multiple installations by checking local, global npm, orphaned packages, and native paths
5. Detect configuration issues: managed-settings validation, PATH for native installs, config method mismatches, local install accessibility, auto-update permissions, leftover npm installs after native migration
6. Collect ripgrep status and package manager info
7. Assemble all data into DiagnosticInfo object

## Exports
- `InstallationType` - union type: `'npm-global' | 'npm-local' | 'native' | 'package-manager' | 'development' | 'unknown'`
- `DiagnosticInfo` - object type with fields: installationType, version, installationPath, invokedBinary, configInstallMethod, autoUpdates, hasUpdatePermissions, multipleInstallations, warnings, recommendation?, packageManager?, ripgrepStatus
- `getCurrentInstallationType()` - async, returns InstallationType by checking dev mode, bundled mode + package manager detection, local/global npm, and npm config prefix
- `getInvokedBinary()` - sync, returns the path of the invoked binary (execPath for bundled, argv[1] for npm)
- `detectLinuxGlobPatternWarnings()` - sync, returns warnings about unsupported glob patterns in sandbox permissions on Linux
- `getDoctorDiagnostic()` - async, main entry point that assembles all diagnostic data including installation type, version, paths, warnings (config issues, leftover installs, permissions), ripgrep status, and package manager info

## Source
`doctorDiagnostic`