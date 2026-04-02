# formatBriefTimestamp

## Purpose
Formats ISO timestamps into human-readable strings that scale with age (like a messaging app), respecting POSIX locale environment variables.

## Imports
- (none - uses only built-in Date, Intl, and process.env)

## Logic
1. `formatBriefTimestamp(isoString, now?)` - main export:
   - Parses ISO string, returns empty string for invalid dates
   - Calculates day difference between `now` (injectable for tests) and the date
   - Display scales with age:
     - Same day (0 days ago): "1:30 PM" or "13:30" (locale time only)
     - Within 6 days: "Sunday, 4:15 PM" (weekday + time)
     - Older: "Sunday, Feb 20, 4:30 PM" (weekday + month + day + time)
   - Uses toLocaleTimeString/toLocaleString with derived locale

2. `getLocale()` - derives BCP 47 locale from POSIX env vars:
   - Priority: LC_ALL > LC_TIME > LANG
   - Falls back to undefined (system default) if unset, 'C', or 'POSIX'
   - Converts POSIX format (en_GB.UTF-8) to BCP 47 (en-GB)
   - Strips codeset (.UTF-8) and modifier (@euro), replaces _ with -
   - Validates tag by constructing Intl.DateTimeFormat, returns undefined on invalid

3. `startOfDay(d)` - returns timestamp at midnight for a given date

## Exports
- `formatBriefTimestamp` - formats ISO timestamp to locale-aware human-readable string
