# utils/readFileInRange

## Purpose
Provides line-oriented file reading with fast path for small files and streaming for large files.

## Imports
- **Stdlib**: `fs`, `fs/promises`
- **External**: (none)
- **Internal**: format

## Logic
1. `FAST_PATH_MAX_SIZE` (10MB) - threshold for fast path vs streaming
2. `ReadFileRangeResult` - { content, lineCount, totalLines, totalBytes, readBytes, mtimeMs, truncatedByBytes }
3. `FileTooLargeError` - error class for files exceeding max size
4. Fast path (files < 10MB): opens file, stats fd, reads whole file, splits lines in memory
5. ~2x faster than streaming for typical source files
6. Streaming path (large files, pipes, devices): uses createReadStream with manual indexOf('\n') scanning
7. Content only accumulated for lines in requested range
8. Lines outside range counted (for totalLines) but discarded
9. Reading line 1 of 100GB file won't balloon RSS
10. Event handlers (streamOnOpen/Data/End) are module-level named functions with zero closures
11. State lives in StreamState object, handlers access via `this`
12. `open`, `end`, `error` use .once() (auto-remove), `data` fires until stream ends or destroyed
13. On error (including maxBytes exceeded), stream.destroy(err) emits 'error' → reject
14. Both paths strip UTF-8 BOM and \r (CRLF → LF)
15. mtime from fstat/stat on already-open fd (no extra open())
16. maxBytes behavior depends on options.truncateOnByteLimit:
    - false (default): throws FileTooLargeError if file/stream exceeds maxBytes
    - true: caps output at maxBytes, stops at last complete line, sets truncatedByBytes

## Exports
- `FAST_PATH_MAX_SIZE` - fast path threshold constant
- `ReadFileRangeResult` - result type
- `FileTooLargeError` - file too large error class
- `readFileInRange` - reads file in range
