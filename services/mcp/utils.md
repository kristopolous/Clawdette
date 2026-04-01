# mcp/utils

## Purpose
Provides MCP utility functions for filtering tools, commands, and prompts by server.

## Imports
- **Stdlib**: `crypto`, `path`
- **External**: (none)
- **Internal**: bootstrap state, commands, AgentMcpServerInfo, Tool, AgentTool, cwd, env, settings, JSON utils, MCP config/mcpStringUtils/normalization/types

## Logic
1. `filterToolsByServer` - filters tools by MCP server name prefix (mcp__{normalized}__)
2. `commandBelongsToServer` - checks if command belongs to server
3. MCP prompts: mcp__{server}__{prompt}, MCP skills: {server}:{skill}
4. `filterCommandsByServer` - filters commands by server name
5. `filterMcpPromptsByServer` - filters only prompts (not skills) by server
6. Used by /mcp menu capabilities display (skills shown separately in /skills)
7. `getMcpServerConfigHash` - generates hash for config comparison
8. `getLoggingSafeMcpBaseUrl` - normalizes URL for logging (strips query, trailing slash)
9. `getProjectMcpServerStatus` - gets project MCP server status (pending/approved/rejected)
10. `describeMcpConfigFilePath` - describes config file path by scope
11. `ensureConfigScope` - validates and ensures config scope
12. `getScopeLabel` - gets human-readable scope label

## Exports
- `filterToolsByServer` - filters tools by server name
- `commandBelongsToServer` - checks command server ownership
- `filterCommandsByServer` - filters commands by server name
- `filterMcpPromptsByServer` - filters prompts by server
- `getMcpServerConfigHash` - generates config hash
- `getLoggingSafeMcpBaseUrl` - normalizes URL for logging
- `getProjectMcpServerStatus` - gets project server status
- `describeMcpConfigFilePath` - describes config file path
- `ensureConfigScope` - validates config scope
- `getScopeLabel` - gets scope label
