# idePathConversion

## Purpose
Path conversion utilities for IDE communication, handling conversions between Claude's environment and the IDE's environment (specifically Windows/WSL scenarios).

## Imports
- **Stdlib**: child_process (execFileSync)

## Logic
1. `IDEPathConverter` interface defines `toLocalPath` (IDE → Claude format, used when reading workspace folders) and `toIDEPath` (Claude → IDE format, used when sending paths to IDE).
2. `WindowsToWSLConverter` class implements the interface using `wslpath` command. `toLocalPath` uses `wslpath -u` with fallback to manual backslash→slash and drive letter→/mnt/ conversion. `toIDEPath` uses `wslpath -w`. Both handle cross-distro UNC path mismatches by checking distro name.
3. `checkWSLDistroMatch` - checks if a Windows UNC path (`\\wsl$\` or `\\wsl.localhost\`) matches the expected WSL distro name. Returns true for non-UNC paths.

## Exports
- `IDEPathConverter` - interface with `toLocalPath` and `toIDEPath` methods
- `WindowsToWSLConverter` - class implementing IDEPathConverter using wslpath
- `checkWSLDistroMatch` - checks if Windows UNC path matches expected WSL distro
