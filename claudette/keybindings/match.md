## Purpose
Matches incoming Ink key events against parsed keybinding chords to determine if a keystroke or binding was triggered.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `ink.js` (Key type), `types.js` (ParsedBinding, ParsedKeystroke)

## Logic
Extracts modifier flags (ctrl, shift, meta/super) and normalized key names from Ink's Key object, then compares them against a target ParsedKeystroke. Handles terminal quirks such as Ink setting meta=true on escape, and treats alt/meta as equivalent since legacy terminals cannot distinguish them. Only supports single-keystroke bindings in the current phase.

## Exports
- `getKeyName` - maps Ink Key boolean flags and input string to a normalized key name
- `matchesKeystroke` - checks if a single ParsedKeystroke matches the given Ink input and Key
- `matchesBinding` - checks if Ink input matches a parsed binding's first keystroke
