# components/Spinner/utils

## Purpose
Provides spinner utility functions for color interpolation and character selection.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ink styles, Spinner types

## Logic
1. `getDefaultCharacters` - gets default spinner characters based on platform
2. Ghostty terminal: ['·', '✢', '✳', '✶', '✻', '*'] (uses * instead of ✽ for proper rendering)
3. macOS: ['·', '✢', '✳', '✶', '✻', '✽']
4. Other platforms: ['·', '✢', '*', '✶', '✻', '✽']
5. `interpolateColor` - interpolates between two RGB colors
6. Takes color1, color2, and t (0 to 1)
7. Returns interpolated RGB color
8. `toRGBColor` - converts RGB object to rgb() color string for Text component
9. `hueToRgb` - converts HSL hue (0-360) to RGB using voice-mode waveform parameters (s=0.7, l=0.6)
10. Implements HSL to RGB conversion algorithm
11. `RGB_CACHE` - cache for parsed RGB strings
12. `parseRGB` - parses rgb() color string to RGB object
13. Uses cache for performance
14. Returns null if parse fails
15. `RGBColorString`, `RGBColorType` - RGB color types

## Exports
- `getDefaultCharacters` - gets default spinner characters
- `interpolateColor` - interpolates RGB colors
- `toRGBColor` - converts RGB to string
- `hueToRgb` - converts hue to RGB
- `parseRGB` - parses RGB string
- `RGB_CACHE` - RGB cache
- `RGBColorString`, `RGBColorType` - RGB color types
