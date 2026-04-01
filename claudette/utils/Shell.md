# Shell

## Purpose
Fallback for Nix and other environments where X_OK check might fail

## Imports
- **Stdlib**: child_process, fs, fs/promises, lodash-es/memoize.js, path, path/posix, src/services/analytics/index.js, fs
- **Internal**: ../Task.js, ./cwd.js, ./debug.js, ./errors.js, ./fsOperations.js, ./log.js, ./task/diskOutput.js, ./task/TaskOutput, ./which, ./hooks/fileChangedWatcher...

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
`Shell.ts`