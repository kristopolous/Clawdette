## Purpose
Manages WebSocket connections to remote sessions for receiving real-time message streams.

## Imports
- **Stdlib**: crypto
- **External**: ws (dynamic import)
- **Internal**: constants/oauth, entrypoints/agentSdkTypes, entrypoints/sdk/controlTypes, utils/debug, utils/errors, utils/log, utils/mtls, utils/proxy, utils/slowOperations

## Logic
Establishes and maintains WebSocket connections to the /v1/sessions/ws endpoint with automatic reconnection, ping/keepalive, and support for both Bun andNode runtimes. Authentication is handled via HTTP headers rather than a separate auth message. Incoming messages are parsed and forwarded to callbacks. The close handler distinguishes between permanent close codes (e.g., unauthorized) and transient codes (e.g., session not found during compaction), retrying the latter with a limited budget. A periodic ping interval keeps the connection alive.

## Exports
- `SessionsWebSocketCallbacks` - callback types for message, close, error, connected, and reconnecting events
- `SessionsWebSocket` - class managing the WebSocket connection with connect, close, reconnect, sendControlRequest, sendControlResponse, and isConnected methods
