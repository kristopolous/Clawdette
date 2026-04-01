# TeamDeleteTool/UI.tsx

## Purpose

Renders terminal UI messages for the TeamDeleteTool, which removes a team member from the agent team. Displays a simple "cleanup team: current" message during tool use and suppresses the cleanup result because a batched shutdown message covers it.

## Imports

- **Stdlib**: React (for React.ReactNode)
- **External**: None
- **Internal**:
  - Utilities: `jsonParse` (from slow operations)
  - Types: `Output` (from TeamDeleteTool)
  - UI Library: None (returns plain strings or null)

## Logic

- **`renderToolUseMessage`**: Returns static string `'cleanup team: current'` - indicates the tool is executing cleanup
- **`renderToolResultMessage`**:
  - Accepts `content` which can be either `Output` object or JSON string
  - Parses string content with `jsonParse` if needed
  - Checks if result is a successful team deletion (`success`, `team_name`, `message` properties present)
  - Returns `null` for successful deletion (suppressed - batched shutdown message covers it)
  - Returns `null` for all other cases (no special rendering)
- The component essentially provides minimal UI feedback; most communication happens through the batched shutdown sequence

## Exports

- `renderToolUseMessage(_input: Record<string, unknown>): React.ReactNode`
- `renderToolResultMessage(content: Output | string, _progressMessages: unknown, options: {verbose: boolean}): React.ReactNode`
