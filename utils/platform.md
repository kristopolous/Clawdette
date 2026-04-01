# platform

## Purpose
Check if running in WSL (Windows Subsystem for Linux)

## Imports
- **Stdlib**: fs/promises, lodash-es/memoize.js, os
- **Internal**: ./fsOperations.js, ./log.js

## Items

### detectVcs
**Type**: Function

### Platform
**Type**: Type alias

### LinuxDistroInfo
**Type**: Type alias

## Exports
- Platform
- SUPPORTED_PLATFORMS
- getPlatform
- getWslVersion
- LinuxDistroInfo
- getLinuxDistroInfo
- detectVcs

## Source
`platform.ts`