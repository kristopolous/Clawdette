# fileChangedWatcher

## Purpose
Matcher field: filenames to watch in cwd, pipe-separated (e.g. ".envrc|.env")

## Imports
- **Stdlib**: chokidar, path
- **Internal**: ../cleanupRegistry.js, ../debug.js, ../errors, ../sessionEnvironment, ./hooksConfigSnapshot

## Items

### setEnvHookNotifier
**Type**: Function

### initializeFileChangedWatcher
**Type**: Function

### resolveWatchPaths
**Type**: Function

### startWatching
**Type**: Function

### handleFileEvent
**Type**: Function

### updateWatchPaths
**Type**: Function

### restartWatching
**Type**: Function

### onCwdChangedForHooks
**Type**: Function

### dispose
**Type**: Function

### resetFileChangedWatcherForTesting
**Type**: Function

## Exports
- setEnvHookNotifier
- initializeFileChangedWatcher
- updateWatchPaths
- onCwdChangedForHooks
- resetFileChangedWatcherForTesting

## Source
`fileChangedWatcher.ts`