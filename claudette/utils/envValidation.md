# envValidation

## Purpose
Validates environment variables that should be bounded integers. Parses the value, checks for validity (positive integer), caps at an upper limit if exceeded, and falls back to a default for invalid/missing values. Logs warnings for capped or invalid values.

## Imports
- **Internal**: `./debug`

## Logic
1. If value is undefined/empty, return default with status 'valid'
2. Parse as base-10 integer; if NaN or ≤0, return default with status 'invalid' and log warning
3. If parsed value exceeds upperLimit, return capped value with status 'capped' and log warning
4. Otherwise return parsed value with status 'valid'

## Exports
- `EnvVarValidationResult` - type with fields: `effective` (number), `status` ('valid' | 'capped' | 'invalid'), `message?` (string)
- `validateBoundedIntEnvVar(name, value, defaultValue, upperLimit)` - sync, validates and bounds an env var integer value

## Source
`envValidation`