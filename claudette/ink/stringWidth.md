## Purpose
Calculates the display width of a string as it would appear in a terminal, correctly handling Unicode characters, ANSI escape codes, and emoji.

## Imports
- **Stdlib**: None specified
- **External**: emoji-regex, get-east-asian-width, strip-ansi packages
- **Internal**: getGraphemeSegmenter function from utils/intl module

## Logic
1. Uses Bun.stringWidth if available (fast path), otherwise falls back to JavaScript implementation
2. JavaScript implementation handles various cases:
   - Pure ASCII strings: counts printable characters
   - Strings with ANSI codes: strips ANSI before processing
   - Unicode strings: uses grapheme segmentation for proper character boundary detection
   - Emoji handling: detects emoji sequences and calculates their width (typically 2)
   - Special characters: handles zero-width characters, combining marks, variation selectors, etc.
   - East Asian width: uses get-east-asian-width with ambiguousAsWide: false for Western contexts
3. Includes detailed comments explaining edge cases and implementation choices
4. Optimizes for performance with fast paths and noting this is a hot path (~100k calls/frame)

## Exports
- `stringWidth` - Function that takes a string and returns its display width in terminal cells