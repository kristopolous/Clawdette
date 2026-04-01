# Usage Command Definition (`index`)

## Purpose
Defines the `usage` command to show plan usage limits. Available only in claude-ai mode.

## Imports
### Internal
- `Command` type from `.././commands`

## Logic
Creates a command object:
- `type`: `'local-jsx'`
- `name`: `'usage'`
- `description`: `'Show plan usage limits'`
- `availability`: `['claude-ai']`
- `load`: Dynamic import of `/usage` (or `.tsx`)

## Exports
- Default command object (satisfies `Command`)