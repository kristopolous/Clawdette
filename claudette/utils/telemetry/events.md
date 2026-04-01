# utils/telemetry/events

## Purpose
Provides OpenTelemetry event logging utilities.

## Imports
- **Stdlib**: (none)
- **External**: `@opentelemetry/api`
- **Internal**: bootstrap state, debug, envUtils, telemetryAttributes

## Logic
1. `eventSequence` - monotonically increasing counter for ordering events within session
2. `hasWarnedNoEventLogger` - tracks whether we've warned about null event logger
3. `isUserPromptLoggingEnabled` - checks if user prompt logging enabled (OTEL_LOG_USER_PROMPTS env)
4. `redactIfDisabled` - redacts content if user prompt logging disabled
5. `logOTelEvent` - logs OpenTelemetry event
6. Gets event logger via getEventLogger()
7. Warns once if no event logger initialized
8. Skips logging in test environment
9. Builds attributes with telemetry attributes, event name, timestamp, sequence
10. Adds prompt ID to events (not metrics - would cause unbounded cardinality)
11. Adds workspace directory from desktop app (host path)
12. CLAUDE_CODE_WORKSPACE_HOST_PATHS env var (pipe-separated)
13. Filesystem paths too high-cardinality for metric dimensions
14. BQ metrics pipeline must never see them
15. Adds metadata as attributes (all values already strings)
16. Emits log record as event with body `claude_code.{eventName}`
17. `getEventLogger`, `getPromptId` - bootstrap state functions
18. `logForDebugging` - debug logging
19. `isEnvTruthy` - checks env var truthy
20. `getTelemetryAttributes` - gets telemetry attributes
21. `Attributes` - OpenTelemetry attributes type

## Exports
- `logOTelEvent` - logs OpenTelemetry event
- `redactIfDisabled` - redacts content if disabled
- (Telemetry event functions)
