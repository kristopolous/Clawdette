# utils/nativeInstaller/packageManagers

## Purpose
Detects which package manager was used to install the currently running Claude CLI instance by examining the executable path and querying OS package databases.

## Imports
- **Stdlib**: `fs/promises`
- **External**: `lodash-es/memoize.js`
- **Internal**: `../debug.js`, `../execFileNoThrow.js`, `../platform.js`

## Logic
1. `PackageManager` type: union of `'homebrew' | 'winget' | 'pacman' | 'deb' | 'rpm' | 'apk' | 'mise' | 'asdf' | 'unknown'`
2. `getOsRelease()` — memoized; parses `/etc/os-release` to extract `ID` and `ID_LIKE` fields; returns `null` if file unreadable
3. `isDistroFamily()` — checks if an os-release result matches a list of distro families (e.g. `['debian']`, `['arch']`)
4. `detectMise()` — checks if `process.execPath` matches `[/\\]mise[/\\]installs[/\\]` pattern
5. `detectAsdf()` — checks if `process.execPath` matches `[/\\]\.?asdf[/\\]installs[/\\]` pattern
6. `detectHomebrew()` — macOS/Linux/WSL only; checks if execPath contains `/Caskroom/` (distinguishes from npm-installed-via-homebrew)
7. `detectWinget()` — Windows only; checks execPath against `WinGet/Packages` or `WinGet/Links` patterns
8. `detectPacman()` — memoized async; Linux only; gates on Arch distro family via `getOsRelease`; runs `pacman -Qo <execPath>` to check file ownership
9. `detectDeb()` — memoized async; Linux only; gates on Debian distro family; runs `dpkg -S <execPath>`
10. `detectRpm()` — memoized async; Linux only; gates on Fedora/RHEL/SUSE families; runs `rpm -qf <execPath>`
11. `detectApk()` — memoized async; Linux only; gates on Alpine distro family; runs `apk info --who-owns <execPath>`
12. `getPackageManager()` — memoized async; runs all detectors in priority order (homebrew, winget, mise, asdf, pacman, apk, deb, rpm); returns `'unknown'` if none match

## Exports
- `PackageManager` — type alias for supported package managers
- `getOsRelease()` — memoized; parses `/etc/os-release` for distro ID and ID_LIKE
- `detectMise()` — sync; checks for mise installation via execPath
- `detectAsdf()` — sync; checks for asdf installation via execPath
- `detectHomebrew()` — sync; checks for Homebrew cask installation
- `detectWinget()` — sync; checks for WinGet installation (Windows only)
- `detectPacman()` — memoized async; checks pacman database (Arch only)
- `detectDeb()` — memoized async; checks dpkg database (Debian only)
- `detectRpm()` — memoized async; checks RPM database (Fedora/RHEL/SUSE only)
- `detectApk()` — memoized async; checks apk database (Alpine only)
- `getPackageManager()` — memoized async; returns detected package manager or `'unknown'`
