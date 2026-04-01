## Purpose
Displays dynamic tips fetched from remote configuration at the top of the feed area.

## Imports
- **Stdlib**: none
- **External**: react
- **Internal**: ink/Box, ink/Text, services/analytics/growthbook, utils/config

## Logic
Fetches a tip from dynamic config with caching, compares it against the last shown tip to avoid repeats, saves the displayed tip to config, and renders it with appropriate color styling (warning, error, or dim).

## Exports
- `EmergencyTip` - renders a dynamic tip with color styling when a new tip is available
