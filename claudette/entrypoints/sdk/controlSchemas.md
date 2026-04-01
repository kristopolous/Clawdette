# controlSchemas

## Purpose
Zod schemas for the SDK control protocol between SDK implementations and the CLI.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: lazySchema, coreSchemas (messages, agents, hooks, permissions, MCP)

## Logic
1. `JSONRPCMessagePlaceholder` - placeholder for @modelcontextprotocol/sdk JSONRPCMessage
2. `SDKHookCallbackMatcherSchema` - routes hook callbacks with matcher, timeout, callback IDs
3. `SDKControlInitializeRequestSchema` - initializes SDK with hooks, MCP servers, agents, prompts
4. `SDKControlInitializeResponseSchema` - returns commands, session info, capabilities
5. `SDKControlSetModelRequestSchema` - changes model mid-session
6. `SDKControlSetPermissionModeRequestSchema` - changes permission mode
7. `SDKControlCanUseToolRequestSchema` - tool permission check
8. `SDKControlElicitationRequestSchema` - elicitation flow for user input
9. Used by SDK builders (Python SDK) to communicate with CLI process

## Exports
- `SDKHookCallbackMatcherSchema` - hook callback routing schema
- `SDKControlInitializeRequestSchema` - session initialization schema
- `SDKControlInitializeResponseSchema` - initialization response schema
- (Many more control protocol schemas)
