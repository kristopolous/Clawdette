## Purpose
Parses terminal keyboard input into structured key events, handling escape sequences, modifiers, mouse events, and terminal responses using a tokenizer-based approach.

## Imports
- **Stdlib**: Buffer from 'buffer'
- **External**: None specified
- **Internal**: 
  - PASTE_START, PASTE_END from /termio/csi
  - createTokenizer, Tokenizer from /termio/tokenize

## Logic
1. **Regular Expressions for Special Keys**:
   - META_KEY_CODE_RE: Matches ESC + alphanumeric (Option/Meta key combinations)
   - FN_KEY_RE: Matches function keys (ESC O/N/[/[[ sequences)
   - CSI_U_RE: Matches Kitty keyboard protocol (ESC [ code [;modifier] u)
   - MODIFY_OTHER_KEYS_RE: Matches xterm modifyOtherKeys (ESC [ 27 ; modifier ; keycode ~)
   - Terminal response patterns: DECRPM_RE, DA1_RE, DA2_RE, KITTY_FLAGS_RE, CURSOR_POSITION_RE, OSC_RESPONSE_RE, XTVERSION_RE, SGR_MOUSE_RE

2. **Key Parsing State**:
   - KeyParseState: Tracks mode (NORMAL/IN_PASTE), incomplete sequences, paste buffer, and tokenizer instance
   - INITIAL_STATE: Default state with empty values

3. **Input Processing**:
   - inputToString(): Converts Buffer/string input to string, handling special case for bytes >= 128 (adds ESC prefix)
   - parseMultipleKeypresses(): Main entry point that:
     * Gets/creates tokenizer (with x10Mouse option for stdin)
     * Tokenizes input into text and sequence tokens
     * Processes tokens based on current state (normal/paste mode)
     * Handles paste mode boundaries (PASTE_START/PASTE_END)
     * Routes sequences to appropriate parsers (terminal response, mouse event, keypress)
     * Handles orphaned SGR/X10 mouse tails by resynthesizing with ESC prefix
     * Builds and returns new state

4. **Special Sequence Handlers**:
   - createPasteKey(): Creates parsed key for pasted content
   - parseTerminalResponse(): Identifies and parses terminal responses (DECRPM, DA1, DA2, etc.)
   - splitNumericParams(): Helper to split semicolon-separated numeric parameters
   - parseMouseEvent(): Parses SGR mouse events (clicks/drags/releases)
   - parseKeypress(): Main keypress parser handling:
     * CSI u (Kitty keyboard protocol)
     * xterm modifyOtherKeys
     * SGR mouse wheel events
     * X10 mouse events (legacy)
     * Special control characters (Enter, Tab, Backspace, Escape, etc.)
     * Meta key combinations (ESC + letter)
     * Function key mappings (via keyName lookup table)
     * Navigation keys (Home, End, PageUp/Down with modifiers)
   - createNavKey(): Helper to create navigation key objects

5. **Key Mapping Tables**:
   - keyName: Maps terminal sequences to key names (F-keys, application keypad, modifiers)
   - nonAlphanumericKeys: List of special key names for filtering
   - isShiftKey()/isCtrlKey(): Helper functions to detect modifier keys from sequences

6. **Modifier Decoding**:
   - decodeModifier(): Converts XTerm-style modifier value to boolean flags (shift, meta/alt, ctrl, super/cmd)
   - keycodeToName(): Maps keycodes to names for Kitty keyboard protocol and modifyOtherKeys

7. **Output Types**:
   - ParsedKey: Standard keypress with modifiers and metadata
   - ParsedResponse: Terminal response sequences (not user input)
   - ParsedMouse: Mouse events with button/action/coordinates
   - ParsedInput: Union of all possible parser outputs

## Exports
- `parseMultipleKeypresses` - Main function: takes previous state and input, returns [parsedKeys, newState]
- `KeyParseState` - Type for parser state between calls
- `INITIAL_STATE` - Default initial parser state
- `ParsedKey` - Type for regular keypress events
- `ParsedResponse` - Type for terminal response sequences
- `ParsedMouse` - Type for mouse events
- `ParsedInput` - Union of all parser output types
- Supporting types: TerminalResponse, DECRPM_STATUS, etc.