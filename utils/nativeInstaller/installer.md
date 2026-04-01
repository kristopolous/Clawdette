# installer

## Purpose
7 days in milliseconds - used for mtime-based lock stale timeout.

## Imports
- **Stdlib**: fs, os, path
- **Internal**: ../autoUpdater.js, ../cleanupRegistry.js, ../config.js, ../debug.js, ../doctorDiagnostic.js, ../env.js, ../envDynamic.js, ../envUtils.js, ../errors.js, ../execFileNoThrow.js...

## Items

### getPlatform
**Type**: Function

### getBinaryName
**Type**: Function

### getBaseDirectories
**Type**: Function

### isPossibleClaudeBinary
**Type**: Function

### getVersionPaths
**Type**: Function

### tryWithVersionLock
**Type**: Function

### atomicMoveToInstallPath
**Type**: Function

### installVersionFromPackage
**Type**: Function

### installVersionFromBinary
**Type**: Function

### installVersion
**Type**: Function

### performVersionUpdate
**Type**: Function

### versionIsAvailable
**Type**: Function

### updateLatest
**Type**: Function

### removeDirectoryIfEmpty
**Type**: Function

### updateSymlink
**Type**: Function

### checkInstall
**Type**: Function

### installLatest
**Type**: Function

### installLatestImpl
**Type**: Function

### getVersionFromSymlink
**Type**: Function

### getLockFilePathFromVersionPath
**Type**: Function

### lockCurrentVersion
**Type**: Function

### logLockAcquisitionError
**Type**: Function

### forceRemoveLock
**Type**: Function

### cleanupOldVersions
**Type**: Function

### isNpmSymlink
**Type**: Function

### removeInstalledSymlink
**Type**: Function

### cleanupShellAliases
**Type**: Function

### manualRemoveNpmPackage
**Type**: Function

### tryRemove
**Type**: Function

### attemptNpmUninstall
**Type**: Function

### cleanupNpmInstallations
**Type**: Function

### SetupMessage
**Type**: Type alias

### InstallLatestResult
**Type**: Type alias

### VersionInfo
**Type**: Type alias

## Exports
- VERSION_RETENTION_COUNT
- SetupMessage
- getPlatform
- getBinaryName
- removeDirectoryIfEmpty
- checkInstall
- installLatest
- lockCurrentVersion
- cleanupOldVersions
- removeInstalledSymlink
- cleanupShellAliases
- cleanupNpmInstallations

## Source
`installer.ts`