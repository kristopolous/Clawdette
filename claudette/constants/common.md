## Purpose
Provides date and time helpers for session tracking and prompt cache stability.

## Imports
- **Stdlib**: none
- **External**: `lodash-es/memoize`
- **Internal**: none

## Logic
Generates local timezone date strings in ISO format and month/year format. The session start date is memoized to capture the date once at session start, preventing prompt cache invalidation at midnight. Supports an environment variable override for testing.

## Exports
- `getLocalISODate` - returns the current local date in YYYY-MM-DD format
- `getSessionStartDate` - memoized version of getLocalISODate for prompt cache stability
- `getLocalMonthYear` - returns the current month and year as "Month YYYY"
