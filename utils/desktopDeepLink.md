# desktopDeepLink

## Purpose
Local builds from build directories are dev mode even with NODE_ENV=production

## Imports
- **Stdlib**: fs/promises, path, semver
- **Internal**: ../bootstrap/state.js, ./cwd.js, ./debug.js, ./execFileNoThrow.js, ./file.js, ./semver.js

## Items

### isDevMode
**Type**: Function

### buildDesktopDeepLink
**Type**: Function

### isDesktopInstalled
**Type**: Function

### getDesktopVersion
**Type**: Function

### getDesktopInstallStatus
**Type**: Function

### openDeepLink
**Type**: Function

### openCurrentSessionInDesktop
**Type**: Function

### DesktopInstallStatus
**Type**: Type alias

## Exports
- DesktopInstallStatus
- getDesktopInstallStatus
- openCurrentSessionInDesktop

## Source
`desktopDeepLink.ts`