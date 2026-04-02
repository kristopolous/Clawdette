# headlessProfiler

## Purpose
Profiles per-turn latency in headless/non-interactive mode (`-p` print mode). Tracks timing phases like time-to-first-token (TTFT), query start, and system message yield. Uses sampled logging: 100% of ant users, 5% of external users.

## Imports
- **Stdlib**: `performance` (via `profilerBase`), `process.env`
- **Internal**: `../bootstrap/state`, `../services/analytics`, `./debug`, `./envUtils`, `./profilerBase`, `./slowOperations`

## Logic
- **Enablement** — profiling runs only in non-interactive sessions AND when either `CLAUDE_CODE_PROFILE_STARTUP=1` (detailed mode) or the user is sampled for Statsig (100% ant, 5% external). Decision made once at module load so non-sampled users pay zero cost.
- **Marks** — uses `performance.mark()` with `headless_` prefix to avoid conflicts. Each turn clears previous marks before recording new ones.
- **Turn lifecycle** — `headlessProfilerStartTurn()` increments turn counter and marks `turn_start`. `headlessProfilerCheckpoint(name)` records named checkpoints during the turn. `logHeadlessProfilerTurn()` computes phase durations relative to `turn_start` and logs to Statsig.
- **Metrics computed** — `time_to_system_message_ms` (turn 0 only, absolute), `time_to_query_start_ms`, `time_to_first_response_ms`, `query_overhead_ms`, `checkpoint_count`, `entrypoint` (sdk-ts/sdk-py/sdk-cli).

## Exports
- `headlessProfilerStartTurn` — starts a new profiling turn; clears previous marks, increments turn counter, records `turn_start` mark.
- `headlessProfilerCheckpoint` — records a named checkpoint mark (e.g., `query_started`, `first_chunk`, `api_request_sent`).
- `logHeadlessProfilerTurn` — computes and logs latency metrics for the current turn to Statsig and/or debug log.
