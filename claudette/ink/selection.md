## Purpose
Manages text selection state and operations for fullscreen terminal applications, supporting mouse and keyboard-based selection with drag-to-scroll, word/line selection, and clipboard integration.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: 
  - clamp function from layout/geometry.js
  - Screen, StylePool types from screen.js
  - CellWidth, cellAt, cellAtIndex, setCellStyleId from screen.js

## Logic
1. **Selection State**: Tracks text selection using anchor (start point) and focus (current point) model, with support for:
   - Character, word, and line-based selection modes
   - Drag-to-scroll handling with off-screen text accumulation
   - Virtual row tracking for seamless scrolling during selection
   - Modifier key state tracking (Alt key)

2. **Selection Lifecycle**:
   - startSelection(): Begins selection at specified coordinates
   - updateSelection(): Updates focus position during drag
   - finishSelection(): Ends selection while preserving highlight
   - clearSelection(): Resets selection state completely

3. **Selection Operations**:
   - selectWordAt(): Selects word under pointer using Unicode-aware boundaries
   - selectLineAt(): Selects entire line under pointer
   - extendSelection(): Extends existing word/line selection to new position
   - moveFocus(): Updates focus for keyboard-based selection (shift+arrow)
   - shiftSelection(): Shifts entire selection during keyboard paging
   - shiftAnchor(): Shifts anchor during drag-to-scroll
   - shiftSelectionForFollow(): Moves selection with auto-follow scrolling

4. **Selection Queries**:
   - hasSelection(): Checks if selection is active
   - selectionBounds(): Gets normalized start/end points of selection
   - isCellSelected(): Checks if specific coordinates are within selection
   - getSelectedText(): Extracts selected text, handling soft-wrapping and off-screen content

5. **Rendering Integration**:
   - applySelectionOverlay(): Applies selection styling to screen buffer
   - Uses style pooling for efficient background color application
   - Preserves foreground colors while applying selection background

6. **Unicode and Text Handling**:
   - Word detection uses Unicode-aware character classes
   - URL detection for fallback when OSC 8 hyperlinks unavailable
   - Proper handling of wide characters, surrogate pairs, and grapheme clusters
   - Soft-wrapping support for logical line selection vs visual layout

## Exports
- `SelectionState` - Type representing selection state with anchor, focus, dragging flag, and mode-specific data
- `createSelectionState()` - Function to initialize empty selection state
- `startSelection()`, `updateSelection()`, `finishSelection()`, `clearSelection()` - Selection lifecycle functions
- `selectWordAt()`, `selectLineAt()`, `extendSelection()`, `moveFocus()` - Selection modification functions
- `shiftSelection()`, `shiftAnchor()`, `shiftSelectionForFollow()` - Selection shifting functions for scrolling
- `hasSelection()`, `selectionBounds()`, `isCellSelected()` - Selection query functions
- `getSelectedText()` - Function to extract selected text content
- `applySelectionOverlay()` - Function to apply selection styling to screen buffer
- `FocusMove` - Type for semantic keyboard focus movements