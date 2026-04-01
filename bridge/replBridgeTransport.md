# replBridgeTransport

## Purpose
Defines the transport abstraction for replBridge, unifying v1 (HybridTransport/WS) and v2 (SSETransport + CCRClient) under a common interface.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: SDK types, CCRClient, HybridTransport, SSETransport, debug utils, error utils, sessionIngressAuth, sessionState, workSecret

## Logic
1. `ReplBridgeTransport` interface defines unified surface: write, close, connect, set callbacks, state reporting
2. `createV1ReplTransport` - wraps HybridTransport, no-ops for v2-only methods (reportState, reportDelivery)
3. `createV2ReplTransport` - wraps SSETransport (reads) + CCRClient (writes), handles registration and heartbeat
4. v2 uses JWT auth (session_id claim) vs v1 OAuth tokens
5. Supports sequence number carryover for transport swaps without full history replay
6. Outbound-only mode for mirror-mode attachments
7. Flush drains write queue before close (v2 only)

## Exports
- `ReplBridgeTransport` - interface for bridge transport operations
- `createV1ReplTransport` - creates v1 adapter from HybridTransport
- `createV2ReplTransport` - creates v2 adapter with SSE + CCRClient
