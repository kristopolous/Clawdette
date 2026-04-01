## Purpose
Provides types, constants, and utility functions for working with ANSI Control Sequence Introducer (CSI) sequences, including parsing, generation, and semantic interpretation.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: ESC, ESC_TYPE, SEP from termio/ansi.js

## Logic
1. **Constants and Types**:
   - Defines CSI_PREFIX as ESC + '['
   - Defines CSI_RANGE object with parameter, intermediate, and final byte ranges
   - Provides helper functions to check byte types: isCSIParam, isCSIIntermediate, isCSIFinal
   - Defines csi() function to generate CSI sequences from arguments
   - Defines CSI object with all CSI command identifiers as numeric constants (cursor movement, erase, insert/delete, scroll, modes, SGR, etc.)
   - Defines ERASE_DISPLAY and ERASE_LINE_REGION arrays for erase command parameters
   - Defines CursorStyle type and CURSOR_STYLES array for cursor decoration styles

2. **Cursor Movement Generators**:
   - Functions for moving cursor in all directions (up, down, forward, back)
   - Functions for absolute positioning (cursorTo, CURSOR_LEFT, cursorPosition, CURSOR_HOME)
   - Function for relative movement (cursorMove) with x/y offsets

3. **Save/Restore Functions**:
   - CURSOR_SAVE and CURSOR_RESTORE constants for saving/restoring cursor position

4. **Erase Functions**:
   - Functions for erasing line portions (to end, to start, entire line)
   - Functions for erasing screen portions (to end, to start, entire screen)
   - Constant ERASE_SCROLLBACK for clearing scrollback buffer
   - eraseLines function for erasing multiple lines with cursor movement

5. **Scroll Functions**:
   - Functions for scrolling display up/down
   - Functions for setting and resetting scroll region

6. **Input Protocol Markers** (sent by terminal to application):
   - Bracketed paste markers (PASTE_START, PASTE_END)
   - Focus event markers (FOCUS_IN, FOCUS_OUT)
   - Kitty keyboard protocol enable/disable functions
   - Modify other keys enable/disable functions

## Exports
- All CSI-related constants and types: CSI_PREFIX, CSI_RANGE, CSI, ERASE_DISPLAY, ERASE_LINE_REGION, CursorStyle, CURSOR_STYLES
- Helper functions: isCSIParam, isCSIIntermediate, isCSIFinal, csi
- Cursor movement functions: cursorUp, cursorDown, cursorForward, cursorBack, cursorTo, CURSOR_LEFT, cursorPosition, CURSOR_HOME, cursorMove
- Save/restore functions: CURSOR_SAVE, CURSOR_RESTORE
- Erase functions: eraseToEndOfLine, eraseToStartOfLine, eraseLine, ERASE_LINE, eraseToEndOfScreen, eraseToStartOfScreen, eraseScreen, ERASE_SCREEN, ERASE_SCROLLBACK, eraseLines
- Scroll functions: scrollUp, scrollDown, setScrollRegion, RESET_SCROLL_REGION
- Input protocol markers: PASTE_START, PASTE_END, FOCUS_IN, FOCUS_OUT, ENABLE_KITTY_KEYBOARD, DISABLE_KITTY_KEYBOARD, ENABLE_MODIFY_OTHER_KEYS, DISABLE_MODIFY_OTHER_KEYS