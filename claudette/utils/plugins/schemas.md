# utils/plugins/schemas

## Purpose
Provides plugin schema definitions and validation utilities.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: schemas hooks, services mcp types, lazySchema

## Logic
1. `ALLOWED_OFFICIAL_MARKETPLACE_NAMES` - Set of reserved official marketplace names
2. Includes: claude-code-marketplace, claude-code-plugins, claude-plugins-official, anthropic-marketplace, etc.
3. First-layer defense against official marketplace impersonation
4. `NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES` - official marketplaces that don't auto-update by default
5. Includes: knowledge-work-plugins
6. `isMarketplaceAutoUpdate` - checks if auto-update enabled for marketplace
7. Uses stored value if set, otherwise defaults based on official status
8. `BLOCKED_OFFICIAL_NAME_PATTERN` - regex detecting impersonation attempts
9. Matches: official+anthropic/claude, anthropic/claude+official, anthropic/claude+marketplace/plugins
10. `NON_ASCII_PATTERN` - detects non-ASCII characters for homograph attack prevention
11. Marketplace names should only contain ASCII to prevent lookalike Unicode impersonation
12. `PluginManifest` - plugin manifest schema
13. `PluginScope` - plugin scope type (user, project, local, managed, flag)
14. `InstalledPlugin` - installed plugin schema
15. `InstalledPluginsFileSchemaV1` - V1 installed plugins file schema
16. `InstalledPluginsFileSchemaV2` - V2 installed plugins file schema
17. `PluginInstallationEntry` - plugin installation entry type
18. `KnownMarketplace` - known marketplace type
19. `MarketplaceSource` - marketplace source type

## Exports
- `ALLOWED_OFFICIAL_MARKETPLACE_NAMES` - allowed official names Set
- `NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES` - no auto-update names Set
- `isMarketplaceAutoUpdate` - checks auto-update status
- `BLOCKED_OFFICIAL_NAME_PATTERN` - blocked name pattern regex
- `NON_ASCII_PATTERN` - non-ASCII pattern regex
- `PluginManifest` - manifest schema
- `PluginScope` - scope type
- `InstalledPlugin` - installed plugin schema
- `InstalledPluginsFileSchemaV1` - V1 file schema
- `InstalledPluginsFileSchemaV2` - V2 file schema
- `PluginInstallationEntry` - installation entry type
- `KnownMarketplace` - marketplace type
- `MarketplaceSource` - source type
