## Purpose
Provides utility functions for prompt input mode detection, vim mode checking, newline instructions, and printable character validation.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `commands/terminalSetup/terminalSetup`, `ink`, `utils/config`, `utils/env`

## Logic
1. Checks vim mode by reading the editor mode from global config
2. Generates platform-appropriate newline instructions based on terminal type (Apple Terminal uses shift+enter, iTerm2/VSCode check for installed keybinding, others show backslash+return)
3. Determines if a keystroke is a non-space printable character by excluding control keys, navigation keys, and whitespace

## Exports
- `isVimModeEnabled` - returns true when global config editor mode is set to vim
- `getNewlineInstructions` - returns platform-specific instructions for inserting newlines
- `isNonSpacePrintable` - returns true when input is a printable character without leading whitespace
