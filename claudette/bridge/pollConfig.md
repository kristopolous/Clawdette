# pollConfig

## Purpose
Fetches and validates bridge poll interval configuration from GrowthBook with schema validation and fallback to defaults.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: GrowthBook feature flags, lazySchema, pollConfigDefaults

## Logic
1. Schema validates 8 poll interval fields with defense-in-depth floors
2. `zeroOrAtLeast100` refinement: at-capacity intervals must be 0 (disabled) or ≥100ms
3. Object-level refines require at least one at-capacity liveness mechanism (heartbeat OR poll)
4. Falls back to DEFAULT_POLL_CONFIG on any validation failure (rejects whole object)
5. 5-minute refresh window for cached GrowthBook values
6. Shared by bridgeMain (standalone) and replBridge (REPL) for fleet-wide tuning

## Exports
- `pollIntervalConfigSchema` - zod schema with validation rules
- `getPollIntervalConfig` - fetches validated config from GrowthBook
