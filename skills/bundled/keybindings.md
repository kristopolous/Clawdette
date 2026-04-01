# keybindings

## Purpose
Implements the /keybindings bundled skill that displays all available keyboard shortcuts.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: keybindings (defaultBindings, loadUserBindings, reservedShortcuts, schema), JSON utils, bundledSkills

## Logic
1. `generateContextsTable` - builds markdown table of all keybinding contexts
2. `generateActionsTable` - builds markdown table of all actions with default bindings
3. `inferContextFromAction` - infers context from action prefix when not in DEFAULT_BINDINGS
4. Uses markdownTable helper for consistent formatting
5. Shows action, default key(s), and context columns
6. Respects keybinding customization enabled check
7. Documents reserved shortcuts (MACOS_RESERVED, NON_REBINDABLE, TERMINAL_RESERVED)

## Exports
- `registerKeybindingsSkill` - function that registers the /keybindings skill
- `generateContextsTable` - builds contexts markdown table
- `generateActionsTable` - builds actions markdown table
