# components/Spinner/index

## Purpose
Provides spinner component exports.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. Re-exports FlashingChar, GlimmerMessage, ShimmerChar, SpinnerGlyph
2. Re-exports SpinnerMode type from types
3. Re-exports useShimmerAnimation, useStalledAnimation hooks
4. Re-exports getDefaultCharacters, interpolateColor from utils
5. Teammate components are NOT exported here (use dynamic require for DCE)

## Exports
- `FlashingChar` - flashing character component
- `GlimmerMessage` - glimmer message component
- `ShimmerChar` - shimmer character component
- `SpinnerGlyph` - spinner glyph component
- `SpinnerMode` - spinner mode type
- `useShimmerAnimation` - shimmer animation hook
- `useStalledAnimation` - stalled animation hook
- `getDefaultCharacters` - gets default spinner characters
- `interpolateColor` - interpolates RGB colors
