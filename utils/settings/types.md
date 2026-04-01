# types

## Purpose
Re-export hook schemas and types from centralized location for backward compatibility

## Imports
- **Stdlib**: bun:bundle, zod/v4
- **Internal**: ../../entrypoints/sandboxTypes.js, ../envUtils.js, ../lazySchema.js, ../plugins/schemas.js, ./constants.js, ./permissionValidation.js, ../../schemas/hooks.js, ../array.js

## Items

### isMcpServerNameEntry
**Type**: Function

### isMcpServerCommandEntry
**Type**: Function

### isMcpServerUrlEntry
**Type**: Function

### PluginHookMatcher
**Type**: Type alias

### SkillHookMatcher
**Type**: Type alias

### AllowedMcpServerEntry
**Type**: Type alias

### DeniedMcpServerEntry
**Type**: Type alias

### SettingsJson
**Type**: Type alias

### UserConfigValues
**Type**: Type alias

### PluginConfig
**Type**: Type alias

## Exports
- EnvironmentVariablesSchema
- PermissionsSchema
- ExtraKnownMarketplaceSchema
- AllowedMcpServerEntrySchema
- DeniedMcpServerEntrySchema
- CUSTOMIZATION_SURFACES
- SettingsSchema
- PluginHookMatcher
- SkillHookMatcher
- AllowedMcpServerEntry
- DeniedMcpServerEntry
- SettingsJson
- isMcpServerNameEntry
- isMcpServerCommandEntry
- isMcpServerUrlEntry
- UserConfigValues
- PluginConfig

## Source
`types.ts`