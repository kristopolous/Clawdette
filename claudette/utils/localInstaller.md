# utils/localInstaller

## Purpose
Provides utilities for local installation management.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: (none)
- **Internal**: config, envUtils, errors, execFileNoThrow, fsOperations, log, JSON utils

## Logic
1. `getLocalInstallDir` - gets local install directory (~/.claude/local)
2. Lazy getter to avoid capturing stale CLAUDE_CONFIG_DIR value
3. `getLocalClaudePath` - gets local claude path
4. `isRunningFromLocalInstallation` - checks if running from local install
5. Checks if process.argv[1] includes '/.claude/local/node_modules/'
6. `writeIfMissing` - writes file only if it doesn't exist
7. Uses O_EXCL ('wx') flag for atomic create-if-missing
8. Returns true if created, false if already exists
9. `ensureLocalPackageEnvironment` - ensures local package environment
10. Creates installation directory (recursive, idempotent)
11. Creates package.json if missing
12. Creates wrapper script if missing (#!/bin/sh exec claude "$@")
13. Sets wrapper permissions to 0o755
14. `installLocalPackage` - installs package locally
15. `uninstallLocalPackage` - uninstalls local package
16. `getLocalPackageVersion` - gets local package version

## Exports
- `getLocalInstallDir` - gets local install directory
- `getLocalClaudePath` - gets local claude path
- `isRunningFromLocalInstallation` - checks local installation
- `writeIfMissing` - writes file if missing
- `ensureLocalPackageEnvironment` - ensures package environment
- `installLocalPackage` - installs local package
- `uninstallLocalPackage` - uninstalls local package
- `getLocalPackageVersion` - gets local package version
