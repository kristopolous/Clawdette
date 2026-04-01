## Purpose
Splits terminal input into tokens (text chunks and raw escape sequences) by identifying escape sequence boundaries, providing a foundation for both keyboard input parsing and ANSI sequence interpretation.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: 
  - C0, ESC_TYPE, isEscFinal from ./ansi.js
  - isCSIFinal, isCSIIntermediate, isCSIParam from ./csi.js

## Logic
1. **Token Types**: Defines two token types:
   - `{ type: 'text'; value: string }` - Regular text content
   - `{ type: 'sequence'; value: string }` - Raw escape sequences (including ESC introducer)

2. **Tokenizer State Machine**: Maintains state during streaming processing:
   - 'ground': Normal text processing
   - 'escape': After ESC character, awaiting sequence type
   - 'escapeIntermediate': After ESC + intermediate byte(s), awaiting final byte
   - 'csi': Processing Control Sequence Introducer (ESC [ ...)
   - 'ss3': Processing Single Shift Three (ESC O ...)
   - 'osc': Processing Operating System Command (ESC ] ...)
   - 'dcs': Processing Device Control String (ESC P ...)
   - 'apc': Processing Application Program Command (ESC _ ...)

3. **Core Functions**:
   - createTokenizer(options?): Factory function returning a tokenizer object with:
     * feed(input): Processes input string, returns tokens, updates internal state
     * flush(): Forces output of any buffered incomplete sequences
     * reset(): Resets tokenizer to initial state
     * buffer(): Returns any buffered incomplete sequence (for debugging)

4. **Special Handling**:
   - X10 mouse tracking: Special case for CSI M sequences when x10Mouse option enabled
   - Properly handles intermediate and final bytes according to ANSI standards
   - Buffers incomplete sequences across feed() calls for streaming processing
   - Manages double ESC sequences and invalid sequence recovery

5. **Token Emission**:
   - flushText(): Emits accumulated text as a text token
   - emitSequence(): Emits accumulated escape sequence as a sequence token and resets to ground state

## Exports
- `Token` - Union type for text or sequence tokens
- `State` - Type representing tokenizer internal states
- `Tokenizer` - Interface defining the tokenizer contract (feed, flush, reset, buffer)
- `TokenizerOptions` - Optional configuration (currently only x10Mouse)
- `createTokenizer` - Main factory function that returns a tokenizer instance