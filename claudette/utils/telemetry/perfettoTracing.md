# perfettoTracing

## Purpose
Global state for the Perfetto tracer

## Imports
- **Stdlib**: bun:bundle, fs, fs/promises, path
- **Internal**: ../../bootstrap/state.js, ../cleanupRegistry.js, ../debug.js, ../errors.js, ../hash, ../slowOperations, ../teammate

## Items

### stringToNumericHash
**Type**: Function

### getProcessIdForAgent
**Type**: Function

### getCurrentAgentInfo
**Type**: Function

### getTimestamp
**Type**: Function

### generateSpanId
**Type**: Function

### evictStaleSpans
**Type**: Function

### buildTraceDocument
**Type**: Function

### evictOldestEvents
**Type**: Function

### initializePerfettoTracing
**Type**: Function

### emitProcessMetadata
**Type**: Function

### isPerfettoTracingEnabled
**Type**: Function

### registerAgent
**Type**: Function

### unregisterAgent
**Type**: Function

### startLLMRequestPerfettoSpan
**Type**: Function

### endLLMRequestPerfettoSpan
**Type**: Function

### startToolPerfettoSpan
**Type**: Function

### endToolPerfettoSpan
**Type**: Function

### startUserInputPerfettoSpan
**Type**: Function

### endUserInputPerfettoSpan
**Type**: Function

### emitPerfettoInstant
**Type**: Function

### emitPerfettoCounter
**Type**: Function

### startInteractionPerfettoSpan
**Type**: Function

### endInteractionPerfettoSpan
**Type**: Function

### stopWriteInterval
**Type**: Function

### closeOpenSpans
**Type**: Function

### periodicWrite
**Type**: Function

### writePerfettoTrace
**Type**: Function

### writePerfettoTraceSync
**Type**: Function

### getPerfettoEvents
**Type**: Function

### resetPerfettoTracer
**Type**: Function

### triggerPeriodicWriteForTesting
**Type**: Function

### evictStaleSpansForTesting
**Type**: Function

### evictOldestEventsForTesting
**Type**: Function

### TraceEventPhase
**Type**: Type alias

### TraceEvent
**Type**: Type alias

### AgentInfo
**Type**: Type alias

### PendingSpan
**Type**: Type alias

## Exports
- TraceEventPhase
- TraceEvent
- initializePerfettoTracing
- isPerfettoTracingEnabled
- registerAgent
- unregisterAgent
- startLLMRequestPerfettoSpan
- endLLMRequestPerfettoSpan
- startToolPerfettoSpan
- endToolPerfettoSpan
- startUserInputPerfettoSpan
- endUserInputPerfettoSpan
- emitPerfettoInstant
- emitPerfettoCounter
- startInteractionPerfettoSpan
- endInteractionPerfettoSpan
- getPerfettoEvents
- resetPerfettoTracer
- triggerPeriodicWriteForTesting
- evictStaleSpansForTesting
- MAX_EVENTS_FOR_TESTING
- evictOldestEventsForTesting

## Source
`perfettoTracing.ts`