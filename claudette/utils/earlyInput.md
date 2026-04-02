# earlyInput

## Purpose
Captures terminal input typed before the REPL is fully initialized. Users often type `claude` and immediately start typing their prompt, but those early keystrokes would otherwise be lost during startup. This module puts stdin into raw mode early, buffers characters, and provides them when the REPL is ready.

## Imports
- **Internal**: `./intl` (for `lastGrapheme` to handle backspace on multi-byte grapheme clusters)

## Logic
1. `startCapturingEarlyInput` - sets stdin to raw mode with 'readable' event listener, only if stdin is a TTY and not in print mode (-p/--print)
2. `processChunk` - processes each character: Ctrl+C exits with code 130, Ctrl+D stops capturing, backspace removes last grapheme cluster, escape sequences (arrow keys, function keys) are skipped, carriage returns converted to newlines, other control chars skipped except tab/newline
3. `stopCapturingEarlyInput` - removes readable listener, does NOT reset stdin raw mode (REPL's Ink App manages that)
4. `consumeEarlyInput` - stops capturing, returns trimmed buffer, clears it
5. `seedEarlyInput` - pre-fills the buffer with text (for pre-populating prompt input without auto-submit)

## Exports
- `startCapturingEarlyInput()` - sync, begins capturing stdin in raw mode (no-op if not TTY or in print mode)
- `stopCapturingEarlyInput()` - sync, stops capturing and removes listener
- `consumeEarlyInput()` - sync, returns captured input string and clears buffer
- `hasEarlyInput()` - sync, returns true if buffer has non-whitespace content
- `seedEarlyInput(text: string)` - sync, pre-fills the early input buffer
- `isCapturingEarlyInput()` - sync, returns true if currently capturing

## Source
`earlyInput`