# Upgrade Command Definition (`index`)

## Purpose
Defines the `upgrade` command to upgrade to Max for higher rate limits and more Opus. Available only in claude-ai mode and for non-enterprise users.

## Imports
### Internal
- `Command` type from `.././commands`
- `getSubscriptionType` from `.././utils/auth`
- `isEnvTruthy` from `.././utils/envUtils`

## Logic
Creates a command object:
- `type`: `'local-jsx'`
- `name`: `'upgrade'`
- `description`: `'Upgrade to Max for higher rate limits and more Opus'`
- `availability`: `['claude-ai']`
- `isEnabled`: Returns false if `DISABLE_UPGRADE_COMMAND` is truthy or `getSubscriptionType() === 'enterprise'`.
- `load`: Dynamic import of `/upgrade` (or `.tsx`)

## Exports
- `upgrade` (Command) - The command definition (exported as default)