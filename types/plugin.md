# plugin

## Purpose
Provides type definitions for plugins including built-in plugins, repositories, and loaded plugins.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: LSP/MCP types, bundledSkills, plugin schemas, settings types

## Logic
1. `BuiltinPluginDefinition` - built-in plugin with name, description, version, skills, hooks, mcpServers
2. `isAvailable` - checks if plugin available based on system capabilities
3. `defaultEnabled` - default enabled state before user preference
4. `PluginRepository` - repository with url, branch, lastUpdated, commitSha
5. `PluginConfig` - configuration with repositories record
6. `LoadedPlugin` - loaded plugin with manifest, path, source, repository, enabled state
7. Plugin paths: commands, agents, skills, outputStyles (with additional paths from manifest)
8. `commandsMetadata` - metadata for named commands from object-mapping format
9. `hooksConfig`, `mcpServers`, `lspServers`, `settings` - plugin-provided configuration
10. `PluginComponent` - enum: commands, agents, skills, hooks, output-styles
11. Plugin error types as discriminated union

## Exports
- `PluginAuthor`, `PluginManifest`, `CommandMetadata` - re-exported schema types
- `BuiltinPluginDefinition` - built-in plugin definition type
- `PluginRepository` - repository configuration type
- `PluginConfig` - plugin configuration type
- `LoadedPlugin` - loaded plugin type
- `PluginComponent` - component enum type
