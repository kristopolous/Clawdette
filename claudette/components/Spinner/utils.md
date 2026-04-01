## Purpose
Provides color interpolation utilities and terminal-specific spinner character selection.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: `ink/styles` (RGBColor), `types` (RGBColor)

## Logic
1. Returns different default character sets based on terminal type (Ghostty, darwin, other) to avoid rendering issues
2. Interpolates between two RGB colors using linear interpolation with parameter t
3. Converts RGB object to rgb() color string for Text components
4. Converts HSL hue to RGB using voice-mode waveform parameters (s=0.7, l=0.6)
5. Parses rgb() color strings with caching for performance

## Exports
- `getDefaultCharacters` - returns spinner character array optimized for the current terminal
- `interpolateColor` - linearly interpolates between two RGB colors given a 0-1 parameter
- `toRGBColor` - converts RGB object to rgb() string format
- `hueToRgb` - converts HSL hue value to RGB color
- `parseRGB` - parses rgb() string to RGB object with memoization cache
