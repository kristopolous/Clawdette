# pollConfigDefaults

## Purpose
Defines default poll interval configuration for bridge, extracted to avoid heavy transitive dependencies for daemon/SDK callers.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `POLL_INTERVAL_MS_NOT_AT_CAPACITY` (2s) - governs user-visible "connecting…" latency
2. `POLL_INTERVAL_MS_AT_CAPACITY` (10min) - liveness signal when transport connected, 24× headroom under Redis TTL
3. Multisession defaults match single-session values for backward compatibility
4. `reclaim_older_than_ms` (5s) - matches server DEFAULT_RECLAIM_OLDER_THAN_MS for stale work pickup
5. `session_keepalive_interval_v2_ms` (2min) - prevents upstream proxy GC of idle sessions
6. `non_exclusive_heartbeat_interval_ms` (0=disabled) - runs alongside at-capacity polling

## Exports
- `PollIntervalConfig` - type with 8 poll interval fields
- `DEFAULT_POLL_CONFIG` - default configuration values
- Constants for individual interval values
