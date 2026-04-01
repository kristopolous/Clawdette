## Purpose
Renders the main animated spinner row with glyph, message, elapsed time, token count, and thinking status.

## Imports
- **Stdlib**: None
- **External**: `figures`, `react`
- **Internal**: `ink/stringWidth`, `ink` (Box, Text, useAnimationFrame), `tasks/InProcessTeammateTask/types`, `utils/format` (formatDuration, formatNumber), `utils/ink` (toInkColor), `utils/theme` (Theme), `design-system/Byline`, `GlimmerMessage`, `SpinnerGlyph`, `types` (SpinnerMode), `useStalledAnimation`, `utils` (interpolateColor, toRGBColor)

## Logic
1. Runs 50ms animation frame loop for all derived animation values
2. Calculates elapsed time with pause tracking and teammate-aware turn start anchoring
3. Derives stall detection, spinner frame, glimmer index, and flash opacity from animation clock
4. Implements smooth token counter animation with incremental catch-up
5. Progressively gates display of thinking text, timer, and token count based on available terminal width
6. Computes thinking shimmer color using shared animation clock instead of separate interval
7. Assembles status parts (suffix, timer, tokens, thinking) with conditional rendering
8. Renders spinner glyph, glimmer message, and status in a single animated row

## Exports
- `SpinnerAnimationRow` - the 50ms-animated portion of the spinner that owns the animation frame loop and renders glyph, message, and status indicators
- `SpinnerAnimationRowProps` - type defining all props for the animation row component
