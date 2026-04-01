## Purpose
Parses keystroke and chord strings into structured representations and converts them back to display strings.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `types` (Chord, KeybindingBlock, ParsedBinding, ParsedKeystroke)

## Logic
Splits input strings on `+` to extract modifiers and keys, normalizing modifier aliases (ctrl/control, alt/opt/option/meta, cmd/command/super/win) and special key names (escape, arrows, etc.). Converts parsed structures back to canonical or platform-appropriate display strings. Flattens keybinding blocks into a list of parsed bindings.

## Exports
- `parseKeystroke` - parses a keystroke string like "ctrl+shift+k" into a ParsedKeystroke
- `parseChord` - parses a chord string like "ctrl+k ctrl+s" into an array of ParsedKeystrokes
- `keystrokeToString` - converts a ParsedKeystroke to its canonical string representation
- `chordToString` - converts a Chord to its canonical string representation
- `keystrokeToDisplayString` - converts a ParsedKeystroke to a platform-appropriate display string
- `chordToDisplayString` - converts a Chord to a platform-appropriate display string
- `parseBindings` - parses keybinding blocks into a flat list of ParsedBindings
