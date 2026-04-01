## Purpose
Provides utility functions for logging warnings about invalid values, particularly non-integer values where integers are expected.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: logForDebugging from ../utils/debug

## Logic
1. **ifNotInteger() Function**:
   - Takes a value (number or undefined) and a name string
   - Returns early if value is undefined (no warning needed)
   - Returns early if value is an integer (using Number.isInteger())
   - Logs a warning message via logForDebugging if value is not an integer
   - Warning includes the parameter name and the actual value received
   - Uses 'warn' level for the log entry

## Exports
- `ifNotInteger` - Function that logs a warning if the provided value is not an integer