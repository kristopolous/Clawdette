# fileOperationAnalytics

## Purpose
Logs file operation analytics (read/write/edit) to Statsig with privacy-preserving SHA256 hashes of file paths and contents.

## Imports
- **Stdlib**: `crypto` (createHash)
- **Internal**: src/services/analytics/index (AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, logEvent)

## Logic
1. `hashFilePath` - creates truncated 16-char SHA256 hash of file path for privacy-preserving analytics
2. `hashFileContent` - creates full 64-char SHA256 hash of file content for deduplication/change detection
3. `MAX_CONTENT_HASH_SIZE` - 100KB limit to prevent memory exhaustion from hashing large files (e.g., base64 images)
4. `logFileOperation` - logs `tengu_file_operation` event with:
   - operation type (read/write/edit)
   - tool name (FileReadTool/FileWriteTool/FileEditTool)
   - hashed file path
   - optional hashed content (only if provided and under size limit)
   - optional type (create/update)
5. All values cast to AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS to ensure no raw code/paths leak

## Exports
- `logFileOperation` - logs file operation analytics with hashed paths and optional content
