# Shell

## Purpose
Fallback for Nix and other environments where X_OK check might fail

## Imports
- **Stdlib**: child_process, fs, fs/promises, lodashes/memoize, path, path/posix,src/services/analytics/index, fs
- **Internal**: ../Task, /cwd, /debug, /errors, /fsOperations, /log, /task/diskOutput, ./task/TaskOutput, ./which, ./hooks/fileChangedWatcher...

## Items

### isExecutable
**Type**: Function

### findSuitableShell
**Type**: Function

### getShellConfigImpl
**Type**: Function

### exec
**Type**: Function

### setCwd
**Type**: Function

### ShellConfig
**Type**: Type alias

### ExecOptions
**Type**: Type alias

## Exports
- ShellConfig
- findSuitableShell
- getShellConfig
- getPsProvider
- ExecOptions
- exec
- setCwd

## Source
`Shell`