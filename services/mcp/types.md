# mcp/types

## Purpose
Provides MCP configuration schemas and types for server definitions.

## Imports
- **Stdlib**: (none)
- **External**: `@modelcontextprotocol/sdk`, `zod/v4`
- **Internal**: lazySchema utils

## Logic
1. `ConfigScope` - enum: local, user, project, dynamic, enterprise, claudeai, managed
2. `Transport` - enum: stdio, sse, sse-ide, http, ws, sdk
3. `McpStdioServerConfigSchema` - command, args, env for stdio transport
4. `McpXaaConfigSchema` - boolean flag for Cross-App Access (XAA/SEP-990)
5. `McpOAuthConfigSchema` - clientId, callbackPort, authServerMetadataUrl, xaa
6. `McpSSEServerConfigSchema` - url, headers, headersHelper, oauth for SSE transport
7. `McpSSEIDEServerConfigSchema` - internal IDE type with url, ideName, ideRunningInWindows
8. `McpWebSocketIDEServerConfigSchema` - internal IDE type for WebSocket
9. IdP connection details from settings.xaaIdp (configured once, shared across XAA servers)
10. clientId/clientSecret from parent oauth config + keychain slot for MCP server's AS

## Exports
- `ConfigScope`, `ConfigScopeSchema` - configuration scope types
- `Transport`, `TransportSchema` - transport type enum
- `McpStdioServerConfigSchema` - stdio server config schema
- `McpSSEServerConfigSchema` - SSE server config schema
- `McpSSEIDEServerConfigSchema` - IDE SSE server config schema
- `McpWebSocketIDEServerConfigSchema` - IDE WebSocket server config schema
- `McpOAuthConfigSchema` - OAuth configuration schema
- `McpXaaConfigSchema` - XAA configuration schema
