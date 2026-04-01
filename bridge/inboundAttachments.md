# inboundAttachments

## Purpose
Resolves file_uuid attachments on inbound bridge user messages by fetching from OAuth API and writing to local uploads directory.

## Imports
- **Stdlib**: `crypto`, `fs/promises`, `path`
- **External**: `@anthropic-ai/sdk`, `axios`, `zod/v4`
- **Internal**: bootstrap state, debug utils, env utils, lazySchema, bridgeConfig

## Logic
1. Extracts file_attachments from inbound messages via zod schema validation
2. Sanitizes filenames by removing path components and non-alphanumeric chars
3. Fetches each attachment via GET /api/oauth/files/{uuid}/content with OAuth auth
4. Writes to ~/.claude/uploads/{sessionId}/{uuid-prefix}-{filename}
5. Returns @path refs string to prepend to message content
6. Best-effort: any failure logs debug and skips that attachment

## Exports
- `InboundAttachment` - type with file_uuid and file_name
- `extractInboundAttachments` - extracts attachments from loosely-typed inbound message
- `resolveInboundAttachments` - fetches and writes attachments, returns @path prefix string
- `prependPathRefs` - prepends @path refs to content (string or ContentBlockParam[])
