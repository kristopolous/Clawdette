# plans

## Purpose
Try to find a unique slug that doesn't conflict with existing files

## Imports
- **Stdlib**: crypto, fs/promises, lodash-es/memoize.js, path, src/types/ids.js, src/types/logs.js
- **Internal**: ../bootstrap/state.js, ../tools/ExitPlanModeTool/constants.js, ./cwd.js, ./debug.js, ./envUtils.js, ./errors.js, ./filePersistence/outputsScanner.js, ./fsOperations.js, ./log.js, ./settings/settings.js...

## Items

### getPlanSlug
**Type**: Function

### setPlanSlug
**Type**: Function

### clearPlanSlug
**Type**: Function

### clearAllPlanSlugs
**Type**: Function

### getPlansDirectory
**Type**: Function

### getPlanFilePath
**Type**: Function

### getPlan
**Type**: Function

### getSlugFromLog
**Type**: Function

### copyPlanForResume
**Type**: Function

### copyPlanForFork
**Type**: Function

### recoverPlanFromMessages
**Type**: Function

### findFileSnapshotEntry
**Type**: Function

### persistFileSnapshotIfRemote
**Type**: Function

## Exports
- getPlanSlug
- setPlanSlug
- clearPlanSlug
- clearAllPlanSlugs
- getPlansDirectory
- getPlanFilePath
- getPlan
- copyPlanForResume
- copyPlanForFork
- persistFileSnapshotIfRemote

## Source
`plans.ts`