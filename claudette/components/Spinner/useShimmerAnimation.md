## Purpose
Provides a reusable hook for shimmer animation timing and glimmer index calculation.

## Imports
- **Stdlib**: None
- **External**: `react` (useMemo)
- **Internal**: `ink/stringWidth`, `ink` (DOMElement, useAnimationFrame), `types` (SpinnerMode)

## Logic
1. Sets glimmer speed based on mode (50ms for requesting, 200ms otherwise)
2. Subscribes to animation frame loop, unsubscribing when stalled to save resources
3. Memoizes message width calculation across animation frames
4. Returns glimmer index of -100 when stalled to hide shimmer effect
5. Calculates cycle position and length for forward or backward shimmer sweep depending on mode

## Exports
- `useShimmerAnimation` - hook that returns a viewport ref and glimmer index for shimmer animation, with automatic unsubscription when stalled
