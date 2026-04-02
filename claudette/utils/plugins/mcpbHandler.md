# mcpbHandler

## Purpose
Handles loading, extracting, and caching MCPB (MCP Bundle) files — ZIP archives containing MCP server configurations with DXT manifests. Supports user configuration (sensitive/non-sensitive split), content-hash-based caching, and change detection.

## Imports
- **Stdlib**: `@anthropic-ai/mcpb`, `axios`, `crypto`, `fs/promises`, `path`
- **Internal**: `../../services/mcp/types.js`, `../debug.js`, `../dxt/helpers.js`, `../dxt/zip.js`, `../errors.js`, `../fsOperations.js`, `../log.js`, `../secureStorage/index.js`, `../settings/settings.js`, `../slowOperations.js`, `../systemDirectories.js`, `./fetchTelemetry.js`

## Logic
1. **MCPB detection**: `isMcpbSource()` checks if a source ends with `.mcpb` or `.dxt`.
2. **Caching**: Files are cached in `.mcpb-cache/` directory with content-hash-based subdirectories. Metadata (source, hash, extracted path, timestamps) stored in `{sourceHash}.metadata.json`. Change detection checks mtime for local files.
3. **User config split**: `saveMcpServerUserConfig()` splits values by `schema[key].sensitive` — sensitive values go to secureStorage (keychain), non-sensitive to settings.json. Scrubs stale entries in both stores on each write.
4. **Download & extraction**: Downloads via axios with progress callbacks and fetch telemetry. Extracts ZIP preserving file modes (exec bit for native binaries). Handles both text and binary files.
5. **Config validation**: `validateUserConfig()` checks required fields, type correctness, number ranges, and string array constraints against the DXT user_config schema.
6. **Load flow**: `loadMcpbFile()` checks cache → if valid, loads from cache; otherwise downloads/loads, extracts, validates manifest, checks for user_config requirement, and either returns config or `needs-config` status.

## Exports
- `UserConfigValues` - type alias for user configuration values (string, number, boolean, or string array)
- `UserConfigSchema` - type alias for user configuration schema from DXT manifest
- `McpbLoadResult` - type for successful MCPB load (manifest, mcpConfig, extractedPath, contentHash)
- `McpbNeedsConfigResult` - type for when MCPB needs user configuration (includes configSchema, existingConfig, validationErrors)
- `McpbCacheMetadata` - type for cached MCPB metadata (source, contentHash, extractedPath, cachedAt, lastChecked)
- `ProgressCallback` - type alias for download/extraction progress callback `(status: string) => void`
- `isMcpbSource` - checks if a source string is an MCPB file reference (ends with .mcpb or .dxt)
- `loadMcpServerUserConfig` - loads user config for an MCP server, merging non-sensitive (settings.json) with sensitive (secureStorage); secureStorage wins on collision
- `saveMcpServerUserConfig` - saves user config, splitting by schema's `sensitive` flag into secureStorage vs settings.json, with stale entry scrubbing
- `validateUserConfig` - validates user configuration values against DXT user_config schema (required, type, range checks)
- `checkMcpbChanged` - checks if an MCPB source has changed and needs re-extraction (checks cache metadata, extraction path existence, and mtime for local files)
- `loadMcpbFile` - main entry point: loads and extracts an MCPB file with caching and user config support; returns either `McpbLoadResult` or `McpbNeedsConfigResult`

## Source
`mcpbHandler`
