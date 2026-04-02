# helpers

## Purpose
Parses and validates DXT/MCPB manifests from JSON objects, text, or binary data. Also generates consistent extension IDs from manifest author/name. The `@anthropic-ai/mcpb` import is lazy-loaded in `validateManifest` to avoid ~700KB of zod v3 bound closures at startup for sessions that never touch .dxt/.mcpb files.

## Imports
- **External**: `@anthropic-ai/mcpb` (lazy-imported at runtime)
- **Internal**: `../errors`, `../slowOperations`

## Logic
1. `validateManifest` - lazy-imports McpbManifestSchema from @anthropic-ai/mcpb, runs safeParse, formats field/form errors into a single error message
2. `parseAndValidateManifestFromText` - parses JSON text via jsonParse, then delegates to validateManifest
3. `parseAndValidateManifestFromBytes` - decodes Uint8Array via TextDecoder, delegates to parseAndValidateManifestFromText
4. `generateExtensionId` - sanitizes author name and extension name (lowercase, replace spaces with hyphens, strip non-alphanumeric except hyphens/underscores/dots, collapse multiple hyphens, trim edge hyphens), then formats as `[prefix.]author.name`

## Exports
- `validateManifest(manifestJson: unknown)` - async, validates a JSON object against McpbManifestSchema, throws on invalid
- `parseAndValidateManifestFromText(manifestText: string)` - async, parses JSON string then validates
- `parseAndValidateManifestFromBytes(manifestData: Uint8Array)` - async, decodes UTF-8 then validates
- `generateExtensionId(manifest: McpbManifest, prefix?)` - sync, generates sanitized extension ID with optional `local.unpacked` or `local.dxt` prefix

## Source
`helpers`