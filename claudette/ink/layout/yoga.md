## Purpose
Adapts the Yoga layout engine to the local LayoutNode interface, providing a bridge between Yoga's functionality and the ink rendering system.

## Imports
- **Stdlib**: None specified
- **External**: Yoga library types and functions from 'src/native-ts/yoga-layout/index.js'
- **Internal**: Layout types from local node.js module

## Logic
1. Defines mapping tables to convert between local Layout types (LayoutEdge, LayoutGutter) and Yoga's internal types
2. Implements YogaLayoutNode class that wraps a Yoga node and adapts it to the LayoutNode interface:
   - Tree methods: insertChild, removeChild, getChildCount, getParent
   - Layout methods: calculateLayout, setMeasureFunc, unsetMeasureFunc, markDirty
   - Computed layout accessors: getComputedLeft, getComputedTop, getComputedWidth, getComputedHeight, getComputedBorder, getComputedPadding
   - Style setters for all Yoga properties: dimensions, flexbox, positioning, overflow, margins, padding, borders, gaps
   - Lifecycle methods: free, freeRecursive
3. Exports createYogaLayoutNode function that creates a YogaLayoutNode instance from Yoga.Node.create()

## Exports
- `YogaLayoutNode` - Class that adapts Yoga node to LayoutNode interface
- `createYogaLayoutNode` - Function that creates and returns a new YogaLayoutNode instance