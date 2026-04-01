## Purpose
Re-exports all public spinner components, types, hooks, and utilities for external use.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: `FlashingChar`, `GlimmerMessage`, `ShimmerChar`, `SpinnerGlyph`, `types` (SpinnerMode), `useShimmerAnimation`, `useStalledAnimation`, `utils` (getDefaultCharacters, interpolateColor)

## Logic
Re-exports spinner primitives while deliberately excluding teammate components to enable dead code elimination via dynamic require in parent components.

## Exports
- `FlashingChar` - character with flashing color animation
- `GlimmerMessage` - message text with shimmer/glimmer effect
- `ShimmerChar` - individual character with shimmer highlighting
- `SpinnerGlyph` - animated spinner character glyph
- `SpinnerMode` - type for spinner mode states
- `useShimmerAnimation` - hook for shimmer animation timing
- `useStalledAnimation` - hook for stall detection and red intensity
- `getDefaultCharacters` - returns terminal-appropriate spinner characters
- `interpolateColor` - interpolates between two RGB colors
