# coreTypes

## Purpose
Re-exports generated SDK types and constants for SDK consumers and builders.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: sandboxTypes, coreTypes.generated, sdkUtilityTypes

## Logic
1. Re-exports sandbox types (SandboxFilesystemConfig, SandboxNetworkConfig, etc.)
2. Re-exports all generated types from coreTypesgenerated
3. Re-exports NonNullableUsage utility type
4. `HOOK_EVENTS` - const array of all hook event names (PreToolUse, PostToolUse, etc.)
5. `EXIT_REASONS` - const array of exit reason strings (clear, resume, logout, etc.)
6. Types generated from Zod schemas via scripts/generate-sdk-types
7. Schemas in coreSchemas are single source of truth but not public API

## Exports
- Sandbox config types (re-exported)
- All generated SDK types (re-exported)
- `NonNullableUsage` - utility type
- `HOOK_EVENTS` - array of hook event names
- `EXIT_REASONS` - array of exit reasons
