# coreSchemas

## Purpose
Zod schemas for serializable SDK data types, serving as single source of truth for type generation.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: lazySchema utils

## Logic
1. `ModelUsageSchema` - tracks input/output tokens, cache tokens, web searches, cost, context window
2. `OutputFormatSchema` - JSON schema output format with type and schema fields
3. `ApiKeySourceSchema` - enum: user, project, org, temporary, oauth
4. `ConfigScopeSchema` - enum: local, user, project
5. `SdkBetaSchema` - literal: context-1m-2025-08-07
6. `ThinkingAdaptiveSchema` - adaptive thinking type (Opus 4.6+)
7. `ThinkingEnabledSchema` - explicitly enabled thinking with tokens budget
8. Types generated via scripts/generate-sdk-types
9. lazySchema prevents circular dependency issues

## Exports
- `ModelUsageSchema` - model usage tracking schema
- `OutputFormatSchema` - output format schema
- `ApiKeySourceSchema` - API key source enum schema
- `ConfigScopeSchema` - config scope enum schema
- `SdkBetaSchema` - SDK beta feature schema
- `ThinkingAdaptiveSchema` - adaptive thinking schema
- `ThinkingEnabledSchema` - enabled thinking schema
- (Many more SDK data type schemas)
