# mcpOutputStorage

## Purpose
Handles MCP tool result output: format descriptions, large output instructions for file-based reading, MIME type to extension mapping, binary content detection, and persisting binary content to the tool-results directory.

## Imports
- **Stdlib**: fs/promises (writeFile), path (join)
- **External**: (none)
- **Internal**: ../services/analytics/index (logEvent, AnalyticsMetadata type), ../services/mcp/client (MCPResultType), ./errors (toError), ./format (formatFileSize), ./log (logError), ./toolResultStorage (ensureToolResultsDir, getToolResultsDir)

## Logic
1. **Format description** — `getFormatDescription` returns human-readable format string based on MCP result type: 'Plain text' for toolResult, 'JSON' or 'JSON with schema: {schema}' for structuredContent, 'JSON array' or 'JSON array with schema: {schema}' for contentArray.
2. **Large output instructions** — `getLargeOutputInstructions` generates instruction text telling Claude to read saved output files in sequential chunks, reduce chunk size on truncation warnings, and explicitly state what portion was read before producing summaries. Includes optional maxReadLength for Bash output context.
3. **MIME type mapping** — `extensionForMimeType` maps ~25 MIME types to file extensions (pdf, json, csv, txt, html, md, zip, docx, xlsx, pptx, doc, xls, mp3, wav, ogg, mp4, webm, png, jpg, gif, webp, svg). Unknown types default to 'bin'. Strips charset/boundary parameters.
4. **Binary detection** — `isBinaryContentType` heuristically determines if content is binary. Text-ish types (text/*, +json, +xml, application/javascript, application/x-www-form-urlencoded) are non-binary. Everything else is binary.
5. **Binary persistence** — `persistBinaryContent` writes raw bytes to tool-results directory with MIME-derived extension. Returns filepath/size/ext or error. Logs analytics event 'tengu_binary_content_persisted'.
6. **Saved message** — `getBinaryBlobSavedMessage` builds a user-facing message telling Claude where binary content was saved, including MIME type and formatted file size.

## Exports
- `getFormatDescription(type, schema?)` — Returns human-readable format string for MCP result type
- `getLargeOutputInstructions(rawOutputPath, contentLength, formatDescription, maxReadLength?)` — Generates instruction text for reading large saved output files
- `extensionForMimeType(mimeType?)` — Maps MIME type to file extension ('bin' for unknown)
- `isBinaryContentType(contentType)` — Returns true if content-type indicates binary data
- `PersistBinaryResult` — Type: { filepath, size, ext } | { error }
- `persistBinaryContent(bytes, mimeType?, persistId)` — Writes binary bytes to tool-results directory. Returns PersistBinaryResult.
- `getBinaryBlobSavedMessage(filepath, mimeType?, size, sourceDescription)` — Builds message telling Claude where binary content was saved

## Source
`mcpOutputStorage`
