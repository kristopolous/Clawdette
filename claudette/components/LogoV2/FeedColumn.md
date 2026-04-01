## Purpose
Renders a vertical column of feed items separated by dividers, calculating optimal width from all feed configs.

## Imports
- **Stdlib**: Math
- **External**: react, react/compiler-runtime
- **Internal**: ink/Box, design-system/Divider, Feed

## Logic
Calculates the maximum width needed across all feeds, constrains it to maxWidth, then renders each feed vertically with a divider between them.

## Exports
- `FeedColumn` - renders multiple feeds in a column with dividers between them
