# instrumentation

## Purpose
OTLP/Prometheus exporters are dynamically imported inside the protocol

## Imports
- **Stdlib**: https-proxy-agent, src/utils/platform.js
- **External**: @opentelemetry/api, @opentelemetry/api-logs
- **Internal**: ../caCerts.js, ../cleanupRegistry.js, ../debug.js, ../envUtils.js, ../errors.js, ../mtls.js, ../proxy.js, ../settings/settings.js, ../slowOperations.js, ../startupProfiler.js...

## Items

### TelemetryTimeoutError
**Type**: Class

### telemetryTimeout
**Type**: Function

### bootstrapTelemetry
**Type**: Function

### parseExporterTypes
**Type**: Function

### getOtlpReaders
**Type**: Function

### getOtlpLogExporters
**Type**: Function

### getOtlpTraceExporters
**Type**: Function

### isTelemetryEnabled
**Type**: Function

### getBigQueryExportingReader
**Type**: Function

### isBigQueryMetricsEnabled
**Type**: Function

### initializeBetaTracing
**Type**: Function

### initializeTelemetry
**Type**: Function

### flushTelemetry
**Type**: Function

### parseOtelHeadersEnvVar
**Type**: Function

### getOTLPExporterConfig
**Type**: Function

## Exports
- bootstrapTelemetry
- parseExporterTypes
- isTelemetryEnabled
- initializeTelemetry
- flushTelemetry

## Source
`instrumentation.ts`