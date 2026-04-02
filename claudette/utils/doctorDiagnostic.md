# doctorDiagnostic

## Purpose
On Windows, convert backslashes to forward slashes for consistent path matching

## Imports
- **Stdlib**: execa, fs/promises, os, path
- **Internal**: ./autoUpdater, /bundledMode, /cwd, /envUtils, /execFileNoThrow, /fsOperations, /platform, ./ripgrep, ./sandbox/sandbox-adapter, ./settings/managedPath...

## Items

### getNormalizedPaths
**Type**: Function

### getCurrentInstallationType
**Type**: Function

### getInstallationPath
**Type**: Function

### getInvokedBinary
**Type**: Function

### detectMultipleInstallations
**Type**: Function

### detectConfigurationIssues
**Type**: Function

### detectLinuxGlobPatternWarnings
**Type**: Function

### getDoctorDiagnostic
**Type**: Function

### InstallationType
**Type**: Type alias

### DiagnosticInfo
**Type**: Type alias

## Exports
- InstallationType
- DiagnosticInfo
- getCurrentInstallationType
- getInvokedBinary
- detectLinuxGlobPatternWarnings
- getDoctorDiagnostic

## Source
`doctorDiagnostic`