## Purpose
Provides a configurable list of whimsical verbs displayed in loading spinners during processing.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `utils/settings/settings`

## Logic
Returns spinner verbs from user settings if configured, merging or replacing the default list based on the config mode; falls back to the built-in default list.

## Exports
- `getSpinnerVerbs` - returns the active spinner verb array, respecting user settings
- `SPINNER_VERBS` - default array of whimsical verbs used for loading messages
