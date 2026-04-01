# heapDumpService

## Purpose
getHeapSpaceStatistics() is not available in Bun

## Imports
- **Stdlib**: fs, fs/promises, path, stream/promises
- **Internal**: ../bootstrap/state.js, ../services/analytics/index.js, ./debug.js, ./errors.js, ./file.js, ./fsOperations, ./log, ./slowOperations

## Items

### captureMemoryDiagnostics
**Type**: Function

### performHeapDump
**Type**: Function

### writeHeapSnapshot
**Type**: Function

### HeapDumpResult
**Type**: Type alias

### MemoryDiagnostics
**Type**: Type alias

## Exports
- HeapDumpResult
- MemoryDiagnostics
- captureMemoryDiagnostics
- performHeapDump

## Source
`heapDumpService.ts`