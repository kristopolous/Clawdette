## Purpose
Renders a single feed section with a title, timestamped lines, optional footer, or custom content.

## Imports
- **Stdlib**: Math
- **External**: react, react/compiler-runtime
- **Internal**: ink/stringWidth, ink/Box, ink/Text, utils/format

## Logic
Calculates the maximum width needed for the feed by measuring the title, lines (including timestamps), footer, and custom content. Renders lines with aligned timestamps and truncated text, or falls back to an empty message or custom content when appropriate.

## Exports
- `FeedLine` - type representing a feed line with text and optional timestamp
- `FeedConfig` - type defining feed configuration with title, lines, footer, emptyMessage, and customContent
- `calculateFeedWidth` - computes the display width needed for a feed config
- `Feed` - renders a single feed section based on its config
