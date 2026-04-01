## Purpose
Generates a unified list of autocomplete suggestions from files, MCP resources, and agents, scoring and merging them into a single ordered result set.

## Imports
- **Stdlib**: `path` (`basename`)
- **External**: fuse` (Fuse)
- **Internal**:
  - `components/PromptInput/PromptInputFooterSuggestions` - `SuggestionItem` type
  - `hooks/fileSuggestions` - `generateFileSuggestions`
  - `services/mcp/types` - `ServerResource`
  - `tools/AgentTool/agentColorManager` - `getAgentColor`
  - `tools/AgentTool/loadAgentsDir` - `AgentDefinition`
  - `utils/format` - `truncateToWidth`
  - `utils/log` - `logError`
  - `utils/theme` - `Theme`

## Logic
- Defines source types for files, MCP resources, and agents; union `SuggestionSource`.
- `createSuggestionFromSource` maps each source to a `SuggestionItem` with a deterministic `id`.
- `generateAgentSuggestions` converts agents to sources, truncates `whenToUse` descriptions, and optionally filters by query.
- `generateUnifiedSuggestions` is async:
  - Short-circuits if no query and not `showOnEmpty`.
  - Runs `generateFileSuggestions` (Rust/nucleo-backed) and agent generation in parallel.
  - Transforms file suggestions into `FileSuggestionSource` including their nucleo `score`.
  - Collects all MCP resources from the `mcpResources` record into `McpResourceSuggestionSource`.
  - If query is empty: combines all sources, applies `MAX_UNIFIED_SUGGESTIONS` (15) limit, maps to items.
  - If query present:
    - Non-file sources (MCP + agents) are scored usingFuse with keys `displayText`, `name`, `server`, `description`, `agentType` and weights.
    - File sources already have scores (lower is better in nucleo/Fuse). Combine all scored sources, sort ascending by score, take top 15.
- Truncates MCP resource descriptions (`description`/`name`/`uri`) to 60 characters width.

## Exports
- `generateUnifiedSuggestions` - async function `(query: string, mcpResources: Record<string, ServerResource[]>, agents: AgentDefinition[], showOnEmpty?: boolean) => Promise<SuggestionItem[]>`
