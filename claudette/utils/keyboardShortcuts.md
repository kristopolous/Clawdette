# keyboardShortcuts

## Purpose
Maps macOS Option+key special characters to their keybinding equivalents, enabling Option+key shortcuts on terminals without "Option as Meta" enabled.

## Imports
- (none)

## Logic
1. `MACOS_OPTION_SPECIAL_CHARS` - constant mapping of special characters produced by macOS Option+key to keybinding strings: `†` → `alt+t` (thinking toggle), `π` → `alt+p` (model picker), `ø` → `alt+o` (fast mode).
2. `isMacosOptionChar` - type guard that checks if a character is one of the mapped Option special characters.

## Exports
- `MACOS_OPTION_SPECIAL_CHARS` - const record mapping macOS Option special chars to keybinding strings
- `isMacosOptionChar` - type guard checking if a char is a macOS Option special character
