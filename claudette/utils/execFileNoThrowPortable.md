# execFileNoThrowPortable

## Purpose
Deprecated wrapper around `execaSync` that executes shell commands synchronously without throwing on errors, returning `null` on failure.

## Imports
- **External**: `execa` (execaSync, Options type)
- **Internal**: ../utils/cwd (getCwd), ./slowOperations (slowLogging)

## Logic
1. Supports multiple call signatures via function overloads: `(command)`, `(command, options)`, `(command, abortSignal, timeout?)`
2. Normalizes old signature (AbortSignal as 2nd arg) to new options object
3. Default timeout is 10 minutes (600,000ms)
4. Sets `shell: true` for shell command execution
5. Sets `reject: false` to avoid throwing on non-zero exit codes
6. Uses `slowLogging` resource to track long-running executions
7. Returns trimmed stdout or `null` if empty/error
8. Catches all exceptions and returns `null`

## Exports
- `ExecSyncOptions` - type alias for { abortSignal?, timeout?, input?, stdio? }
- `execSyncWithDefaults_DEPRECATED` - sync exec wrapper that never throws, returns stdout string or null
