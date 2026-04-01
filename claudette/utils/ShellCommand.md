# ShellCommand

## Purpose
Background tasks write stdout/stderr directly to a file fd (no JS involvement),

## Imports
- **Stdlib**: child_process, fs/promises, stream, tree-kill
- **Internal**: ../Task, ./format, ./task/TaskOutput

## Items

### ShellCommandImpl
**Type**: Class

### AbortedShellCommand
**Type**: Class

### prependStderr
**Type**: Function

### wrapSpawn
**Type**: Function

### createAbortedCommand
**Type**: Function

### createFailedCommand
**Type**: Function

### ExecResult
**Type**: Type alias

### ShellCommand
**Type**: Type alias

## Exports
- ExecResult
- ShellCommand
- wrapSpawn
- createAbortedCommand
- createFailedCommand

## Source
`ShellCommand.ts`