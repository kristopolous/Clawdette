# ink/events/keyboard-event

## Purpose
Provides KeyboardEvent class for keyboard input through DOM tree.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ink parse-keypress, events terminal-event

## Logic
1. `KeyboardEvent` - extends TerminalEvent
2. Follows browser KeyboardEvent semantics
3. `key` is literal character for printable keys ('a', '3', ' ', '/')
4. `key` is multi-char name for special keys ('down', 'return', 'escape', 'f1')
5. Idiomatic printable-char check: e.key.length === 1
6. `ctrl`, `shift`, `meta`, `superKey`, `fn` - modifier flags
7. Constructor takes ParsedKey
8. Calls super with 'keydown', bubbles: true, cancelable: true
9. key = keyFromParsed(parsedKey)
10. Copies ctrl, shift, meta, super, fn from parsedKey
11. meta = parsedKey.meta || parsedKey.option
12. `keyFromParsed` - gets key string from parsed key
13. seq = parsed.sequence ?? '', name = parsed.name ?? ''
14. Ctrl combos: returns name (sequence is control byte, browsers report e.key === 'c')
15. Single printable char (space through ~, plus ASCII): returns literal char
16. Checks code >= 0x20 && code !== 0x7f
17. Special keys (arrows, F-keys, return, tab, escape): returns name or sequence
18. Sequence is escape sequence or control byte, browsers report e.key === 'ArrowDown'
19. `ParsedKey` - parsed key type
20. `TerminalEvent` - terminal event base class

## Exports
- `KeyboardEvent` - keyboard event class
