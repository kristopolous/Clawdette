# plugins/pluginCliCommands

## Purpose
Provides CLI command wrappers for plugin operations with console output and process exit handling.

## Imports
- **Stdlib**: (none)
- **External**: `figures`
- **Internal**: errors, gracefulShutdown, log, managedPlugins, pluginIdentifier, schemas, process, telemetry/pluginTelemetry, analytics, pluginOperations

## Logic
1. `PluginCliCommand` - union: install, uninstall, enable, disable, disable-all, update
2. `handlePluginCommandError` - generic error handler emitting tengu_plugin_command_failed
3. Logs error, prints formatted message with figures.cross
4. Builds telemetry fields with plugin name and marketplace (PII-tagged)
5. Calls gracefulShutdown with exit code 1
6. `handlePluginCommandSuccess` - logs success event with telemetry
7. Re-exports VALID_INSTALLABLE_SCOPES and VALID_UPDATE_SCOPES
8. Wraps core operations: installPluginOp, uninstallPluginOp, enablePluginOp, disablePluginOp, disableAllPluginsOp, updatePluginOp
9. CLI-specific concerns: console output, process exit, telemetry events
10. Managed plugin names via getManagedPluginNames

## Exports
- `PluginCliCommand` - CLI command type union
- `handlePluginCommandError` - error handler with telemetry
- `handlePluginCommandSuccess` - success handler with telemetry
- `VALID_INSTALLABLE_SCOPES`, `VALID_UPDATE_SCOPES` - valid scope constants
- Plugin CLI command functions (install, uninstall, enable, disable, disable-all, update)
