## Purpose
Provides helper functions for handling reconnect results and errors for MCP servers.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: `commands` (Command), `services/mcp/types` (MCPServerConnection, ServerResource), `Tool`

## Logic
1. handleReconnectResult switches on the client connection type to generate appropriate user messages
2. Returns success true for connected state, false for needs-auth, failed, or unknown states
3. handleReconnectError extracts error messages from unknown error types and formats them with server name

## Exports
- `ReconnectResult` - interface with message and success boolean fields
- `handleReconnectResult` - processes reconnect attempt results and returns user-facing messages
- `handleReconnectError` - formats reconnect errors into user-readable strings
