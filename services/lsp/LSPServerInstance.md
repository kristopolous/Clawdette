# lsp/LSPServerInstance

## Purpose
Manages lifecycle of single LSP server instance with state tracking and health monitoring.

## Imports
- **Stdlib**: `path`, `url`
- **External**: `vscode-languageserver-protocol`
- **Internal**: cwd, debug, errors, log, sleep, LSPClient, types

## Logic
1. `LSPServerInstance` interface with name, config, state, startTime, lastError, restartCount
2. Methods: start, stop, restart, isHealthy, sendRequest, sendNotification, onNotification, onRequest
3. `LSP_ERROR_CONTENT_MODIFIED` (-32801) - transient error for retry
4. `MAX_RETRIES_FOR_TRANSIENT_ERRORS` (3), `RETRY_BASE_DELAY_MS` (500ms)
5. State machine: stopped → starting → running → stopping → stopped; any → error; error → starting (retry)
6. `createLSPServerInstance` - factory with closure state encapsulation
7. Manages LSPClient lifecycle with initialize params
8. Health monitoring for request routing
9. Exponential backoff on transient errors (500ms, 1000ms, 2000ms)
10. pathToFileURL for URI conversion
11. Tracks restart count for monitoring

## Exports
- `LSPServerInstance` - server instance interface
- `LSP_ERROR_CONTENT_MODIFIED` - content modified error code constant
- `MAX_RETRIES_FOR_TRANSIENT_ERRORS` - retry limit constant
- `RETRY_BASE_DELAY_MS` - backoff base delay constant
- `createLSPServerInstance` - factory creating server instance
