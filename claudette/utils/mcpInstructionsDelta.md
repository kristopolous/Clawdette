# mcpInstructionsDelta

## Purpose
Diffs connected MCP servers with instructions against what's already been announced in the current conversation, producing added/removed deltas for incremental system prompt attachments. Supports both server-authored instructions (InitializeResult) and client-side synthesized instructions.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ../services/analytics/growthbook (getFeatureValue_CACHED_MAY_BE_STALE), ../services/analytics/index (logEvent), ../services/mcp/types (ConnectedMCPServer, MCPServerConnection), ../types/message (Message), ./envUtils (isEnvDefinedFalsy, isEnvTruthy)

## Logic
1. **Feature gating** — `isMcpInstructionsDeltaEnabled` checks env override (CLAUDE_CODE_MCP_INSTR_DELTA), then USER_TYPE==='ant', then GrowthBook flag 'tengu_basalt_3kr'. When disabled, prompts.ts falls back to DANGEROUS_uncachedSystemPromptSection (rebuilt every turn).
2. **Announcement tracking** — Scans conversation messages for 'attachment' type with 'mcp_instructions_delta' attachment type. Builds a Set of announced server names by processing addedNames (add to set) and removedNames (remove from set) in order.
3. **Instruction collection** — Gathers instructions from connected MCP servers (server-authored via c.instructions) and client-side instructions (ClientSideInstruction array). Appends client-side blocks to server-authored blocks for servers that have both. Only includes servers that are currently connected.
4. **Diff computation** — Added = servers with instructions not yet announced. Removed = previously announced servers no longer connected. Returns null if nothing changed.
5. **Analytics** — Logs 'tengu_mcp_instructions_pool_change' event with counts (added, removed, prior announced, client-side, messages, attachments).
6. **Immutability assumption** — Instructions are immutable for the life of a connection (set at handshake), so the scan diffs on server name, not content.

## Exports
- `McpInstructionsDelta` — Type: { addedNames: string[], addedBlocks: string[], removedNames: string[] }
- `ClientSideInstruction` — Type: { serverName: string, block: string } — client-authored instruction block to announce alongside server instructions
- `isMcpInstructionsDeltaEnabled()` — Returns true if delta-based MCP instruction announcements are enabled (env override > ant bypass > GrowthBook flag)
- `getMcpInstructionsDelta(mcpClients, messages, clientSideInstructions)` — Diffs connected servers with instructions against announced set. Returns McpInstructionsDelta or null if no change.

## Source
`mcpInstructionsDelta`
