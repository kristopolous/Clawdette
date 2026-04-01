# localInstaller

## Purpose
Lazy getters: getClaudeConfigHomeDir() is memoized and reads process.env.

## Imports
- **Stdlib**: fs/promises, path
- **Internal**: ./config.js, ./envUtils.js, ./errors.js, ./execFileNoThrow.js, ./fsOperations.js, ./log.js, ./slowOperations.js

## Items

### getLocalInstallDir
**Type**: Function

### getLocalClaudePath
**Type**: Function

### isRunningFromLocalInstallation
**Type**: Function

### writeIfMissing
**Type**: Function

### ensureLocalPackageEnvironment
**Type**: Function

### installOrUpdateClaudePackage
**Type**: Function

### localInstallationExists
**Type**: Function

### getShellType
**Type**: Function

## Exports
- getLocalClaudePath
- isRunningFromLocalInstallation
- ensureLocalPackageEnvironment
- installOrUpdateClaudePackage
- localInstallationExists
- getShellType

## Source
`localInstaller.ts`