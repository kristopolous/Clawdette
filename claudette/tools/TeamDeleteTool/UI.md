## Purpose
React components for rendering TeamDelete tool usage and result messages.

## Imports
- **Stdlib**: `react`
- **External**: None
- **Internal**:
  - `jsonParse` utility
  - `Output` type from TeamDeleteTool

## Logic
- `renderToolUseMessage`: Returns static string 'cleanup team: current' indicating tool use.
- `renderToolResultMessage`: Parses the result (string or Output object), checks for success with team_name and message, and suppresses cleanup result (returns null) because batched shutdown message covers it. Returns null for all other cases as well.

## Exports
- `renderToolUseMessage(input)` - renders tool use message
- `renderToolResultMessage(content, progressMessages, options)` - renders (suppressed) tool result
