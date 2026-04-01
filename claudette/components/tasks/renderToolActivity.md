## Purpose
Renders a human-readable description of a tool activity for display in task progress views.

## Imports
- **Stdlib**: None
- **External**: `react`
- **Internal**: `ink`, `Tool`

## Logic
1. **Tool Lookup**: Finds the tool definition by name from the available tools registry.
2. **Input Parsing**: Validates the activity input against the tool's input schema, using an empty object on parse failure.
3. **Rendering**: Gets the user-facing tool name and renders the tool use message with arguments, falling back to the raw tool name if the tool is not found or rendering fails.

## Exports
- `renderToolActivity` - Renders a tool activity as a React node showing the tool name and its arguments, using the tool registry for formatting.
