## Purpose
Renders the ASCII art character in various poses using Unicode block elements.

## Imports
- **Stdlib**: none
- **External**: react, react/compiler-runtime
- **Internal**: ink/Box, ink/Text, utils/env

## Logic
Defines pose configurations as segment strings for different body parts (arms, eyes, body). Renders a 3-row ASCII art character with color styling for the body and background. Uses a simplified eye-only rendering for Apple Terminal which does not support full arm poses.

## Exports
- `ClawdPose` - type for available poses: default, arms-up, look-left, look-right
- `Clawd` - renders the ASCII art character in the specified pose
