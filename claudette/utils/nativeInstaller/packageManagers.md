# packageManagers

## Purpose
Check if the executable is within a mise installs directory

## Imports
- **Stdlib**: fs/promises, lodash-es/memoize.js
- **Internal**: ../debug.js, ../execFileNoThrow.js, ../platform

## Items

### isDistroFamily
**Type**: Function

### detectMise
**Type**: Function

### detectAsdf
**Type**: Function

### detectHomebrew
**Type**: Function

### detectWinget
**Type**: Function

### PackageManager
**Type**: Type alias

## Exports
- PackageManager
- getOsRelease
- detectMise
- detectAsdf
- detectHomebrew
- detectWinget
- detectPacman
- detectDeb
- detectRpm
- detectApk
- getPackageManager

## Source
`packageManagers.ts`