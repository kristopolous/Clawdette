# inboundMessages

## Purpose
Processes inbound user messages from the bridge, extracting content and UUID, and normalizing image block formats.

## Imports
- **Stdlib**: `crypto` (UUID type)
- **External**: `@anthropic-ai/sdk` types
- **Internal**: SDKMessage type, imageResizer utils

## Logic
1. `extractInboundMessageFields` - extracts content and UUID from SDKMessage, skips non-user/empty messages
2. `normalizeImageBlocks` - fixes camelCase `mediaType` to snake_case `media_type` for iOS/web client compatibility
3. Detects malformed base64 image blocks missing media_type field
4. Uses `detectImageFormatFromBase64` as fallback when media_type is missing
5. Fast-path returns original array reference when no normalization needed (zero allocation)

## Exports
- `extractInboundMessageFields` - extracts content/UUID from inbound message, returns undefined if skippable
- `normalizeImageBlocks` - normalizes image blocks to correct media_type format
