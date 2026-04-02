# iTermBackup

## Purpose
Manages iTerm2 settings backup and restore during setup, tracking setup-in-progress state in global config and restoring from backup if needed.

## Imports
- **Stdlib**: fs/promises (copyFile, stat), os (homedir), path (join)
- **Internal**: ./config, ./log

## Logic
1. `markITerm2SetupComplete` - sets `iterm2SetupInProgress: false` in global config.
2. `getIterm2RecoveryInfo` (private) - reads `iterm2SetupInProgress` and `iterm2BackupPath` from global config.
3. `getITerm2PlistPath` (private) - returns path to iTerm2 preferences plist (`~/Library/Preferences/com.googlecode.iterm2.plist`).
4. `checkAndRestoreITerm2Backup` - if setup is in progress and a backup path exists, copies the backup plist over the current iTerm2 preferences. Returns `{ status: 'restored' }` on success, `{ status: 'no_backup' }` if no setup in progress or no backup found, `{ status: 'failed', backupPath }` if copy fails. Always marks setup complete after attempting.

## Exports
- `markITerm2SetupComplete` - marks iTerm2 setup as complete in global config
- `checkAndRestoreITerm2Backup` - restores iTerm2 settings from backup if setup was interrupted
- `RestoreResult` - discriminated union type: `{ status: 'restored' | 'no_backup' }` or `{ status: 'failed', backupPath }`
