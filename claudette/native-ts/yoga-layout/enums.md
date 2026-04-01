## Purpose
Defines all Yoga layout enums ported from the upstream yoga-layout C++ engine, using const objects instead of TypeScript enums.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: None

## Logic
Exports const objects with numeric values matching the upstream yoga-layout YGEnums exactly, covering alignment, box sizing, dimensions, text direction, display modes, edges, errata flags, experimental features, flex direction, gutters, justification, measure modes, overflow, position types, units, and wrapping behavior. Each const object is paired with a type derived via keyof typeof for type-safe usage.

## Exports
- `Align` - alignment values including auto, flex-start, center, flex-end, stretch, baseline, space-between, space-around, space-evenly
- `BoxSizing` - box sizing modes (border-box, content-box)
- `Dimension` - dimension axes (width, height)
- `Direction` - text direction (inherit, LTR, RTL)
- `Display` - display modes (flex, none, contents)
- `Edge` - edge identifiers (left, top, right, bottom, start, end, horizontal, vertical, all)
- `Errata` - compatibility errata flags for legacy behavior
- `ExperimentalFeature` - experimental feature toggles
- `FlexDirection` - flex container direction (column, column-reverse, row, row-reverse)
- `Gutter` - gutter types (column, row, all)
- `Justify` - justify-content values (flex-start, center, flex-end, space-between, space-around, space-evenly)
- `MeasureMode` - measurement modes (undefined, exactly, at-most)
- `Overflow` - overflow handling (visible, hidden, scroll)
- `PositionType` - positioning types (static, relative, absolute)
- `Unit` - value units (undefined, point, percent, auto)
- `Wrap` - flex wrap behavior (no-wrap, wrap, wrap-reverse)
