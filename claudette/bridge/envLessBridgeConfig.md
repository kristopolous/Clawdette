# envLessBridgeConfig

## Purpose
Defines configuration schema and defaults for the env-less bridge (v2) path, including retry, timeout, heartbeat, and dedup settings.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: GrowthBook feature flags, lazySchema, semver utils, bridgeEnabled

## Logic
1. `EnvLessBridgeConfig` type defines 14 configuration fields for v2 bridge behavior
2. `DEFAULT_ENV_LESS_BRIDGE_CONFIG` provides safe defaults for all fields
3. Schema validates with floors/caps (rejects whole object on violation, falls back to DEFAULT)
4. Key configs: init_retry (3 attempts, 500ms base, 25% jitter), http_timeout (10s), heartbeat (20s with 10% jitter)
5. Token refresh buffer (5min) determines proactive JWT refresh timing
6. UUID dedup buffer (2000) for echo and re-delivery deduplication
7. Connect timeout (15s) for telemetry on silent connect failures
8. Min version floor and app upgrade message flag for rollout control

## Exports
- `EnvLessBridgeConfig` - configuration type with 14 fields
- `DEFAULT_ENV_LESS_BRIDGE_CONFIG` - default configuration values
- `envLessBridgeConfigSchema` - zod schema with validation rules
