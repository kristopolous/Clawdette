## Purpose
Provides constants and utility functions for DEC (Digital Equipment Corporation) private mode sequences, which are terminal-specific extensions to the ANSI standard using CSI ? N h/l format.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: csi function from ./csi.js

## Logic
1. **DEC Constants**: Defines an object with constants for common DEC private mode numbers:
   - CURSOR_VISIBLE: 25
   - ALT_SCREEN: 47
   - ALT_SCREEN_CLEAR: 1049
   - MOUSE_NORMAL: 1000
   - MOUSE_BUTTON: 1002
   - MOUSE_ANY: 1003
   - MOUSE_SGR: 1006
   - FOCUS_EVENTS: 1004
   - BRACKETED_PASTE: 2004
   - SYNCHRONIZED_UPDATE: 2026

2. **Mode Setting Functions**:
   - decset(mode): Generates CSI ? N h sequence to set a mode
   - decreset(mode): Generates CSI ? N l sequence to reset a mode

3. **Pre-generated Sequences**: Constants for commonly used mode combinations:
   - BSU: Set Synchronized Update
   - ESU: Reset Synchronized Update
   - EBP: Set Bracketed Paste
   - DBP: Reset Bracketed Paste
   - EFE: Set Focus Events
   - DFE: Reset Focus Events
   - SHOW_CURSOR: Show Cursor
   - HIDE_CURSOR: Hide Cursor
   - ENTER_ALT_SCREEN: Enter Alternate Screen
   - EXIT_ALT_SCREEN: Exit Alternate Screen
   - ENABLE_MOUSE_TRACKING: Combined mouse tracking (normal + button + any + sgr)
   - DISABLE_MOUSE_TRACKING: Combined mouse tracking disable

## Exports
- `DEC` - Object containing DEC private mode number constants
- `decset` - Function that returns CSI sequence to set a mode
- `decreset` - Function that returns CSI sequence to reset a mode
- All pre-generated mode sequences: BSU, ESU, EBP, DBP, EFE, DFE, SHOW_CURSOR, HIDE_CURSOR, ENTER_ALT_SCREEN, EXIT_ALT_SCREEN, ENABLE_MOUSE_TRACKING, DISABLE_MOUSE_TRACKING