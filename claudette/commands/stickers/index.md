# Stickers Command Definition (`index`)

## Purpose
Defines the `stickers` command for ordering Claudette stickers.

## Imports
### Internal
- `Command` type from `.././commands`

## Logic
Creates a command object:
- `type`: `'local'` (non-JSX, returns text result)
- `name`: `'stickers'`
- `description`: `'Order Claudette stickers'`
- `supportsNonInteractive`: `false` (requires interactive environment to open browser)
- `load`: Dynamic import of `/stickers` (or `.ts`)

## Exports
- `stickers` (Command) - The command definition (exported as default)