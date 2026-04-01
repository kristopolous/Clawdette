# mcpbHandler

## Purpose
Scrub ONLY keys we're writing in this call. Covers both directions

## Imports
- **Stdlib**: axios, crypto, fs/promises, path
- **Internal**: ../../services/mcp/types.js, ../debug.js, ../dxt/helpers.js, ../dxt/zip.js, ../errors.js, ../fsOperations.js, ../log.js, ../secureStorage/index.js, ../slowOperations.js, ../systemDirectories...

## Items

### isMcpbSource
**Type**: Function

### isUrl
**Type**: Function

### generateContentHash
**Type**: Function

### getMcpbCacheDir
**Type**: Function

### getMetadataPath
**Type**: Function

### serverSecretsKey
**Type**: Function

### loadMcpServerUserConfig
**Type**: Function

### saveMcpServerUserConfig
**Type**: Function

### validateUserConfig
**Type**: Function

### generateMcpConfig
**Type**: Function

### loadCacheMetadata
**Type**: Function

### saveCacheMetadata
**Type**: Function

### downloadMcpb
**Type**: Function

### extractMcpbContents
**Type**: Function

### checkMcpbChanged
**Type**: Function

### loadMcpbFile
**Type**: Function

### UserConfigValues
**Type**: Type alias

### UserConfigSchema
**Type**: Type alias

### McpbLoadResult
**Type**: Type alias

### McpbNeedsConfigResult
**Type**: Type alias

### McpbCacheMetadata
**Type**: Type alias

### ProgressCallback
**Type**: Type alias

## Exports
- UserConfigValues
- UserConfigSchema
- McpbLoadResult
- McpbNeedsConfigResult
- McpbCacheMetadata
- ProgressCallback
- isMcpbSource
- loadMcpServerUserConfig
- saveMcpServerUserConfig
- validateUserConfig
- checkMcpbChanged
- loadMcpbFile

## Source
`mcpbHandler.ts`