## Purpose
Renders a status message with shimmer/glimmer effects, stall-based color shifts, and tool-use mode color interpolation.

## Imports
- **Stdlib**: None
- **External**: `react`
- **Internal**: `ink/stringWidth`, `ink` (Text, useTheme), `utils/intl` (getGraphemeSegmenter), `utils/theme` (getTheme, Theme), `types` (SpinnerMode), `utils` (interpolateColor, parseRGB, toRGBColor)

## Logic
1. Segments message into graphemes with width measurement for precise character positioning
2. When stalled intensity is positive, renders entire message in interpolated red color
3. In tool-use mode, interpolates between message color and shimmer color using flashOpacity
4. For normal mode, renders message with a shimmer effect that sweeps across characters based on glimmerIndex
5. Splits message into before/shimmer/after segments for per-character color application
6. Falls back to named colors when RGB parsing fails

## Exports
- `GlimmerMessage` - renders message text with shimmer sweep animation, stall-based red coloring, and tool-use mode color flashing
