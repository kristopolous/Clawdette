# statsCache

## Purpose
Wait for any existing lock to be released

## Imports
- **Stdlib**: bun:bundle, crypto, fs/promises, path
- **Internal**: ../entrypoints/agentSdkTypes.js, ./debug.js, ./envUtils.js, ./errors.js, ./fsOperations.js, ./log.js, ./slowOperations.js, ./stats

## Items

### getStatsCachePath
**Type**: Function

### getEmptyCache
**Type**: Function

### migrateStatsCache
**Type**: Function

### loadStatsCache
**Type**: Function

### saveStatsCache
**Type**: Function

### mergeCacheWithNewStats
**Type**: Function

### toDateString
**Type**: Function

### getTodayDateString
**Type**: Function

### getYesterdayDateString
**Type**: Function

### isDateBefore
**Type**: Function

### PersistedStatsCache
**Type**: Type alias

## Exports
- STATS_CACHE_VERSION
- withStatsCacheLock
- PersistedStatsCache
- getStatsCachePath
- loadStatsCache
- saveStatsCache
- mergeCacheWithNewStats
- toDateString
- getTodayDateString
- getYesterdayDateString
- isDateBefore

## Source
`statsCache.ts`