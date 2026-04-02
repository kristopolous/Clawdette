# fileChangedWatcher

## Purpose
Watches files (configured via FileChanged hook matchers) and executes hooks when they change, add, or unlink. Also handles CwdChanged hooks when the working directory changes. Supports dynamic watch paths returned by hook output.

## Imports
- **Stdlib**: chokidar, path
- **Internal**: ../cleanupRegistry, ../debug, ../errors, ../hooks, ../sessionEnvironment, ./hooksConfigSnapshot

## Logic
1. Module-level state tracks the FSWatcher instance, current cwd, dynamic watch paths, initialization flag, env hook flag, and notification callback.
2. `initializeFileChangedWatcher` is called once at startup; it checks if CwdChanged/FileChanged hooks exist, resolves watch paths from config matchers (pipe-separated filenames resolved relative to cwd), and starts chokidar watching.
3. On file events (change/add/unlink), `executeFileChangedHooks` is called; results may include new watchPaths which update the watcher dynamically.
4. `onCwdChangedForHooks` clears old env files, executes CwdChanged hooks, updates dynamic watch paths, and restarts the watcher with paths resolved against the new cwd.
5. `updateWatchPaths` compares new paths against sorted cache to avoid unnecessary restarts.
6. `dispose` closes the watcher and resets all state; registered as cleanup if env hooks exist.

## Exports
- `setEnvHookNotifier(cb)` - Sets callback for notifying users of hook output/errors.
- `initializeFileChangedWatcher(cwd)` - Initializes the file watcher once; resolves paths from FileChanged matchers and starts watching.
- `updateWatchPaths(paths)` - Updates dynamic watch paths from hook output; restarts watcher if paths changed.
- `onCwdChangedForHooks(oldCwd, newCwd)` - Handles working directory changes: clears env, runs CwdChanged hooks, updates watch paths, restarts watcher.
- `resetFileChangedWatcherForTesting()` - Disposes watcher and resets all module state for test isolation.

## Source
`fileChangedWatcher`