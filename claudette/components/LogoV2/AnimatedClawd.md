## Purpose
Adds click-triggered animations to the character, including crouch-jump and look-around sequences.

## Imports
- **Stdlib**: Array, Math
- **External**: react, react/compiler-runtime
- **Internal**: ink/Box, utils/settings/settings, Clawd

## Logic
Manages animation frame state with a timer-based sequence player. On click, randomly selects between a jump wave (crouch and spring up twice) or look-around (glance right then left) animation. Uses a fixed container height so layout never shifts. Respects the prefersReducedMotion setting.

## Exports
- `AnimatedClawd` - renders the character with click-triggered animation sequences
