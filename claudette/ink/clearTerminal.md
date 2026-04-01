## Purpose
Provides cross-platform terminal clearing with scrollback support, automatically detecting terminal capabilities to use the appropriate escape sequences.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: 
  - CURSOR_HOME, csi, ERASE_SCREEN, ERASE_SCROLLBACK from termio/csi.js

## Logic
1. **Helper Functions for Terminal Detection**:
   - isWindowsTerminal(): Detects Windows terminals with WT_SESSION environment variable
   - isMintty(): Detects mintty terminals (GitBash/MSYS2/Cygwin) via TERM_PROGRAM or MSYSTEM
   - isModernWindowsTerminal(): Combines checks for Windows Terminal, VS Code with ConPTY, and mintty

2. **getClearTerminalSequence() Function**:
   - Returns appropriate ANSI escape sequence to clear terminal including scrollback
   - Platform-specific logic:
     * Windows: 
       - Modern terminals: ERASE_SCREEN + ERASE_SCROLLBACK + CURSOR_HOME
       - Legacy console: ERASE_SCREEN + CURSOR_HOME_WINDOWS (HVP sequence)
     * Other platforms: ERASE_SCREEN + ERASE_SCROLLBACK + CURSOR_HOME

3. **clearTerminal Constant**:
   - Pre-computed clear terminal sequence from getClearTerminalSequence()
   - Ready-to-use string for clearing terminal with scrollback support

4. **Escape Sequences Used**:
   - ERASE_SCREEN: CSI 2 J (Erase in Display - entire screen)
   - ERASE_SCROLLBACK: CSI 3 J (Erase in Display - scrollback buffer)
   - CURSOR_HOME: CSI H (Cursor Position - home)
   - CURSOR_HOME_WINDOWS: CSI 0 f (Horizontal Vertical Position - legacy Windows)

## Exports
- `getClearTerminalSequence` - Function that returns the appropriate clear sequence for the current terminal
- `clearTerminal` - Constant string containing the terminal clear sequence (ready to use)