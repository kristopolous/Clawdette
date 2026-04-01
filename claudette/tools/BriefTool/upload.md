## Purpose
Handles uploading attachment files to the private_api backend for web viewer preview when in bridge mode (e.g., cowork desktop).

## Imports
- **Stdlib**: `crypto` (randomUUID), `fs/promises` (readFile), `path` (basename, extname)
- **External**: `axios`, `z` from 'zod/v4', `feature` from 'bun:bundle'
- **Internal**:
  - `getBridgeAccessToken`, `getBridgeBaseUrlOverride` from bridge config
  - `getOauthConfig` from constants/oauth
  - `logForDebugging` utility
  - `lazySchema` utility
  - `jsonStringify` utility

## Logic
Exports:
- `BriefUploadContext` type: `{ replBridgeEnabled: boolean; signal?: AbortSignal }`
- `uploadBriefAttachment(fullPath, size, ctx)`: Async function that uploads attachment via multipart/form-data to `/api/oauth/file_upload` when in BRIDGE_MODE and replBridgeEnabled (or CLAUDE_CODE_BRIEF_UPLOAD env). Checks size limit (30MB), reads file, guesses MIME type (images only: png/jpg/gif/webp). On success returns `file_uuid`; on any failure logs debug and returns undefined. Graceful degradation ensures local rendering still works without upload.

The upload endpoint expects bearer token; response validated with Zod schema `{ file_uuid: string }`. Timeout 30s. Non-201 statuses or parse failures return undefined.

## Exports
- `uploadBriefAttachment(fullPath, size, ctx)` (async function)
- `BriefUploadContext` (type)
