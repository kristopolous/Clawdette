## Purpose
React components for rendering ListMCPResources tool usage and result messages.

## Imports
- **Stdlib**: `react`
- **External**: None
- **Internal**:
  - `MessageResponse` component
  - `OutputLine` component
  - `Text` from ink
  - `ProgressMessage` type
  - `ToolProgressData` type
  - `jsonStringify` utility
  - `Output` type from ListMcpResourcesTool

## Logic
- `renderToolUseMessage(input)`: Shows which MCP server is being queried. If `input.server` is present, displays `List MCP resources from server "server"`; otherwise shows `List all MCP resources`.
- `renderToolResultMessage(output, progressMessages, options)`: If output is empty, shows "(No resources found)" in dim color. Otherwise formats the output array as pretty JSON (2-space indent) and renders via `OutputLine` component.

## Exports
- `renderToolUseMessage(input)`
- `renderToolResultMessage(output, progressMessages, options)`
