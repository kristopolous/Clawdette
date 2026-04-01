# policyLimits/index

## Purpose
Fetches organization-level policy restrictions from API and disables CLI features accordingly.

## Imports
- **Stdlib**: `crypto`, `fs`, `fs/promises`, `path`
- **External**: `axios`
- **Internal**: oauth constants, auth utils, cleanupRegistry, debug, envUtils, errors, JSON utils, model providers, privacyLevel, sleep, JSON utils, userAgent, API withRetry, policyLimits types

## Logic
1. Eligibility: Console users (API key) all eligible; OAuth users need Team/Enterprise/C4E subscription
2. Fails open on API failure - continues without restrictions
3. `CACHE_FILENAME` - policy-limits.json in config dir
4. `FETCH_TIMEOUT_MS` (10s), `DEFAULT_MAX_RETRIES` (5), `POLLING_INTERVAL_MS` (1 hour)
5. Background polling with ETag caching (same pattern as remote managed settings)
6. `loadingCompletePromise` - resolves when initial loading completes
7. `LOADING_PROMISE_TIMEOUT_MS` (30s) prevents deadlocks
8. `sessionCache` - session-level cache for policy restrictions
9. `_resetPolicyLimitsForTesting` - test-only sync reset for clean test state
10. Registers cleanup on shutdown

## Exports
- `_resetPolicyLimitsForTesting` - test-only reset function
- (Additional policy limits functions for fetching, caching, applying restrictions)
