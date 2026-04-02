# cronTasks

## Purpose
Scheduled prompts, stored in <project>/claude/scheduled_taskson.

## Imports
- **Stdlib**: crypto, fs, fs/promises, path
- **Internal**: ./cron, /debug, /errors, /fsOperations, ./json, ./log, ./slowOperations

## Items

### getCronFilePath
**Type**: Function

### readCronTasks
**Type**: Function

### hasCronTasksSync
**Type**: Function

### writeCronTasks
**Type**: Function

### addCronTask
**Type**: Function

### removeCronTasks
**Type**: Function

### markCronTasksFired
**Type**: Function

### listAllCronTasks
**Type**: Function

### nextCronRunMs
**Type**: Function

### jitterFrac
**Type**: Function

### jitteredNextCronRunMs
**Type**: Function

### oneShotJitteredNextCronRunMs
**Type**: Function

### findMissedTasks
**Type**: Function

### CronTask
**Type**: Type alias

### CronFile
**Type**: Type alias

### CronJitterConfig
**Type**: Type alias

## Exports
- CronTask
- getCronFilePath
- readCronTasks
- hasCronTasksSync
- writeCronTasks
- addCronTask
- removeCronTasks
- markCronTasksFired
- listAllCronTasks
- nextCronRunMs
- CronJitterConfig
- DEFAULT_CRON_JITTER_CONFIG
- jitteredNextCronRunMs
- oneShotJitteredNextCronRunMs
- findMissedTasks

## Source
`cronTasks`