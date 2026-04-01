## Purpose
Streaming parser for ANSI escape sequences that produces semantic actions for text rendering, with style tracking and incremental processing capabilities.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: 
  - getGraphemeSegmenter from utils/intl.js
  - C0 from termio/ansi.js
  - CSI, CURSOR_STYLES, ERASE_DISPLAY, ERASE_LINE_REGION from termio/csi.js
  - DEC from termio/dec.js
  - parseEsc from termio/esc.js
  - parseOSC from termio/osc.js
  - applySGR from termio/sgr.js
  - createTokenizer, Token, Tokenizer from termio/tokenize.js
  - Action, Grapheme, TextStyle types from termio/types.js
  - defaultStyle from termio/types.js

## Logic
1. **Grapheme Utilities**: Helper functions for text processing:
   - isEmoji: Detects emoji code points
   - isEastAsianWide: Detects East Asian wide characters
   - hasMultipleCodepoints: Checks if string has multiple codepoints
   - graphemeWidth: Returns display width (1 or 2) of a grapheme
   - segmentGraphemes: Generator yielding graphemes with their display widths

2. **Sequence Parsing**: Functions to parse different escape sequence types:
   - parseCSIParams: Parses CSI parameters into number array
   - parseCSI: Parses Control Sequence Introducer sequences into semantic actions
   - identifySequence: Identifies escape sequence type from raw form

3. **Parser Class**: Main parser maintaining state for streaming processing:
   - Maintains tokenizer, current text style, and link state
   - reset(): Resets parser state
   - feed(input): Processes input string and returns resulting actions
   - processToken: Routes tokens to text or sequence processors
   - processText: Handles text characters, including BEL characters
   - processSequence: Dispatches to appropriate sequence parser based on type
     - CSI: Handles cursor movement, erase, scroll, modes, etc.
     - OSC: Handles Operating System Commands (like links)
     - ESC: Handles escape sequences
     - SS3: Treats as unknown for output parsing

4. **Action Production**: Produces structured semantic actions:
   - Text actions with graphemes and style
   - Cursor movement actions
   - Erase actions
   - Scroll actions
   - Mode changes (bracketed paste, mouse tracking, etc.)
   - Link start/end actions
   - Bell actions
   - Unknown sequence actions

## Exports
- `Parser` - Main parser class with feed() method for streaming ANSI sequence processing