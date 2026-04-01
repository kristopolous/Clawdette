# utils/xdg

## Purpose
Provides XDG Base Directory utilities for Claude CLI Native Installer.

## Imports
- **Stdlib**: `os`, `path`
- **External**: (none)
- **Internal**: (none)

## Logic
1. Implements XDG Base Directory specification for organizing native installer components
2. @see https://specifications.freedesktop.org/basedir-spec/latest/
3. `EnvLike` - Record<string, string | undefined>
4. `XDGOptions` - { env?, homedir? }
5. `resolveOptions` - resolves options with defaults
6. env: options?.env ?? process.env
7. home: options?.homedir ?? process.env.HOME ?? osHomedir()
8. `getXDGStateHome` - gets XDG state home directory
9. Default: ~/.local/state
10. Uses XDG_STATE_HOME env var if set
11. `getXDGCacheHome` - gets XDG cache home directory
12. Default: ~/.cache
13. Uses XDG_CACHE_HOME env var if set
14. `getXDGDataHome` - gets XDG data home directory
15. Default: ~/.local/share
16. Uses XDG_DATA_HOME env var if set
17. `getUserBinDir` - gets user bin directory
18. Not technically XDG but follows the convention
19. Default: ~/.local/bin

## Exports
- `getXDGStateHome` - gets XDG state home
- `getXDGCacheHome` - gets XDG cache home
- `getXDGDataHome` - gets XDG data home
- `getUserBinDir` - gets user bin directory
