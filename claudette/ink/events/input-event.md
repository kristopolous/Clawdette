# ink/events/input-event

## Purpose
Provides InputEvent class and key parsing utilities for keyboard input.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ink parse-keypress, events event

## Logic
1. `Key` - { upArrow, downArrow, leftArrow, rightArrow, pageDown, pageUp, wheelUp, wheelDown, home, end, return, escape, ctrl, shift, fn, tab, backspace, delete, meta, super }
2. `parseKey` - parses ParsedKey to [Key, string] tuple
3. Maps keypress.name to arrow keys, page keys, wheel, home, end, return, escape
4. Handles fn, ctrl, shift, tab, backspace, delete from keypress
5. meta = keypress.meta || keypress.name === 'escape' || keypress.option
6. super = keypress.super (Cmd on macOS / Win key)
7. input = keypress.ctrl ? keypress.name : keypress.sequence
8. Handles undefined input case (defaults to '')
9. Converts ctrl+space from 'space' to ' ' for consistency
10. Suppresses unrecognized escape sequences parsed as function keys
11. `InputEvent` - extends TerminalEvent
12. `key` - literal character for printable keys, multi-char name for special keys
13. Idiomatic printable-char check: e.key.length === 1
14. `ctrl`, `shift`, `meta`, `superKey`, `fn` - modifier flags
15. Constructor takes ParsedKey
16. Calls super with 'keydown', bubbles: true, cancelable: true
17. `keyFromParsed` - gets key string from parsed key
18. Ctrl combos: returns name (browsers report e.key === 'c' with e.ctrlKey === true)
19. Single printable char: returns literal char (browsers report e.key === '3')
20. Special keys: returns name or sequence (browsers report e.key === 'ArrowDown')
21. `ParsedKey` - parsed key type
22. `TerminalEvent` - terminal event base class

## Exports
- `Key` - key type
- `parseKey` - parses key
- `InputEvent` - input event class
