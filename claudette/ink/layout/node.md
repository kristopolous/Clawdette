## Purpose
Defines the TypeScript types and constants for the layout engine adapter interface, providing a contract between the ink rendering system and layout engines like Yoga.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: None specified (self-contained module)

## Logic
1. Defines string literal enums as const objects for all layout properties:
   - LayoutEdge: values for padding/margin/border positioning (all, horizontal, vertical, left, right, top, bottom, start, end)
   - LayoutGutter: values for gap specification (all, column, row)
   - LayoutDisplay: values for display property (flex, none)
   - LayoutFlexDirection: values for flex direction (row, row-reverse, column, column-reverse)
   - LayoutAlign: values for alignment (auto, stretch, flex-start, center, flex-end)
   - LayoutJustify: values for justification (flex-start, center, flex-end, space-between, space-around, space-evenly)
   - LayoutWrap: values for flex wrap (nowrap, wrap, wrap-reverse)
   - LayoutPositionType: values for position type (relative, absolute)
   - LayoutOverflow: values for overflow handling (visible, hidden, scroll)
   - LayoutMeasureMode: values for measurement modes (undefined, exactly, at-most)
2. Defines TypeScript types from these enums using indexed access types
3. Defines LayoutMeasureFunc type that takes width and widthMode and returns width/height dimensions
4. Defines LayoutNode interface that specifies all methods a layout engine must implement:
   - Tree manipulation: insertChild, removeChild, getChildCount, getParent
   - Layout computation: calculateLayout, setMeasureFunc, unsetMeasureFunc, markDirty
   - Layout reading: getComputedLeft, getComputedTop, getComputedWidth, getComputedHeight, getComputedBorder, getComputedPadding
   - Style setters: all yoga properties (dimensions, flexbox, positioning, overflow, margins, padding, borders, gaps)
   - Lifecycle: free, freeRecursive

## Exports
- All layout property constants: LayoutEdge, LayoutGutter, LayoutDisplay, LayoutFlexDirection, LayoutAlign, LayoutJustify, LayoutWrap, LayoutPositionType, LayoutOverflow, LayoutMeasureMode
- All layout property types: LayoutEdge type, LayoutGutter type, LayoutDisplay type, LayoutFlexDirection type, LayoutAlign type, LayoutJustify type, LayoutWrap type, LayoutPositionType type, LayoutOverflow type, LayoutMeasureMode type
- `LayoutMeasureFunc` - Type definition for layout measurement functions
- `LayoutNode` - Interface defining the contract for layout engine implementations