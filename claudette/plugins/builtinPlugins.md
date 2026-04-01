## Purpose
Manages the registry of built-in plugins that ship with the CLI and can be enabled or disabled by users via the plugin UI.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `commands`, `skills/bundledSkills`, `types/plugin`, `utils/settings/settings`

## Logic
Maintains a Map of built-in plugin definitions and provides functions to register, query, and retrieve plugins. Determines enabled/disabled state based on user settings with plugin defaults as fallback, filters out unavailable plugins, and converts skill definitions into Command objects for the skill tool listing.

## Exports
- `BUILTIN_MARKETPLACE_NAME` - sentinel string identifying the builtin marketplace
- `registerBuiltinPlugin` - adds a plugin definition to the registry
- `isBuiltinPluginId` - checks if a plugin ID ends with @builtin suffix
- `getBuiltinPluginDefinition` - retrieves a specific plugin by name
- `getBuiltinPlugins` - returns enabled and disabled LoadedPlugin arrays based on user settings and availability
- `getBuiltinPluginSkillCommands` - returns Command objects from enabled built-in plugins only
- `clearBuiltinPlugins` - clears the registry for testing purposes
