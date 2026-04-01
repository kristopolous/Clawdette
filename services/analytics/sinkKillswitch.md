# analytics/sinkKillswitch

## Purpose
Provides per-sink analytics killswitch via GrowthBook configuration.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: growthbook utils

## Logic
1. `SINK_KILLSWITCH_CONFIG_NAME` - tengu_frond_boric config name
2. `SinkName` - union: datadog | firstParty
3. Config shape: { datadog?: boolean, firstParty?: boolean }
4. `isSinkKilled` - checks if sink disabled via GrowthBook
5. Default {} (nothing killed); fail-open: missing/malformed config = sink stays on
6. Returns true only if config?.[sink] === true
7. Handles cached JSON null (falls back to {})
8. Must NOT be called from is1PEventLoggingEnabled (would recurse)
9. Call at per-event dispatch sites instead

## Exports
- `SinkName` - type for sink names
- `isSinkKilled` - checks if specific sink is disabled
