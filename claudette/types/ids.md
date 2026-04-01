# ids

## Purpose
Provides branded types for session and agent IDs to prevent mixing at compile time.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `SessionId` - branded string type with __brand marker
2. `AgentId` - branded string type with __brand marker for subagent context
3. `asSessionId` - casts raw string to SessionId (use sparingly)
4. `asAgentId` - casts raw string to AgentId (use sparingly)
5. `AGENT_ID_PATTERN` - regex: `^a(?:.+-)?[0-9a-f]{16}$`
6. `toAgentId` - validates and brands string as AgentId, returns null if invalid
7. Pattern matches format from createAgentId(): `a` + optional `<label>-` + 16 hex chars

## Exports
- `SessionId` - branded session ID type
- `AgentId` - branded agent ID type
- `asSessionId` - cast function for SessionId
- `asAgentId` - cast function for AgentId
- `toAgentId` - validate and cast function for AgentId
