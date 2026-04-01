# sessionTracing

## Purpose
Re-export for callers

## Imports
- **Stdlib**: bun:bundle, async_hooks
- **External**: @opentelemetry/api
- **Internal**: ../../services/analytics/growthbook.js, ../../types/message.js, ../envUtils.js, ../telemetryAttributes.js

## Items

### getSpanId
**Type**: Function

### ensureCleanupInterval
**Type**: Function

### isEnhancedTelemetryEnabled
**Type**: Function

### isAnyTracingEnabled
**Type**: Function

### getTracer
**Type**: Function

### createSpanAttributes
**Type**: Function

### startInteractionSpan
**Type**: Function

### endInteractionSpan
**Type**: Function

### startLLMRequestSpan
**Type**: Function

### endLLMRequestSpan
**Type**: Function

### startToolSpan
**Type**: Function

### startToolBlockedOnUserSpan
**Type**: Function

### endToolBlockedOnUserSpan
**Type**: Function

### startToolExecutionSpan
**Type**: Function

### endToolExecutionSpan
**Type**: Function

### endToolSpan
**Type**: Function

### isToolContentLoggingEnabled
**Type**: Function

### addToolContentEvent
**Type**: Function

### getCurrentSpan
**Type**: Function

### startHookSpan
**Type**: Function

### endHookSpan
**Type**: Function

### SpanContext
**Type**: Interface

### APIMessage
**Type**: Type alias

### SpanType
**Type**: Type alias

## Exports
- isEnhancedTelemetryEnabled
- startInteractionSpan
- endInteractionSpan
- startLLMRequestSpan
- endLLMRequestSpan
- startToolSpan
- startToolBlockedOnUserSpan
- endToolBlockedOnUserSpan
- startToolExecutionSpan
- endToolExecutionSpan
- endToolSpan
- addToolContentEvent
- getCurrentSpan
- executeInSpan
- startHookSpan
- endHookSpan

## Source
`sessionTracing.ts`