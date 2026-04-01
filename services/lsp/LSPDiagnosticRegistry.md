# lsp/LSPDiagnosticRegistry

## Purpose
Stores LSP diagnostics received asynchronously from servers for attachment delivery to conversation.

## Imports
- **Stdlib**: `crypto`
- **External**: `lru-cache`
- **Internal**: debug, errors, log, JSON utils, diagnosticTracking

## Logic
1. `PendingLSPDiagnostic` - type with serverName, files, timestamp, attachmentSent
2. Follows AsyncHookRegistry pattern for consistent async attachment delivery
3. Flow: registerPending → checkFor → getAttachments → deliver
4. `MAX_DIAGNOSTICS_PER_FILE` (10), `MAX_TOTAL_DIAGNOSTICS` (30) - volume limits
5. `MAX_DELIVERED_FILES` (500) - deduplication cache limit
6. `pendingDiagnostics` - Map of UUID-keyed pending diagnostics
7. `deliveredDiagnostics` - LRUCache tracking delivered diagnostic keys (hash of message+severity+range)
8. `registerPendingLSPDiagnostic` - stores diagnostic with UUID for uniqueness
9. Cross-turn deduplication prevents repeat attachments
10. Timestamp tracking for ordering and cleanup

## Exports
- `PendingLSPDiagnostic` - pending diagnostic type
- `registerPendingLSPDiagnostic` - registers diagnostic from server notification
- (Additional registry functions for retrieval and attachment conversion)
