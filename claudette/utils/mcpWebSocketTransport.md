# utils/mcpWebSocketTransport

## Purpose
Implements a WebSocket transport for the Model Context Protocol (MCP) SDK, supporting both Bun (native WebSocket) and Node.js (ws package) runtimes.

## Imports
- **External**: `@modelcontextprotocol/sdk/shared/transport.js`, `@modelcontextprotocol/sdk/types.js`, `ws`
- **Internal**: `./diagLogs.js`, `./errors.js`, `./slowOperations.js`

## Logic
1. Defines `WebSocketTransport` class implementing the MCP `Transport` interface
2. Detects Bun runtime via `typeof Bun !== 'undefined'` to choose between native WebSocket and ws package APIs
3. Constructor accepts a `WebSocketLike` interface (minimal shared interface for both runtimes)
4. Constructor sets up `opened` promise that resolves when the socket is open, with different event binding for Bun (`addEventListener`) vs Node (`on`)
5. Attaches persistent message/error/close event handlers at construction time
6. Bun handlers: `onBunMessage` (parses `MessageEvent.data`), `onBunError`, `onBunClose`
7. Node handlers: `onNodeMessage` (receives `Buffer`), `onNodeError`, `onNodeClose`
8. All handlers parse incoming data via `jsonParse` and validate against `JSONRPCMessageSchema`
9. `start()` — can only be called once; waits for `opened` promise; verifies socket is open
10. `send()` — serializes message via `jsonStringify`; sends synchronously on Bun, with callback+Promise on Node
11. `close()` — closes socket if connecting or open; always runs `handleCloseCleanup()` to remove listeners
12. `handleCloseCleanup()` — removes all event listeners and calls `onclose` callback
13. `handleError()` — logs diagnostic event and calls `onerror` callback with `toError(error)`

## Exports
- `WebSocketTransport` — class implementing MCP `Transport` interface; constructor takes a `WebSocketLike`; methods: `start()`, `send(message)`, `close()`; callbacks: `onclose`, `onerror`, `onmessage`
