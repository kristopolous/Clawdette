## Purpose
A collection of small utility functions for formatting and presenting agent-related metadata within the application's user interface.

## Imports
- **Stdlib**: None
- **External**: `lodash-es/capitalize`
- **Internal**: `utils/settings/constants`

## Logic
1. **Source Name Resolution**:
    - Maps internal agent source identifiers to localized, human-readable display names for use in headers, menus, and lists.
    - Specifically handles high-level source categories:
        - **"all"**: Displays as "Agents".
        - **"built-in"**: Displays as "Built-in agents".
        - **"plugin"**: Displays as "Plugin agents".
    - Automatically retrieves and capitalizes the names of standard configuration sources (e.g., "project", "user", "global") from the system's central settings logic.

## Exports
- `getAgentSourceDisplayName` - A function that returns a formatted string for an agent's storage or provision source.
