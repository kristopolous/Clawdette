## Purpose
Provides color utilities for terminal text styling with chalk, including terminal-specific chalk level adjustments.

## Imports
- **External**: `chalk`
- **Internal**: `ink/styles`

## Logic
Boosts chalk level to 3 (truecolor) for xterm.js terminals (VS Code, Cursor) that support truecolor but don't set COLORTERM=truecolor. Clamps chalk level to 2 (256-color) when running inside tmux, since tmux's client-side emitter only re-emits truecolor if the outer terminal advertises Tc/RGB. The boost runs before the clamp so tmux inside VS Code still gets clamped. The `colorize` function handles four color formats: `ansi:` prefix for named ANSI colors (16 standard + 8 bright), `#hex` for hex colors, `ansi256(N)` for 256-color palette, and `rgb(r,g,b)` for RGB values. `applyTextStyles` applies structured text styles (inverse, strikethrough, underline, italic, bold, dim, color, backgroundColor) in reverse nesting order so background wraps outermost. `applyColor` is a shorthand for applying a foreground color.

## Exports
- `ColorType` - 'foreground' | 'background'
- `CHALK_BOOSTED_FOR_XTERMJS` - true if chalk was boosted for xterm.js
- `CHALK_CLAMPED_FOR_TMUX` - true if chalk was clamped for tmux
- `colorize` - applies a color string to text based on format detection
- `applyTextStyles` - applies TextStyles to a string using chalk
- `applyColor` - applies a foreground color to text
