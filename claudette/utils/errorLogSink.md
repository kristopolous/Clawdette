# errorLogSink

## Purpose
Heavy implementation for file-based error logging. Writes errors and MCP server logs to JSONL files on disk using buffered writers. Separated from [```log```](log.md) to avoid import cycles — [```log```](log.md) queues events until this sink is attached during app startup. Only active for `USER_TYPE=ant` builds.

## Imports
- **Stdlib**: `path`
- **External**: `axios`
- **Internal**: `../bootstrap/state`, `./bufferedWriter`, `./cachePaths`, `./cleanupRegistry`, `./debug`, `./fsOperations`, `./log`, `./slowOperations`

## Logic
1. Path resolution: errors log at `CACHE_PATHS.errors()/DATE.jsonl`, MCP logs at `CACHE_PATHS.mcpLogs(serverName)/DATE.jsonl`
2. JSONL writer: wraps bufferedWriter, serializes objects via jsonStringify, flushes every 1000ms or at 50 entries
3. Writer management: Map of path→JsonlWriter, creates on first use, registers cleanup via cleanupRegistry, auto-creates directories on write failure
4. `appendToLog` - only writes when USER_TYPE='ant', enriches messages with timestamp, cwd, userType, sessionId, version
5. Error enrichment: axios errors get url, status, and server message extracted from response data
6. MCP logging: separate log files per server, supports error and debug message types
7. `initializeErrorLogSink` - attaches implementations to [```log```](log.md) via attachErrorLogSink, idempotent

## Exports
- `getErrorsPath()` - sync, returns path to errors JSONL log file for current date
- `getMCPLogsPath(serverName: string)` - sync, returns path to MCP server's JSONL log file
- `_flushLogWritersForTesting()` - sync, flushes all buffered writers (internal/test use)
- `_clearLogWritersForTesting()` - sync, disposes and clears all writers (internal/test use)
- `initializeErrorLogSink()` - sync, attaches error logging backend to [```log```](log.md). Should be called before initializeAnalyticsSink() in startup

## Source
`errorLogSink`