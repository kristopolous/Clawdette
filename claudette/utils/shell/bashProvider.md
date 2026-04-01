# bashProvider

## Purpose
When CLAUDE_CODE_SHELL_PREFIX is set, the wrapper may use a different shell

## Imports
- **Stdlib**: bun:bundle, fs/promises, os, path, path/posix
- **Internal**: ../bash/bashPipeCommand.js, ../bash/ShellSnapshot.js, ../bash/shellPrefix.js, ../bash/shellQuote.js, ../debug.js, ../platform.js, ../sessionEnvironment.js, ../sessionEnvVars, ../windowsPaths, ./shellProvider

## Items

### getDisableExtglobCommand
**Type**: Function

### createBashShellProvider
**Type**: Function

## Exports
- createBashShellProvider

## Source
`bashProvider.ts`