# utils/which

## Purpose
Provides cross-platform executable path lookup utilities.

## Imports
- **Stdlib**: (none)
- **External**: `execa`
- **Internal**: execSyncWrapper

## Logic
1. `whichNodeAsync` - async which implementation
2. Windows: uses where.exe, returns first result
3. where.exe returns multiple paths separated by newlines
4. POSIX (macOS, Linux, WSL): uses which command
5. `whichNodeSync` - sync which implementation
6. Same platform-specific logic as async version
7. `bunWhich` - Bun.which when available (fast, no process spawn)
8. Checks typeof Bun !== 'undefined' && typeof Bun.which === 'function'
9. `which` - async executable path lookup
10. Uses Bun.which when running in Bun
11. Otherwise spawns platform-appropriate command
12. `whichSync` - sync executable path lookup
13. Uses Bun.which when available
14. Otherwise uses whichNodeSync
15. Returns full path to command, or null if not found

## Exports
- `which` - async executable path lookup
- `whichSync` - sync executable path lookup
