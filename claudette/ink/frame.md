## Purpose
Defines the Frame type and related utilities for managing the ink rendering system's frame lifecycle, including screen state, viewport dimensions, cursor position, and frame timing information.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: 
  - Cursor type fromcursor
  - Size type fromlayout/geometry
  - ScrollHint type from render-node-tooutput
  - CharPool, createScreen, HyperlinkPool, Screen, StylePool types fromscreen

## Logic
1. **Frame Type**: Represents a single frame of ink output containing:
   - screen: The current screen buffer state
   - viewport: Dimensions of the terminal viewport
   - cursor: Current cursor position and visibility
   - scrollHint: Optimization hint for DECSTBM scrolling (alt-screen only)
   - scrollDrainPending: Flag indicating if ScrollBox has remaining pending scroll delta

2. **emptyFrame() Function**: Creates an initial empty frame with:
   - Empty screen buffer at position (0,0)
   - Viewport sized to specified rows and columns
   - Cursor at position (0,0) with visibility true

3. **FlickerReason Type**: Union type representing reasons for screen flickers:
   - 'resize': Terminal dimensions changed
   - 'offscreen': Content exceeds terminal boundaries
   - 'clear': Explicit clear requested

4. **FrameEvent Type**: Detailed timing information for a frame, including:
   - durationMs: Total frame duration
   - phases: Optional breakdown of time spent in different stages:
     * renderer: DOM → yoga layout → screen buffer
     * diff: Screen diff → Patch[] generation
     * optimize: Patch merge/dedupe
     * write: Serialize patches → ANSI → stdout
     * patches: Pre-optimize patch count
     * yoga: yoga calculateLayout() time
     * commit: React reconcile time
     * yogaVisited: layoutNode() calls this frame
     * yogaMeasured: measureFunc (text wrap/width) calls
     * yogaCacheHits: early returns via _hasL single-slot cache
     * yogaLive: Total yoga Node instances alive
   - flickers: Array of flicker events with desired/available heights and reason

5. **Patch Type**: Represents a single output operation:
   - stdout: Raw string to write
   - clear: Number of lines to clear
   - clearTerminal: Clear terminal with reason and optional debug info
   - cursorHide/show: Hide or show cursor
   - cursorMove/to: Move cursor relatively or absolutely
   - carriageReturn: Move cursor to column 0
   - hyperlink: URI for hyperlink start
   - styleStr: Pre-serialized style transition string

6. **Diff Type**: Alias for Patch[] representing a set of output operations.

7. **shouldClearScreen() Function**: Determines if screen should be cleared based on:
   - Viewport height/width changes → returns 'resize'
   - Current or previous frame screen height >= viewport height → returns 'offscreen'
   - Otherwise returns undefined (no clear needed)

## Exports
- `Frame` - Type representing a frame of ink output
- `emptyFrame` - Function to create an initial empty frame
- `FlickerReason` - Union type for screen flicker reasons
- `FrameEvent` - Type for detailed frame timing information
- `Patch` - Union type representing a single output operation
- `Diff` - Alias for Patch[]
- `shouldClearScreen` - Function to determine if screen should be cleared and why