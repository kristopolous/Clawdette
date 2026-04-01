# powershellDetection

## Purpose
Snap launcher hangs in subprocesses. Prefer the direct binary.

## Imports
- **Stdlib**: fs/promises
- **Internal**: ../platform, ../which

## Items

### probePath
**Type**: Function

### findPowerShell
**Type**: Function

### getCachedPowerShellPath
**Type**: Function

### getPowerShellEdition
**Type**: Function

### resetPowerShellCache
**Type**: Function

### PowerShellEdition
**Type**: Type alias

## Exports
- findPowerShell
- getCachedPowerShellPath
- PowerShellEdition
- getPowerShellEdition
- resetPowerShellCache

## Source
`powershellDetection.ts`