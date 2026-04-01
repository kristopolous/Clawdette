## Purpose
Renders the welcome screen with ASCII art character and version information, with special handling for Apple Terminal.

## Imports
- **Stdlib**: String.repeat
- **External**: react, react/compiler-runtime
- **Internal**: ink/Box, ink/Text, ink/useTheme, utils/env

## Logic
Detects the terminal environment and theme to render the appropriate welcome layout. For Apple Terminal, uses a simplified bg-fill rendering approach. For light themes, renders ASCII art with lighter shade characters. For dark themes, renders the full ASCII art with stars and block characters. All variants include the welcome message and version number.

## Exports
- `WelcomeV2` - renders the full welcome screen with ASCII art based on terminal and theme
