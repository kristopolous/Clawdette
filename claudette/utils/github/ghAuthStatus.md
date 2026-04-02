# ghAuthStatus

## Purpose
Detects GitHub CLI (`gh`) installation and authentication status. Used for telemetry. Uses `gh auth token` (local config/keyring read) instead of `gh auth status` (which makes a network request).

## Imports
- **External**: `execa`
- **Internal**: `../which` (`which`)

## Items

### GhAuthStatus
**Type**: Type alias
Union: `'authenticated' | 'not_authenticated' | 'not_installed'`

### getGhAuthStatus
**Type**: Async Function
First checks if `gh` is installed via `which()`. If not, returns `'not_installed'`. Then runs `gh auth token` with stdout/stderr ignored and 5s timeout. Exit code 0 → `'authenticated'`, otherwise `'not_authenticated'`.

## Exports
- `GhAuthStatus` — union type for auth status
- `getGhAuthStatus` — async function returning gh install + auth status

## Source
`ghAuthStatus`