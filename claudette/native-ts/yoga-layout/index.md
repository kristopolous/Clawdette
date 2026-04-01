## Purpose
Pure-TypeScript port of yoga-layout, Meta's flexbox layout engine, providing flexbox layout computation for terminal UI rendering.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: `./enums`

## Logic
Implements a single-pass flexbox algorithm covering flex-direction, flex-grow/shrink/basis, alignment, justify-content, margin/padding/border/gap, dimension constraints, relative/absolute positioning, measure functions for text nodes, flex-wrap with multi-line support, align-content, display:contents, and baseline alignment. Uses dirty-flag caching with generation-stamped multi-entry cache to skip unchanged subtrees, and resolves edges via a hoisted 4-edge resolution path for performance.

## Exports
- `Align` - alignment enum (flex-start, center, flex-end, stretch, baseline, etc.)
- `BoxSizing` - box sizing enum
- `Dimension` - dimension enum (width, height)
- `Direction` - text direction enum (inherit, LTR, RTL)
- `Display` - display enum (flex, none, contents)
- `Edge` - edge enum (left, top, right, bottom, start, end, horizontal, vertical, all)
- `Errata` - errata/compatibility flags enum
- `ExperimentalFeature` - experimental feature enum
- `FlexDirection` - flex direction enum (column, column-reverse, row, row-reverse)
- `Gutter` - gutter enum (column, row, all)
- `Justify` - justify-content enum
- `MeasureMode` - measure mode enum (undefined, exactly, at-most)
- `Overflow` - overflow enum (visible, hidden, scroll)
- `PositionType` - position type enum (static, relative, absolute)
- `Unit` - unit enum (undefined, point, percent, auto)
- `Wrap` - wrap enum (no-wrap, wrap, wrap-reverse)
- `Value` - type representing a styled value with unit and numeric value
- `MeasureFunction` - type for custom measure functions used by leaf nodes
- `Size` - type representing width and height dimensions
- `Config` - configuration object type for layout engine settings
- `Node` - class representing a layout node with style, tree management, dirty tracking, and layout computation via calculateLayout
- `getYogaCounters` - returns profiling counters for nodes visited, measure calls, cache hits, and live nodes
