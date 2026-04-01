# utils/ide

## Purpose
Provides IDE detection and integration utilities.

## Imports
- **Stdlib**: `net`, `os`, `path`
- **External**: `@modelcontextprotocol/sdk`, `axios`, `execa`, `lodash-es/capitalize/memoize`
- **Internal**: analytics, bootstrap state, MCP client/types, config, env, envUtils, execFileNoThrow, fsOperations, genericProcessUtils, jetbrains, log, platform, semver, ideOnboardingDialog, abortController, debug, envDynamic, errors, idePathConversion, sleep, JSON utils

## Logic
1. `isProcessRunning` - checks if process with PID is running
2. `makeAncestorPidLookup` - creates lazy ancestor PID lookup function
3. Caches ancestor PIDs within closure lifetime
4. `LockfileJsonContent` - { workspaceFolders, pid, ideName, transport, runningInWindows, authToken }
5. IDE detection via lockfile parsing
6. `getConnectedIdeName` - gets connected IDE name
7. `isIdeConnected` - checks if IDE is connected
8. `callIdeRpc` - calls IDE RPC endpoint
9. `checkWSLDistroMatch` - checks WSL distro match
10. `WindowsToWSLConverter` - converts Windows paths to WSL
11. `isJetBrainsPluginInstalledCached` - checks JetBrains plugin installed
12. `showIdeOnboardingDialog` - shows IDE onboarding dialog
13. Lazy-loads IdeOnboardingDialog component
14. Supports VS Code, JetBrains, and other IDEs
15. Handles Windows/WSL path conversion

## Exports
- `isProcessRunning` - checks process running
- `makeAncestorPidLookup` - creates ancestor PID lookup
- `getConnectedIdeName` - gets IDE name
- `isIdeConnected` - checks IDE connected
- `callIdeRpc` - calls IDE RPC
- `checkWSLDistroMatch` - checks WSL distro match
- `WindowsToWSLConverter` - Windows to WSL converter
- `isJetBrainsPluginInstalledCached` - checks JetBrains plugin
- `showIdeOnboardingDialog` - shows onboarding dialog
