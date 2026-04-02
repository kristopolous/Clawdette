# horizontalScroll

## Purpose
Calculates the visible window of items for horizontal scrollable UI components, ensuring the selected item is always visible using edge-based scrolling.

## Imports
- (none - pure module with no dependencies)

## Logic
1. If all items fit within available width, returns the full range with no arrows.
2. Builds a cumulative widths array for efficient range width calculations via `rangeWidth` helper.
3. `rangeWidth` subtracts 1 from the width when the range doesn't start at index 0 and firstItemHasSeparator is true (no leading separator on the first visible item).
4. `getEffectiveWidth` subtracts arrowWidth from available width for each side that will show a scroll arrow.
5. Edge-based scrolling strategy: starts from index 0, expands to fit as many items as possible. If the selected item is outside the visible range, scrolls so the selected item sits at the edge (right edge if selected is to the right, left edge if to the left), then expands in the opposite direction to fill remaining space.
6. Returns startIndex, endIndex, and boolean flags for showing left/right scroll arrows.

## Exports
- `HorizontalScrollWindow` - Type: `{ startIndex, endIndex, showLeftArrow, showRightArrow }`.
- `calculateHorizontalScrollWindow(itemWidths, availableWidth, arrowWidth, selectedIdx, firstItemHasSeparator?)` - Calculates the visible window of items ensuring the selected item is always visible. Uses edge-based scrolling (selected item positioned at edge, not centered).

## Source
`horizontalScroll`