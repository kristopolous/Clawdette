## Purpose
Handles truncation of overly long pasted text input by replacing the middle portion with a reference placeholder.

## Imports
- **Stdlib**: `Math`
- **External**: none
- **Internal**: `history`, `utils/config`

## Logic
1. Checks if input text exceeds a 10,000 character threshold
2. If under threshold, returns text unchanged
3. If over threshold, keeps the first and last 500 characters
4. Extracts the middle portion and calculates its line count
5. Creates a placeholder reference in the format `[...Truncated text #N +X lines...]`
6. Combines start text, placeholder, and end text into the truncated result
7. Stores the truncated middle content in pastedContents for later retrieval
8. Generates unique paste IDs by finding the max existing ID and incrementing

## Exports
- `maybeTruncateMessageForInput` - truncates text over 10,000 characters and returns truncated text with placeholder
- `maybeTruncateInput` - wrapper that applies truncation and updates pastedContents with the truncated middle portion
