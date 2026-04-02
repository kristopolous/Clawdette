# execSyncWrapper

## Purpose
Deprecated wrapper around Node's `child_process.execSync` that adds slow operation logging via `slowLogging` to detect performance issues from blocking sync calls.

## Imports
- **Stdlib**: `child_process` (execSync, ExecSyncOptions, ExecSyncOptionsWithStringEncoding, ExecSyncOptionsWithBufferEncoding)
- **Internal**: ./slowOperations (slowLogging)

## Logic
1. Wraps `nodeExecSync` with `slowLogging` resource to track execution time
2. Command is truncated to 100 chars for log messages
3. Supports all standard execSync signatures via function overloads:
   - `(command)` → returns Buffer
   - `(command, { encoding: string })` → returns string
   - `(command, { encoding: buffer })` → returns Buffer
   - `(command, options?)` → returns Buffer | string
4. Passes through all options to the underlying `execSync`

## Exports
- `execSync_DEPRECATED` - wrapped execSync with slow operation logging, supports Buffer and string output
