# autoDream/autoDream

## Purpose
Implements background memory consolidation that fires /dream prompt as forked subagent when time and session thresholds are met.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: hooks, forkedAgent, messages, message types, debug, Tool, analytics, GrowthBook, memdir paths, autoDream config, sessionStorage, bootstrap state, extractMemories, consolidationPrompt/lock, DreamTask, FileEdit/FileWrite constants

## Logic
1. Gate order (cheapest first): time → sessions → lock
2. Time gate: hours since lastConsolidatedAt >= minHours
3. Session gate: transcript count with mtime > lastConsolidatedAt >= minSessions
4. Lock: prevents concurrent consolidation
5. State closure-scoped inside initAutoDream (tests call for fresh closure)
6. `SESSION_SCAN_INTERVAL_MS` (10min) - throttle when time-gate passes but session-gate doesn't
7. `getConfig` - fetches thresholds from tengu_onyx_plover with per-field validation
8. DEFAULTS: minHours (24), minSessions (5)
9. `runAutoDream` - main consolidation logic
10. Creates forked subagent with /dream prompt
11. Uses autoMemCanUseTool for permission context
12. Registers DreamTask for tracking
13. Rolls back lock on failure

## Exports
- `initAutoDream` - initializes auto-dream background consolidation
- `runAutoDream` - runs consolidation when thresholds met
- `getConfig` - fetches auto-dream configuration
