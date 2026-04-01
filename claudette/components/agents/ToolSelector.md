## Purpose
Provides an interactive UI component for selecting which tools an agent can access.

## Imports
- **External**: figures, react, react/compiler-runtime
- **Internal**: src/services/mcp/mcpStringUtils.js, src/services/mcp/utils.js, src/Tool.js, src/tools/AgentTool/agentToolUtils.js, src/tools/AgentTool/constants.js, various tool modules (BashTool, ExitPlanModeV2Tool, FileEditTool, FileReadTool, FileWriteTool, GlobTool, GrepTool, ListMcpResourcesTool, NotebookEditTool, ReadMcpResourceTool, TaskOutputTool, TaskStopTool, TodoWriteTool, TungstenTool, WebFetchTool, WebSearchTool), ink/events/keyboard-event.js, ink.js, keybindings/useKeybinding.js, utils/array.js, utils/stringUtils.js, design-system/Divider

## Logic
Categorizes available tools into buckets (read-only, edit, execution, MCP, other) and renders a navigable list with checkboxes. Supports bulk selection by category, individual tool toggling, MCP server grouping, keyboard navigation, and returns the final selection or undefined for "all tools".

## Exports
- `ToolSelector` - renders an interactive tool selection interface with categorized buckets and keyboard navigation
