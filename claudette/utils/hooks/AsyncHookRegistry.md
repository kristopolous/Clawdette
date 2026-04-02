# AsyncHookRegistry

## Purpose
Manages the lifecycle of async hooks (shell-based hooks that run as background processes). Tracks pending hooks, polls for completions, parses JSON responses from stdout, and handles cleanup/timeout.

## Imports
- **Internal**: `../debug`, `../ShellCommand`, `../sessionEnvironment`, `../slowOperations`, `./hookEvents`
- **Types**: `src/entrypoints/agentSdkTypes` (AsyncHookJSONOutput, HookEvent, SyncHookJSONOutput)

## Logic
1. **Registration** (`registerPendingAsyncHook`) — stores a pending hook in a global Map keyed by `processId`. Starts a progress interval that polls the shell command's task output for stdout/stderr. Timeout defaults to 15s from `asyncResponse.asyncTimeout`.
2. **Polling** (`checkForAsyncHookResponses`) — snapshots all pending hooks and processes them in parallel via `Promise.allSettled`. For each hook:
   - Removes hooks with no shell command or killed status.
   - Skips hooks not yet completed.
   - Skips hooks already delivered or with empty stdout.
   - Parses stdout lines for JSON (first line starting with `{`), skipping lines with `"async"` key (async continuation markers).
   - Marks `responseAttachmentSent = true`, calls `finalizeHook` (stops progress, cleans up shell, emits hook response event).
   - Returns parsed responses to caller.
3. **SessionStart handling** — when a SessionStart hook completes, invalidates the session env cache.
4. **Cleanup** — `finalizePendingAsyncHooks` kills all running hooks and finalizes them. `removeDeliveredAsyncHooks` removes already-delivered hooks. `clearAllAsyncHooks` is a test utility.

## Exports
- `PendingAsyncHook` — type describing a tracked async hook with processId, hookId, hookName, hookEvent, timeout, shellCommand, responseAttachmentSent flag, and progress interval stopper.
- `registerPendingAsyncHook` — registers a new async hook in the global registry, starts progress polling.
- `getPendingAsyncHooks` — returns array of pending hooks that haven't had their response sent yet.
- `checkForAsyncHookResponses` — polls all pending hooks for completion, parses JSON responses, finalizes completed hooks. Returns array of response objects.
- `removeDeliveredAsyncHooks` — removes hooks whose responses have already been delivered.
- `finalizePendingAsyncHooks` — kills all pending hooks and finalizes them (used during shutdown).
- `clearAllAsyncHooks` — test utility that clears all hooks without emitting responses.
