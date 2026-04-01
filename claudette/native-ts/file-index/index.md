## Purpose
Pure-TypeScript port of a Rust NAPI module for high-performance fuzzy file searching, reimplementing nucleo-style scoring without native dependencies.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: None

## Logic
Builds an index of file paths with lowercase variants and per-path character bitmaps for O(1) rejection of paths missing needle letters. Search uses a fused indexOf scan to find greedy-earliest match positions, scores with boundary/camelCase/consecutive bonuses and gap penalties, and maintains a top-k sorted array to avoid full sorting. Supports both sync and async loading with time-based chunking to yield to the event loop. Score semantics use position-in-results normalized by result count, with a penalty for paths containing "test".

## Exports
- `SearchResult` - type representing a matched path with its normalized score
- `FileIndex` - class that indexes file paths and provides fuzzy search via loadFromFileList, loadFromFileListAsync, and search methods
- `yieldToEventLoop` - returns a promise that resolves on the next event loop tick via setImmediate
- `CHUNK_MS` - constant defining the time threshold (in ms) for yielding during async index building
- `FileIndexType` - type alias for the FileIndex class
