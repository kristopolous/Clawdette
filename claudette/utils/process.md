# process

## Purpose
Prevents memory leak when pipe is broken (e.g., `claude -p | head -1`)

## Imports
(none detected)

## Items

### handleEPIPE
**Type**: Function

### registerProcessOutputErrorHandlers
**Type**: Function

### writeOut
**Type**: Function

### writeToStdout
**Type**: Function

### writeToStderr
**Type**: Function

### exitWithError
**Type**: Function

### peekForStdinData
**Type**: Function

## Exports
- registerProcessOutputErrorHandlers
- writeToStdout
- writeToStderr
- exitWithError
- peekForStdinData

## Source
`process`