## Purpose
Provides text wrapping and truncation utilities for terminal output, handling ANSI escape sequences and Unicode characters correctly.

## Imports
- **Stdlib**: None specified
- **External**: sliceAnsi from ./utils/sliceAnsi
- **Internal**: 
  - stringWidth from /stringWidth
  - Styles type from /styles
  - wrapAnsi from /wrapAnsi

## Logic
1. **Helper Functions**:
   - sliceFit(): Slices text while ensuring the result fits within specified width by retrying with tighter bounds if needed (handles wide characters)
   - truncate(): Truncates text to fit within column limits with three positioning options:
     * 'start': Shows end of text with ellipsis at beginning
     * 'middle': Shows start and end of text with ellipsis in middle
     * 'end': Shows beginning of text with ellipsis at end

2. **wrapText() Function**:
   - Main export that handles different wrap types:
     * 'wrap': Uses wrapAnsi with trim=false, hard=true (wraps at word boundaries)
     * 'wrap-trim': Uses wrapAnsi with trim=true, hard=true (wraps and trims trailing whitespace)
     * 'truncate-*': Delegates to truncate() function with appropriate position
     * Default: Returns text unchanged

3. **Constants**:
   - ELLIPSIS: '…' character used for truncation indicators

4. **Key Features**:
   - Properly handles ANSI escape sequences via sliceAnsi dependency
   - Correctly measures display width using stringWidth function (handles Unicode, emoji, etc.)
   - Supports different wrapping strategies via Styles['textWrap'] type

## Exports
- `wrapText` - Default function that wraps or truncates text based on wrapType parameter
- `sliceFit` - Helper function for safe text slicing (not exported)
- `truncate` - Helper function for text truncation (not exported)
- `ELLIPSES` - Constant for truncation indicator (not exported)