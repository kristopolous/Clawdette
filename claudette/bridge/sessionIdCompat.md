# sessionIdCompat

## Purpose
Provides session ID tag translation between `cse_*` (infrastructure/worker) and `session_*` (client-facing compat API) formats.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none - avoids bridgeEnabled.ts → growthbook.ts → config dependency chain)

## Logic
1. `setCseShimGate` - injects GrowthBook gate function to avoid static import of banned modules
2. `toCompatSessionId` - converts `cse_*` → `session_*` for compat API calls (archive, events, etc.)
3. `toInfraSessionId` - converts `session_*` → `cse_*` for infrastructure calls (reconnect, worker endpoints)
4. Respects `_isCseShimEnabled` kill switch - no-op when shim is disabled
5. No-op for IDs already in correct format

## Exports
- `setCseShimGate` - registers the GrowthBook gate for cse_ shim
- `toCompatSessionId` - retags cse_* to session_* for compat API
- `toInfraSessionId` - retags session_* to cse_* for infrastructure calls
