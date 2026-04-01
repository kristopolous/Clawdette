## Purpose
Renders an animated spinner character glyph with color transitions for stall detection and reduced motion support.

## Imports
- **Stdlib**: None
- **External**: `react`
- **Internal**: `ink` (Box, Text, useTheme), `utils/theme` (getTheme, Theme), `utils` (getDefaultCharacters, interpolateColor, parseRGB, toRGBColor)

## Logic
1. Builds spinner frames from default characters in forward and reverse order
2. In reduced motion mode, shows a pulsing dot with 2-second cycle (1s visible, 1s dim)
3. When stalled intensity is positive, interpolates from base theme color to error red
4. Falls back to named color when RGB parsing fails
5. Renders normal spinner character with theme color when not stalled

## Exports
- `SpinnerGlyph` - renders a single animated spinner character with stall-based color shifting and reduced motion support
