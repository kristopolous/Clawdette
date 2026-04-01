# startupProfiler

## Purpose
Module-level state - decided once at module load

## Imports
- **Stdlib**: path, src/bootstrap/state.js
- **Internal**: ./debug.js, ./envUtils.js, ./fsOperations.js, ./profilerBase.js, ./slowOperations.js

## Items

### profileCheckpoint
**Type**: Function

### getReport
**Type**: Function

### profileReport
**Type**: Function

### isDetailedProfilingEnabled
**Type**: Function

### getStartupPerfLogPath
**Type**: Function

### logStartupPerf
**Type**: Function

## Exports
- profileCheckpoint
- profileReport
- isDetailedProfilingEnabled
- getStartupPerfLogPath
- logStartupPerf

## Source
`startupProfiler.ts`