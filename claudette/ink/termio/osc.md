## Purpose
Provides types, constants, and utility functions for working with ANSI Operating System Command (OSC) sequences, including clipboard operations, terminal notifications, and hyperlinks.

## Imports
- **Stdlib**: Buffer from 'buffer'
- **External**: None specified
- **Internal**: 
  - env from '.././utils/env'
  - execFileNoThrow from '.././utils/execFileNoThrow'
  - BEL, ESC, ESC_TYPE, SEP from '/ansi'
  - Action, Color, TabStatusAction types from '/types'

## Logic
1. **OSC Infrastructure**:
   - Defines OSC_PREFIX as ESC + ']'
   - Defines ST (String Terminator) as ESC + '\'
   - Provides osc() function to generate OSC sequences with appropriate terminator (BEL or ST based on terminal type)
   - Implements wrapForMultiplexer() to tunnel escape sequences through tmux/GNU screen using DCS passthrough

2. **Clipboard Handling**:
   - Defines ClipboardPath type ('native' | 'tmux-buffer' | 'osc52')
   - Implements getClipboardPath() to determine optimal clipboard method based on environment
   - Provides setClipboard() function that writes text to clipboard using multiple strategies:
     * Native utilities (pbcopy/wl-copy/xclip/xsel/clip.exe) when not in SSH
     * tmux load-buffer when in tmux
     * OSC 52 escape sequence as fallback
   - Includes tmuxLoadBuffer(), tmuxPassthrough(), and copyNative() helper functions

3. **OSC Command Definitions**:
   - Defines OSC object with all OSC command numbers as constants:
     * Window/icon title commands (0-2)
     * Color setting commands (4, 10-12, 104, 110-112)
     * Current working directory (7)
     * Hyperlinks (8)
     * iTerm2 proprietary sequences (9)
     * Kitty notification protocol (99)
     * Clipboard (52)
     * Color reset commands (104, 110-112)
     * Semantic prompt (133)
     * Ghostty notifications (777)
     * Tab status extension (21337)

4. **OSC Parsing**:
   - Implements parseOSC() function to parse OSC content into semantic actions:
     * Title/icon commands
     * Hyperlink start/end with parameter parsing
     * Tab status parsing with escape handling
     * Unknown sequence fallback

5. **Color Parsing**:
   - Provides parseOscColor() function to parse XParseColor-style specs into RGB colors
   - Supports #RRGGBB and rgb:R/G/B formats

6. **Output Generators**:
   - link() function to start hyperlinks with auto-generated IDs
   - LINK_END constant to end hyperlinks
   - iTerm2-specific constants and functions:
     * ITERM2 object with NOTIFY, BADGE, PROGRESS subcommands
     * PROGRESS object with CLEAR, SET, ERROR, INDETERMINATE codes
     * CLEAR_ITERM2_PROGRESS constant
   - Terminal title clearing: CLEAR_TERMINAL_TITLE constant
   - Tab status functions:
     * supportsTabStatus() to check if tab status emission is enabled
     * tabStatus() to generate OSC 21337 tab-status sequences with proper escaping

## Exports
- Core OSC functionality: OSC_PREFIX, ST, osc(), wrapForMultiplexer()
- Clipboard handling: ClipboardPath type, getClipboardPath(), setClipboard(), tmuxLoadBuffer(), copyNative(), _resetLinuxCopyCache()
- OSC command definitions: OSC object with all command constants
- Parsing functions: parseOSC(), parseOscColor(), parseTabStatus(), splitTabStatusPairs()
- Output generators: link(), osc8Id(), LINK_END
- iTerm2-specific: ITERM2 object, PROGRESS object, CLEAR_ITERM2_PROGRESS
- Terminal title: CLEAR_TERMINAL_TITLE constant
- Tab status: supportsTabStatus(), tabStatus(), CLEAR_TAB_STATUS constant