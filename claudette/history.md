## Purpose
Manages command history persistence, retrieval, and pasted content resolution with file-based storage and lockfile synchronization.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: none
- **Internal**: `bootstrap/state`, `utils/cleanupRegistry`, `utils/config`, `utils/debug`, `utils/envUtils`, `utils/errors`, `utils/fsOperations`, `utils/lockfile`, `utils/pasteStore`, `utils/sleep`, `utils/slowOperations`

## Logic
1. Stores history entries as JSONL in a global config directory file with lockfile-based concurrent write safety
2. Pasted text content is either stored inline (under 1024 bytes) or stored by hash reference in an external paste store
3. History readers iterate newest-first, filtering by current project and session, with deduplication for the ctrl+r picker
4. Pending entries are buffered in memory and flushed asynchronously with retry logic and exponential backoff
5. `removeLastFromHistory` undoes the most recent entry via a fast-path buffer pop or a timestamp skip-set if already flushed
6. Image references are filtered out of history storage since they are managed separately in an image cache

## Exports
- `getPastedTextRefNumLines` - counts the number of newlines in pasted text for display formatting
- `formatPastedTextRef` - formats a pasted text reference like `[Pasted text #N +M lines]`
- `formatImageRef` - formats an image reference like `[Image #N]`
- `parseReferences` - extracts all pasted text and image references from a string with their IDs and positions
- `expandPastedTextRefs` - replaces pasted text reference placeholders with their actual content
- `makeHistoryReader` - async generator yielding history entries from disk and pending buffer, newest first
- `getTimestampedHistory` - async generator yielding deduped, project-scoped history entries with display text and timestamps for the ctrl+r picker
- `getHistory` - async generator yielding project-scoped history with current session entries first, then other sessions, limited to 100 items
- `addToHistory` - adds a command or history entry to the pending buffer and triggers async flush
- `clearPendingHistoryEntries` - clears all pending entries, last-added tracking, and skip timestamps
- `removeLastFromHistory` - undoes the most recent history addition from the pending buffer or marks it to be skipped
