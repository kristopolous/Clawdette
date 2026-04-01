## Purpose
Migrates MCP server approval fields from project config to local settings for better management and consistency.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `services/analytics` (logEvent), `utils/config` (getCurrentProjectConfig, saveCurrentProjectConfig), `utils/log` (logError), `utils/settings/settings` (getSettingsForSource, updateSettingsForSource)

## Logic
1. Checks if any MCP-related fields exist in project config (`enableAllProjectMcpServers`, `enabledMcpjsonServers`, `disabledMcpjsonServers`)
2. Returns early if no fields need migration
3. For each field, checks if it has already been migrated to local settings
4. Merges server lists using Set to avoid duplicates when migrating enabled/disabled servers
5. Updates local settings with migrated values and removes fields from project config
6. Wraps operations in try/catch, logging success or error analytics events

## Exports
- `migrateEnableAllProjectMcpServersToSettings` - Moves MCP server approval fields from project config to local settings
