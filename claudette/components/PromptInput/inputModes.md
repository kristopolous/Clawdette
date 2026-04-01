## Purpose
Provides functions for managing input mode characters that prefix the prompt input to switch between prompt and bash modes.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `hooks/useArrowKeyHistory`, `types/textInputTypes`

## Logic
1. Prepends the "!" character to input when mode is bash
2. Detects mode by checking if input starts with "!"
3. Strips the mode character from input to get the actual value
4. Checks if input consists solely of the mode character

## Exports
- `prependModeCharacterToInput` - adds the mode prefix character to input string
- `getModeFromInput` - returns "bash" if input starts with "!", otherwise "prompt"
- `getValueFromInput` - strips the mode prefix character from input
- `isInputModeCharacter` - returns true if input is exactly "!"
