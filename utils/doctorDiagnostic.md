# doctorDiagnostic

## Purpose
On Windows, convert backslashes to forward slashes for consistent path matching

## Imports
- **Stdlib**: execa, fs/promises, os, path
- **Internal**: ./autoUpdater.js, ./bundledMode.js, ./cwd.js, ./envUtils.js, ./execFileNoThrow.js, ./fsOperations.js, ./platform.js, ./ripgrep.js, ./sandbox/sandbox-adapter.js, ./settings/managedPath.js...

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
`doctorDiagnostic.ts`