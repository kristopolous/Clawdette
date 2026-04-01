## Purpose
Captures immutable configuration values and runtime feature gates at query entry time, separating them from per-iteration state for cleaner step extraction.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: bootstrap/state (getSessionId), services/analytics/growthbook (checkStatsigFeatureGate_CACHED_MAY_BE_STALE), types/ids (SessionId), utils/envUtils (isEnvTruthy)

## Logic
Defines a QueryConfig type containing a session ID and a gates object with runtime feature flags (streaming tool execution, tool use summaries, ant mode, fast mode). The buildQueryConfig function snapshots these values once at query entry by reading the current session ID and evaluating env vars and Statsig feature gates. Feature gates using feature() are intentionally excluded to maintain tree-shaking boundaries.

## Exports
- `QueryConfig` - type containing sessionId and runtime gate flags
- `buildQueryConfig` - function that constructs a QueryConfig by snapshotting session ID and evaluating feature gates
