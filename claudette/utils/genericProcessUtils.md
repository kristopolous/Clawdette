# utils/genericProcessUtils

## Purpose
Provides platform-agnostic process utilities (ps-type commands).

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: execFileNoThrow

## Logic
1. `isProcessRunning` - checks if process with PID is running via signal 0 probe
2. PID ≤ 1 returns false (0 is current process group, 1 is init)
3. process.kill(pid, 0) throws EPERM for other-user processes (reports as not running)
4. Conservative for lock recovery (won't steal live lock)
5. `getAncestorPidsAsync` - gets ancestor process chain up to maxDepth
6. Windows: PowerShell script walking Win32_Process tree
7. Unix: shell script using ps -o ppid= in loop
8. Returns array from immediate parent to furthest ancestor
9. `getAncestorCommandsAsync` - gets ancestor command names
10. Uses ps -o comm= on Unix, Get-CimInstance on Windows
11. `isProcessRunningByName` - checks if process with name is running
12. Uses pgrep on Unix, Get-Process on Windows
13. `getProcessStartTime` - gets process start time
14. Uses ps -o lstart= on Unix, CreationDate on Windows
15. Handles Win32, Unix, BSD-style ps differences

## Exports
- `isProcessRunning` - checks if process running
- `getAncestorPidsAsync` - gets ancestor PIDs
- `getAncestorCommandsAsync` - gets ancestor commands
- `isProcessRunningByName` - checks process by name
- `getProcessStartTime` - gets process start time
