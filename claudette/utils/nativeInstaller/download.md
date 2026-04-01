# download

## Purpose
Direct version - match internal format too (e.g. 1.0.30-dev.shaf4937ce)

## Imports
- **Stdlib**: bun:bundle, axios, crypto, fs/promises, path, src/services/analytics/index.js
- **Internal**: ../config.js, ../debug.js, ../errors.js, ../execFileNoThrow.js, ../fsOperations.js, ../log.js, ../sleep, ../slowOperations, ./installer

## Items

### StallTimeoutError
**Type**: Class

### getLatestVersionFromArtifactory
**Type**: Function

### getLatestVersionFromBinaryRepo
**Type**: Function

### getLatestVersion
**Type**: Function

### downloadVersionFromArtifactory
**Type**: Function

### getStallTimeoutMs
**Type**: Function

### downloadAndVerifyBinary
**Type**: Function

### downloadVersionFromBinaryRepo
**Type**: Function

### downloadVersion
**Type**: Function

## Exports
- ARTIFACTORY_REGISTRY_URL
- getLatestVersionFromArtifactory
- getLatestVersionFromBinaryRepo
- getLatestVersion
- downloadVersionFromArtifactory
- downloadVersionFromBinaryRepo
- downloadVersion
- STALL_TIMEOUT_MS
- _downloadAndVerifyBinaryForTesting

## Source
`download.ts`