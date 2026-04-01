## Purpose
Provides utility functions for displaying agent source names in the UI.

## Imports
- **External**: lodashes/capitalize
- **Internal**: src/utils/settings/constants (SettingSource type, getSettingSourceName)

## Logic
Maps agent source identifiers to human-readable display names, handling special cases like 'all', 'built-in', and 'plugin' sources, and capitalizing standard source names.

## Exports
- `getAgentSourceDisplayName` - converts a source identifier to a human-readable display string
