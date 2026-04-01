# jwtUtils

## Purpose
Provides JWT decoding utilities and a proactive token refresh scheduler for bridge session tokens.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: analytics, debug utils, diagLogs, error utils, JSON utils

## Logic
1. `decodeJwtPayload` - decodes JWT payload segment without signature verification, strips sk-ant-si- prefix
2. `decodeJwtExpiry` - extracts `exp` claim from JWT payload as Unix seconds
3. `createTokenRefreshScheduler` - factory for proactive refresh scheduler
4. Schedules refresh 5 minutes before token expiry (configurable buffer)
5. Tracks failure counts per session, gives up after 3 consecutive failures
6. Uses generation counter to invalidate superseded in-flight async refreshes
7. Supports `scheduleFromExpiresIn` for TTL-based scheduling without JWT decoding

## Exports
- `decodeJwtPayload` - decodes JWT payload as unknown, returns null if malformed
- `decodeJwtExpiry` - extracts exp claim in Unix seconds, null if unparseable
- `createTokenRefreshScheduler` - creates scheduler with schedule/cancel methods
