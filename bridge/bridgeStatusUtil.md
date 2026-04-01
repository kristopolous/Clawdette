# bridgeStatusUtil

## Purpose
Provides utility functions for bridge status display, including URL building, text formatting, and shimmer animation calculations.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: product constants, ink stringWidth, format utils, grapheme segmenter

## Logic
1. Defines status state machine states: idle, attached, titled, reconnecting, failed
2. `buildBridgeConnectUrl` - constructs claude.ai/code bridge URL
3. `buildBridgeSessionUrl` - constructs session URL with bridge query param
4. `computeGlimmerIndex` - calculates reverse-sweep shimmer animation position
5. `computeShimmerSegments` - splits text into before/shimmer/after segments using grapheme-aware column positioning
6. Handles multi-byte characters, emoji, and CJK glyphs correctly via stringWidth

## Exports
- `StatusState` - type for bridge status states
- `TOOL_DISPLAY_EXPIRY_MS` - tool activity visibility duration (30s)
- `SHIMMER_INTERVAL_MS` - shimmer animation tick interval (150ms)
- `timestamp` - formats current time as HH:MM:SS
- `formatDuration`, `truncatePrompt` - re-exported format utils
- `abbreviateActivity` - truncates tool summary for trail display
- `buildBridgeConnectUrl` - builds environment connect URL
- `buildBridgeSessionUrl` - builds session URL with bridge param
- `computeGlimmerIndex` - calculates shimmer animation position
- `computeShimmerSegments` - splits text for shimmer rendering
