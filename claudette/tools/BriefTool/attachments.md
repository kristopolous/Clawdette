## Purpose
Provides attachment validation and resolution utilities for the Brief tool (SendUserMessage).

## Imports
- **Stdlib**: `fs/promises` (stat)
- **External**: `feature` from 'bun:bundle'
- **Internal**:
  - `ValidationResult` type from Tool
  - `getCwd` utility
  - `isEnvTruthy` utility
  - `getErrnoCode` utility
  - `IMAGE_EXTENSION_REGEX` constant
  - `expandPath` utility

## Logic
Exports two async functions:
1. `validateAttachmentPaths(rawPaths)`: Checks each path exists as a regular file. Returns early with error for non-file, ENOENT, or EACCES/EPERM. Throws other errors. Returns `{ result: true }` if all valid.
2. `resolveAttachments(rawPaths, uploadCtx)`: 
   - First stats each file to get size and determine if it's an image (using IMAGE_EXTENSION_REGEX).
   - Builds `ResolvedAttachment[]` with `path`, `size`, `isImage`.
   - If BRIDGE_MODE is enabled AND (replBridgeEnabled OR CLAUDE_CODE_BRIEF_UPLOAD=true), dynamically imports `./upload.js` and uploads attachments in parallel using `uploadBriefAttachment`. Merges returned `file_uuid` into each attachment (undefined uploads keep original fields).
   - Returns the array (with file_uuid if upload succeeded).

The `ResolvedAttachment` type includes optional `file_uuid` used by web viewer to fetch from backend instead of local path.

## Exports
- `validateAttachmentPaths(rawPaths)` (async)
- `resolveAttachments(rawPaths, uploadCtx)` (async)
- `ResolvedAttachment` (type)
