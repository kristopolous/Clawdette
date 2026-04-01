# debugUtils

## Purpose
Provides debug logging utilities including secret redaction, JSON truncation, and axios error description helpers.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: analytics, debug utils, error utils, JSON utils

## Logic
1. `redactSecrets` - redacts sensitive fields (token, secret, etc.) matching length threshold, showing only first 8 and last 4 chars
2. `debugTruncate` - truncates strings for logging, collapsing newlines to `\n` escape sequences
3. `debugBody` - stringifies JSON values, redacts secrets, truncates to limit
4. `describeAxiosError` - extracts descriptive error message from axios errors, including server response body
5. `extractHttpStatus` - safely extracts HTTP status code from axios errors

## Exports
- `redactSecrets` - redacts sensitive field values in JSON strings
- `debugTruncate` - truncates strings for debug display
- `debugBody` - formats and redacts JSON for logging
- `describeAxiosError` - extracts descriptive error message from axios errors
- `extractHttpStatus` - extracts HTTP status code from errors
