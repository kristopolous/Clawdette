## Purpose
Migrates the `replBridgeEnabled` config key to `remoteControlAtStartup` in global config.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `utils/config` (saveGlobalConfig)

## Logic
1. Reads global config and checks if the old `replBridgeEnabled` key exists
2. Returns early if old key is undefined or new key is already set (idempotent)
3. Copies the boolean value to `remoteControlAtStartup` and deletes the old key
4. Uses untyped cast to access the deprecated key no longer in the GlobalConfig type

## Exports
- `migrateReplBridgeEnabledToRemoteControlAtStartup` - Renames `replBridgeEnabled` to `remoteControlAtStartup` in global config
