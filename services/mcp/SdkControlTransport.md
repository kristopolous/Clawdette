# mcp/SdkControlTransport

## Purpose
Implements transport bridge for SDK MCP servers running in-process within SDK process.

## Imports
- **Stdlib**: (none)
- **External**: `@modelcontextprotocol/sdk`
- **Internal**: (none)

## Logic
1. `SendMcpMessageCallback` - callback type for sending MCP messages
2. `SdkControlClientTransport` - CLI-side transport for SDK MCP servers
3. Bridges communication between CLI's MCP Client and SDK process
4. Converts MCP protocol messages to control requests via stdout/stdin
5. Tracks pending requests via StructuredIO
6. `start` - no-op for this transport
7. `send` - sends message and awaits response via sendMcpMessage callback
8. `close` - marks transport closed, calls onclose handler
9. Preserves message IDs for proper correlation
10. Supports multiple SDK MCP servers simultaneously
11. Control request wrapper includes server_name for routing

## Exports
- `SendMcpMessageCallback` - callback type for MCP message sending
- `SdkControlClientTransport` - CLI-side transport class for SDK MCP servers
