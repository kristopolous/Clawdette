# tools/AgentTool/loadAgentsDir

## Purpose
Loads agent definitions from markdown files in agent directories.

## Imports
- **Stdlib**: `path`
- **External**: `bun:bundle`, `lodash-es/memoize`, `zod/v4`
- **Internal**: settings constants, analytics, MCP types, Tool, debug, effor, envUtils, frontmatterParser, lazySchema, log, markdownConfigLoader, permissions, plugins, settings types, JSON utils, FileEdit/Read/WriteTool, agentColorManager, agentMemory, agentMemorySnapshot, builtInAgents

## Logic
1. `AgentMcpServerSpec` - union: string (reference) | { [name]: config } (inline)
2. `AgentMcpServerSpecSchema` - Zod schema for MCP server specs
3. `AgentJsonSchema` - schema for JSON agent validation
4. Fields: description, tools, disallowedTools, prompt, model, maxTurns, memory, color, effort, mcpServers, hooks, permissionMode, autoMemory, source
5. `AgentDefinition` - full agent definition type
6. `BuiltInAgentDefinition` - built-in agent type
7. `loadAgentsFromDir` - loads agents from directory
8. `getActiveAgentsFromList` - filters to active (non-disabled) agents
9. `getAgentDefinitionsWithOverrides` - loads all agents with override resolution
10. `resolveAgentOverrides` - resolves which agents override others by priority
11. `filterAgentsByMcpRequirements` - filters agents by MCP server availability
12. `hasRequiredMcpServers` - checks if required MCP servers available
13. `isBuiltInAgent` - checks if agent is built-in
14. Memoized loading for performance
15. Supports user, project, local, managed, plugin, flag settings sources

## Exports
- `AgentMcpServerSpec` - MCP server spec type
- `AgentMcpServerSpecSchema` - MCP server spec schema
- `AgentJsonSchema` - agent JSON schema
- `AgentDefinition` - agent definition type
- `BuiltInAgentDefinition` - built-in agent type
- `loadAgentsFromDir` - loads agents from directory
- `getActiveAgentsFromList` - gets active agents
- `getAgentDefinitionsWithOverrides` - gets agents with overrides
- `resolveAgentOverrides` - resolves agent overrides
- `filterAgentsByMcpRequirements` - filters by MCP requirements
- `hasRequiredMcpServers` - checks MCP server availability
- `isBuiltInAgent` - checks if built-in agent
