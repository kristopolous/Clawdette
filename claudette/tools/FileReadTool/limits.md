## Purpose
Defines output limits for the FileRead tool: maximum file size and output token count, with configurable overrides.

## Imports
- **External**: `memoize` from 'lodash-es'
- **Internal**:
  - `getFeatureValue_CACHED_MAY_BE_STALE` from analytics/growthbook
  - `MAX_OUTPUT_SIZE` constant from utils/file
  - `FileReadingLimits` type (defined here)

## Logic
Exports:
- `DEFAULT_MAX_OUTPUT_TOKENS` = 25000
- `FileReadingLimits` type: `{ maxTokens: number; maxSizeBytes: number; includeMaxSizeInPrompt?: boolean; targetedRangeNudge?: boolean }`
- `getEnvMaxTokens()`: Returns env var `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` if valid, else undefined.
- `getDefaultFileReadingLimits()`: Memoized function that computes limits with precedence:
  - `maxSizeBytes`: GrowthBook `tengu_amber_wren` override > fallback to `MAX_OUTPUT_SIZE`
  - `maxTokens`: env var > GrowthBook override > `DEFAULT_MAX_OUTPUT_TOKENS`
  - `includeMaxSizeInPrompt` and `targetedRangeNudge`: optional boolean from GrowthBook
  - All numeric values validated to be finite and > 0; invalid fall back to defaults.

Memoization ensures GrowthBook value is read once per session; the flag might refresh in background but memo prevents cap changes mid-session.

## Exports
- `DEFAULT_MAX_OUTPUT_TOKENS` (constant)
- `FileReadingLimits` (type)
- `getDefaultFileReadingLimits()` (function)
- `getEnvMaxTokens()` (internal helper)
