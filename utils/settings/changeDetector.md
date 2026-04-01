# changeDetector

## Purpose
Test overrides for timing constants

## Imports
- **Stdlib**: chokidar, fs/promises, path
- **Internal**: ../../bootstrap/state.js, ../cleanupRegistry.js, ../debug.js, ../errors.js, ../signal.js, ../slowOperations.js, ./constants.js, ./internalWrites.js, ./managedPath.js, ./settings.js...

## Items

### initialize
**Type**: Function

### dispose
**Type**: Function

### getWatchTargets
**Type**: Function

### settingSourceToConfigChangeSource
**Type**: Function

### handleChange
**Type**: Function

### handleAdd
**Type**: Function

### handleDelete
**Type**: Function

### getSourceForPath
**Type**: Function

### startMdmPoll
**Type**: Function

### fanOut
**Type**: Function

### notifyChange
**Type**: Function

### resetForTesting
**Type**: Function

## Exports
- initialize
- dispose
- subscribe
- notifyChange
- resetForTesting
- settingsChangeDetector

## Source
`changeDetector.ts`