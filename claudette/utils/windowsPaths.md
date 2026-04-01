# utils/windowsPaths

## Purpose
Provides Windows path conversion and handling utilities.

## Imports
- **Stdlib**: `path`, `path/win32`
- **External**: `lodash-es/memoize`
- **Internal**: cwd, debug, execSyncWrapper, memoize, platform

## Logic
1. `checkPathExists` - checks if file/directory exists on Windows using dir command
2. `findExecutable` - finds executable using where.exe on Windows
3. For git: checks common installation locations first
4. 64-bit: C:\Program Files\Git\cmd\git.exe
5. 32-bit: C:\Program Files (x86)\Git\cmd\git.exe
6. Intentionally doesn't look at C:\Program Files\Git\mingw64\bin\git.exe (raw tools, no env setup)
7. Falls back to where.exe
8. SECURITY: Filters out results from current directory to prevent malicious git.bat/cmd/exe
9. Compares normalized paths to ensure not in current directory
10. Skips executables in current working directory
11. Returns first valid path not in current directory
12. `windowsPathToPosixPath` - converts Windows path to POSIX path
13. Handles drive letters (C:\ → /c/)
14. Converts backslashes to forward slashes
15. `posixPathToWindowsPath` - converts POSIX path to Windows path
16. Handles /c/ → C:\ conversion
17. Converts forward slashes to backslashes
18. `normalizeWindowsPath` - normalizes Windows path
19. `getWindowsPath` - gets Windows path for file
20. `getPosixPath` - gets POSIX path for file
21. `memoize`, `memoizeWithLRU` - memoization utilities
22. `getCwd` - gets current working directory
23. `logForDebugging` - debug logging
24. `execSync_DEPRECATED` - sync exec wrapper
25. `getPlatform` - gets platform

## Exports
- `checkPathExists` - checks path exists
- `findExecutable` - finds executable
- `windowsPathToPosixPath` - converts Windows to POSIX
- `posixPathToWindowsPath` - converts POSIX to Windows
- `normalizeWindowsPath` - normalizes Windows path
- `getWindowsPath` - gets Windows path
- `getPosixPath` - gets POSIX path
