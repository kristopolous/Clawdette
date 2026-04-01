# stats

## Purpose
Activity overview

## Imports
- **Stdlib**: bun:bundle, fs/promises, path, src/entrypoints/agentSdkTypes.js
- **Internal**: ../types/logs.js, ./debug.js, ./errors.js, ./fsOperations.js, ./json.js, ./messages.js, ./sessionStorage.js, ./shell/shellToolUtils.js, ./slowOperations

## Items

### processSessionFiles
**Type**: Function

### getAllSessionFiles
**Type**: Function

### cacheToStats
**Type**: Function

### aggregateClaudeCodeStats
**Type**: Function

### aggregateClaudeCodeStatsForRange
**Type**: Function

### processedStatsToClaudeCodeStats
**Type**: Function

### getNextDay
**Type**: Function

### calculateStreaks
**Type**: Function

### extractShotCountFromMessages
**Type**: Function

### readSessionStartDate
**Type**: Function

### getEmptyStats
**Type**: Function

### DailyActivity
**Type**: Type alias

### DailyModelTokens
**Type**: Type alias

### StreakInfo
**Type**: Type alias

### SessionStats
**Type**: Type alias

### ClaudeCodeStats
**Type**: Type alias

### ProcessedStats
**Type**: Type alias

### ProcessOptions
**Type**: Type alias

### StatsDateRange
**Type**: Type alias

## Exports
- DailyActivity
- DailyModelTokens
- StreakInfo
- SessionStats
- ClaudeCodeStats
- aggregateClaudeCodeStats
- StatsDateRange
- aggregateClaudeCodeStatsForRange
- readSessionStartDate

## Source
`stats.ts`