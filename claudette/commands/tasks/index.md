# Tasks Command Definition (`index`)

## Purpose
Defines the `tasks` command (alias: `bashes`) for listing and managing background tasks.

## Imports
### Internal
- `Command` type from `.././commands`

## Logic
Creates a command object:
- `type`: `'local-jsx'`
- `name`: `'tasks'`
- `aliases`: `['bashes']`
- `description`: `'List and manage background tasks'`
- `load`: Dynamic import of `/tasks` (or `.tsx`)

## Exports
- `tasks` (Command) - The command definition (exported as default)