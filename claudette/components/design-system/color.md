## Purpose
A curried theme-aware color function that resolves theme keys to raw color values before delegating to the ink renderer's colorize.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `ColorType`, `colorize`, `Color`, `getTheme`, `Theme`, `ThemeName`

## Logic
Returns a function that takes text and applies color via `colorize`. If the color is a raw value (rgb, hex, ansi256, ansi), it passes through directly. If it is a theme key, it resolves through `getTheme` first.

## Exports
- `color` - curried function that applies theme-aware coloring to a string
