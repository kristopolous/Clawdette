# mcp/xaa

## Purpose
Implements Cross-App Access (XAA) / Enterprise Managed Authorization via RFC 8693 Token Exchange and RFC 7523 JWT Bearer Grant.

## Imports
- **Stdlib**: (none)
- **External**: `@modelcontextprotocol/sdk`, `zod/v4`
- **Internal**: lazySchema, log, JSON utils

## Logic
1. `XAA_REQUEST_TIMEOUT_MS` (30s) - request timeout
2. Token exchange flow: id_token → ID-JAG → access_token
3. `TOKEN_EXCHANGE_GRANT`, `JWT_BEARER_GRANT`, `ID_JAG_TOKEN_TYPE`, `ID_TOKEN_TYPE` - OAuth grant/type constants
4. `makeXaaFetch` - creates fetch wrapper with timeout and optional abort signal composition
5. `normalizeUrl` - normalizes URL per RFC 3986 §6.2.2 (lowercase scheme+host, drop default port, strip trailing slash)
6. `XaaTokenExchangeError` - error class with shouldClearIdToken flag
7. shouldClearIdToken logic:
   - 4xx / invalid_grant / invalid_token → clear id_token
   - 5xx → keep id_token (IdP down, may still be valid)
   - 200 with invalid body → clear (protocol violation)
8. Four Layer-2 operations aligned with TS SDK PR #1593
9. One Layer-3 orchestrator composing the operations
10. Spec refs: ID-JAG draft, MCP SEP-990, RFC 8693, RFC 7523, RFC 9728

## Exports
- `XaaTokenExchangeError` - error class for token exchange failures
- `makeXaaFetch` - creates XAA fetch wrapper with timeout
- `normalizeUrl` - normalizes URL for comparison
- Token grant/type constants
