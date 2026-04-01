# utils/truncate

## Purpose
Provides width-aware truncation and wrapping utilities for terminal display.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ink stringWidth, intl

## Logic
1. `truncatePathMiddle` - truncates file path in middle to preserve directory context and filename
2. Width-aware: uses stringWidth() for correct CJK/emoji measurement
3. Example: "src/components/deeply/nested/folder/MyComponent.tsx" → "src/components/…/MyComponent.tsx"
4. Handles edge cases: very small maxLength, filename alone too long
5. `truncateToWidth` - truncates string to fit within max display width
6. Splits on grapheme boundaries to avoid breaking emoji or surrogate pairs
7. Appends '…' when truncation occurs
8. Uses getGraphemeSegmenter() for grapheme-safe segmentation
9. `truncateToWidthNoEllipsis` - truncates without adding ellipsis
10. `truncateStartToWidth` - truncates from start, keeping tail end
11. Prepends '…' when truncation occurs
12. Width-aware and grapheme-safe
13. `wrapText` - wraps text to specified width
14. `wrapWords` - wraps on word boundaries
15. `wrapGraphemes` - wraps on grapheme boundaries
16. `stringWidth` - gets string width in terminal columns
17. `getGraphemeSegmenter` - gets grapheme segmenter

## Exports
- `truncatePathMiddle` - truncates path in middle
- `truncateToWidth` - truncates to width with ellipsis
- `truncateToWidthNoEllipsis` - truncates to width without ellipsis
- `truncateStartToWidth` - truncates from start
- `wrapText` - wraps text
- `wrapWords` - wraps on word boundaries
- `wrapGraphemes` - wraps on grapheme boundaries
- `stringWidth` - gets string width
- `getGraphemeSegmenter` - gets grapheme segmenter
