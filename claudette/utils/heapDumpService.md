# heapDumpService

## Purpose
Captures V8 heap snapshots and memory diagnostics for leak investigation. Used by the `/heapdump` command. Writes diagnostics JSON before the heap snapshot to ensure data is captured even if the snapshot crashes on very large heaps.

## Imports
- **Stdlib**: `fs`, `fs/promises`, `path`, `stream/promises`, `v8`
- **Internal**: `../bootstrap/state`, `../services/analytics`, `./debug`, `./errors`, `./file`, `./fsOperations`, `./log`, `./slowOperations`

## Logic
1. **Diagnostics capture** (`captureMemoryDiagnostics`) — gathers `process.memoryUsage()`, V8 heap statistics (`getHeapStatistics`, `getHeapSpaceStatistics`), resource usage, active handles/requests, open file descriptors (Linux via `/proc/self/fd`), and smaps_rollup (Linux). Calculates memory growth rate (MB/hour) and identifies potential leak indicators (detached contexts, high handle count, native memory > heap, high growth rate, too many FDs).
2. **Heap dump** (`performHeapDump`) — writes diagnostics JSON first (cheap, unlikely to fail), then writes the heap snapshot. In Bun, uses `Bun.generateHeapSnapshot()` synchronously followed by `Bun.gc(true)`. In Node, streams via `getHeapSnapshot()` piped to file. Files are written to Desktop with session ID naming.
3. **Trigger types** — supports `manual` (user invoked) and `auto-1.5GB` (automatic at memory threshold) triggers. Auto dumps include a `dumpNumber` for sequential tracking.

## Exports
- `HeapDumpResult` — result type with `success`, optional `heapPath`/`diagPath`, and optional `error`.
- `MemoryDiagnostics` — comprehensive diagnostics type including memory usage, growth rate, V8 heap stats, resource usage, active handles/requests, file descriptors, leak analysis, and platform info.
- `captureMemoryDiagnostics` — async function that collects all memory diagnostics and leak indicators. Returns `MemoryDiagnostics`.
- `performHeapDump` — async function that writes diagnostics JSON and heap snapshot to Desktop. Accepts `trigger` and `dumpNumber` params. Returns `HeapDumpResult`.
