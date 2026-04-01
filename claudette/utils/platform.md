# utils/platform

## Purpose
Provides platform detection utilities for macOS, Windows, WSL, Linux, and VCS detection.

## Imports
- **Stdlib**: `fs/promises`, `os`
- **External**: `lodash-es/memoize`
- **Internal**: fsOperations, log

## Logic
1. `Platform` - 'macos' | 'windows' | 'wsl' | 'linux' | 'unknown'
2. `SUPPORTED_PLATFORMS` - ['macos', 'wsl']
3. `getPlatform` - memoized platform detection
4. macOS: process.platform === 'darwin'
5. Windows: process.platform === 'win32'
6. Linux: checks /proc/version for Microsoft/WSL markers
7. WSL: returns 'wsl' if Microsoft/WSL in /proc/version
8. Regular Linux: returns 'linux'
9. Unknown: returns 'unknown' on error
10. `getWslVersion` - memoized WSL version detection
11. Only checks on Linux systems
12. Matches WSL1, WSL2, etc. via /proc/version regex /WSL(\d+)/i
13. Falls back to '1' if Microsoft marker but no version (original WSL1 format)
14. Returns undefined if not WSL or unable to determine
15. `LinuxDistroInfo` - { linuxDistroId?, linuxDistroVersion?, linuxKernel? }
16. `getLinuxDistroInfo` - memoized async Linux distro detection
17. Returns undefined if not Linux
18. Gets kernel from osRelease()
19. Parses /etc/os-release for ID and VERSION_ID
20. Strips quotes from values
21. `VCS_MARKERS` - array of [marker, vcs] pairs for VCS detection
22. Includes: .git→git, .hg→mercurial, .svn→svn, .p4config→perforce, $tf/.tfvc→tfs, .jj→jujutsu, .sl→sapling
23. `detectVcs` - detects version control systems in directory
24. Checks P4PORT env var for Perforce
25. Checks directory entries for VCS markers
26. Returns array of detected VCS names

## Exports
- `Platform` - platform type
- `SUPPORTED_PLATFORMS` - supported platforms array
- `getPlatform` - detects platform
- `getWslVersion` - detects WSL version
- `LinuxDistroInfo` - Linux distro info type
- `getLinuxDistroInfo` - gets Linux distro info
- `VCS_MARKERS` - VCS markers array
- `detectVcs` - detects VCS in directory
