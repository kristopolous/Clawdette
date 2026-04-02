# utils/fileReadCache

## Purpose
Provides in-memory file content cache with mtime-based invalidation to eliminate redundant file reads in FileEditTool operations.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ./file (detectFileEncoding), ./fsOperations (getFsImplementation)

## Logic
1. `CachedFileData` - type for cached entries: { content, encoding, mtime }
2. `FileReadCache` class with Map-based storage, max 1000 entries
3. `readFile(filePath)` - reads file with caching:
   - Gets file stats via getFsImplementation().statSync
   - On stat error: removes from cache and re-throws
   - Checks cache for matching mtimeMs
   - On hit: returns cached content and encoding
   - On miss: detects encoding, reads file, normalizes \r\n to \n, stores in cache
   - Evicts oldest entry (Map insertion order) if cache exceeds max size
4. `clear()` - empties entire cache
5. `invalidate(filePath)` - removes specific file from cache
6. `getStats()` - returns { size, entries } for debugging/monitoring
7. Uses getFsImplementation for cross-platform filesystem operations

## Exports
- `CachedFileData` - type alias for cached file data { content, encoding, mtime }
- `FileReadCache` - class implementing mtime-based file content cache
- `fileReadCache` - singleton instance of FileReadCache (the primary export)
