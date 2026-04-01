## Purpose
Renders a single character that flashes between message color and shimmer color based on opacity.

## Imports
- **Stdlib**: None
- **External**: `react`
- **Internal**: `ink` (Text, useTheme), `utils/theme` (getTheme, Theme), `utils` (interpolateColor, parseRGB, toRGBColor)

## Logic
1. Retrieves theme and parses both message and shimmer colors to RGB
2. When both colors parse successfully, smoothly interpolates between them using flashOpacity
3. Falls back to binary switch: uses shimmerColor when opacity > 0.5, otherwise messageColor
4. Renders the character with the computed color

## Exports
- `FlashingChar` - renders a character with smooth or binary color flashing between message and shimmer colors
