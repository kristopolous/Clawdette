# utils/idleTimeout

## Purpose
Provides idle timeout manager for SDK mode auto-exit.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: debug, gracefulShutdown

## Logic
1. `createIdleTimeoutManager` - creates idle timeout manager
2. Reads CLAUDE_CODE_EXIT_AFTER_STOP_DELAY env var
3. Parses delay in milliseconds
4. `isIdle` - function that returns true if system idle
5. `start` - starts idle timer
6. Clears any existing timer
7. Only starts if delay configured and valid
8. Records lastIdleTime on start
9. On timeout: checks if continuously idle for full duration
10. Calls gracefulShutdownSync() if idle
11. `stop` - stops idle timer
12. Clears timer if set
13. Used for SDK mode automatic process exit

## Exports
- `createIdleTimeoutManager` - creates idle timeout manager with start/stop methods
