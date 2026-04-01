## Purpose
Renders an animated asterisk character that sweeps through hues before settling on a grey color.

## Imports
- **Stdlib**: none
- **External**: react
- **Internal**: constants/figures, ink/Box, ink/Text, ink/useAnimationFrame, utils/settings/settings, Spinner/utils

## Logic
Uses a shared animation frame clock to sweep through hues over 1500ms, repeated twice. Captures start time on first frame to ensure consistent hue progression. Respects prefersReducedMotion by starting in the done state. Automatically stops when scrolled off-screen via viewport-pause support.

## Exports
- `AnimatedAsterisk` - renders a color-sweeping animated asterisk that settles to grey
