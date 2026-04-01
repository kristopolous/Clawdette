## Purpose
Detects when token generation has stalled and calculates a smooth intensity value for visual feedback.

## Imports
- **Stdlib**: None
- **External**: `react` (useRef)
- **Internal**: None

## Logic
1. Tracks last token arrival time and response length to detect stalls
2. Resets stall timer when new tokens arrive (actual length change detection)
3. Sets timeSinceLastToken to zero when tools are actively running
4. Marks as stalled after 3 seconds without new tokens when no tools are active
5. Calculates intensity that fades from 0 to 1 over 2 seconds after stall begins
6. Smooths intensity transitions using incremental steps driven by animation frame ticks
7. Uses instant intensity changes when reduced motion is enabled

## Exports
- `useStalledAnimation` - hook that returns isStalled boolean and stalledIntensity (0-1) based on time since last token arrival, driven by parent animation clock
