## Purpose
Handles parsing of simple escape sequences (ESC + one or two characters) into semantic actions for terminal processing.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: Action type from ./types.js

## Logic
1. **parseEsc() Function**:
   - Takes characters after ESC (not including ESC itself)
   - Returns null for empty input
   - Handles specific escape sequences:
     * 'c' - Full reset (RIS): Returns { type: 'reset' }
     * '7' - Cursor save (DECSC): Returns cursor save action
     * '8' - Cursor restore (DECRC): Returns cursor restore action
     * 'D' - Index - move cursor down (IND): Returns cursor move down by 1
     * 'M' - Reverse index - move cursor up (RI): Returns cursor move up by 1
     * 'E' - Next line (NEL): Returns cursor next line by 1
     * 'H' - Horizontal tab set (HTS): Returns null (not commonly needed)
     * '(' or ')' followed by another char - Charset selection: Returns null (silently ignore)
   - For all other cases: Returns unknown action with the full sequence

2. **Design Notes**:
   - Focuses on simple ESC sequences that don't require parameter parsing
   - More complex sequences (CSI, OSC) are handled by specialized parsers
   - Charset selection sequences are intentionally ignored as they're not needed for ink's functionality
   - Unknown sequences are returned as-is for potential handling upstream

## Exports
- `parseEsc` - Function that parses simple ESC sequences into semantic actions or returns null/unknown