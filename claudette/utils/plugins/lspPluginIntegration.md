# lspPluginIntegration

## Purpose
Loads, resolves, and scopes LSP server configurations from plugins. Handles `.lsp.json` files, manifest declarations, environment variable substitution, and path traversal prevention.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: `zod/v4`
- **Internal**: `../../services/lsp/types`, `../../services/mcp/envExpansion`, `../../types/plugin`, `../debug`, `../errors`, `../log`, `../slowOperations`, `./pluginDirectories`, `./pluginOptionsStorage`, `./schemas`

## Logic
1. **loadPluginLspServers** — Checks two sources: `.lsp.json` file in plugin directory and `manifest.lspServers` field. Validates against `LspServerConfigSchema`. Collects errors without throwing.
2. **loadLspServersFromManifest** — Handles multiple manifest formats: string paths (validated against traversal), inline config objects, or arrays of either. Validates paths stay within plugin directory.
3. **resolvePluginLspEnvironment** — Substitutes `${CLAUDE_PLUGIN_ROOT}`, `${user_config.X}`, and general `${VAR}` in command, args, env, and workspaceFolder. Adds `CLAUDE_PLUGIN_ROOT` and `CLAUDE_PLUGIN_DATA` to env.
4. **addPluginScopeToLspServers** — Prefixes server names with `plugin:{name}:` and adds `scope: 'dynamic'` to avoid conflicts between plugins.
5. **getPluginLspServers** — Full pipeline: load servers, resolve env vars (with user config if `manifest.userConfig` exists), add plugin scope. Skips disabled plugins.
6. **extractLspServersFromPlugins** — Extracts LSP servers from all loaded plugins, caches results on plugin objects.

## Exports
- `loadPluginLspServers` - Load LSP server configs from a plugin's `.lsp.json` and manifest
- `resolvePluginLspEnvironment` - Resolve env vars and plugin variables in LSP server config
- `addPluginScopeToLspServers` - Add plugin prefix to server names to avoid conflicts
- `getPluginLspServers` - Get scoped, resolved LSP servers for a single plugin
- `extractLspServersFromPlugins` - Extract all LSP servers from an array of loaded plugins
