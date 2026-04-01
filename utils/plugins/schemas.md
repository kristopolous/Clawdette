# schemas

## Purpose
If it's in the allowed list, it's not blocked

## Imports
- **Stdlib**: zod/v4
- **Internal**: ../../schemas/hooks.js, ../../services/mcp/types.js, ../lazySchema.js

## Items

### isMarketplaceAutoUpdate
**Type**: Function

### isBlockedOfficialName
**Type**: Function

### validateOfficialNameSource
**Type**: Function

### isLocalPluginSource
**Type**: Function

### isLocalMarketplaceSource
**Type**: Function

### CommandMetadata
**Type**: Type alias

### MarketplaceSource
**Type**: Type alias

### PluginAuthor
**Type**: Type alias

### PluginSource
**Type**: Type alias

### PluginManifest
**Type**: Type alias

### PluginManifestChannel
**Type**: Type alias

### PluginMarketplace
**Type**: Type alias

### PluginMarketplaceEntry
**Type**: Type alias

### PluginId
**Type**: Type alias

### InstalledPlugin
**Type**: Type alias

### InstalledPluginsFileV1
**Type**: Type alias

### InstalledPluginsFileV2
**Type**: Type alias

### PluginScope
**Type**: Type alias

### PluginInstallationEntry
**Type**: Type alias

### KnownMarketplace
**Type**: Type alias

### KnownMarketplacesFile
**Type**: Type alias

## Exports
- ALLOWED_OFFICIAL_MARKETPLACE_NAMES
- isMarketplaceAutoUpdate
- BLOCKED_OFFICIAL_NAME_PATTERN
- isBlockedOfficialName
- OFFICIAL_GITHUB_ORG
- validateOfficialNameSource
- PluginAuthorSchema
- PluginHooksSchema
- CommandMetadataSchema
- LspServerConfigSchema
- PluginManifestSchema
- MarketplaceSourceSchema
- gitSha
- PluginSourceSchema
- isLocalPluginSource
- isLocalMarketplaceSource
- PluginMarketplaceEntrySchema
- PluginMarketplaceSchema
- PluginIdSchema
- DependencyRefSchema
- SettingsPluginEntrySchema
- InstalledPluginSchema
- InstalledPluginsFileSchemaV1
- PluginScopeSchema
- PluginInstallationEntrySchema
- InstalledPluginsFileSchemaV2
- InstalledPluginsFileSchema
- KnownMarketplaceSchema
- KnownMarketplacesFileSchema
- CommandMetadata
- MarketplaceSource
- PluginAuthor
- PluginSource
- PluginManifest
- PluginManifestChannel
- PluginMarketplace
- PluginMarketplaceEntry
- PluginId
- InstalledPlugin
- InstalledPluginsFileV1
- InstalledPluginsFileV2
- PluginScope
- PluginInstallationEntry
- KnownMarketplace
- KnownMarketplacesFile

## Source
`schemas.ts`