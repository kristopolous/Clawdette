# gitAvailability

## Purpose
Memoized check for git availability on the system, required for installing GitHub-based marketplaces.

## Imports
- **External**: `lodash-es/memoize`
- **Internal**: `../which`

## Logic
1. Uses `which` to locate the git binary without executing it (security best practice).
2. Result is memoized via lodash since git availability rarely changes during a session.
3. **markGitUnavailable** — Forces the cached result to `false` for the rest of the session. Used when git exists on PATH but can't actually run (e.g., macOS xcrun shim without Xcode CLT installed).
4. **clearGitAvailabilityCache** — Clears the memoization cache for testing.

## Exports
- `checkGitAvailable` - Memoized async function returning `true` if git is on PATH
- `markGitUnavailable` - Force the git check to return `false` for the rest of the session
- `clearGitAvailabilityCache` - Clear the memoization cache (tests only)
