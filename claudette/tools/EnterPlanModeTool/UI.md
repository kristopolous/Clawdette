## Purpose
React components for rendering EnterPlanMode tool usage and result messages.

## Imports
- **Stdlib**: `react`
- **External**: None
- **Internal**:
  - `BLACK_CIRCLE` constant
  - `getModeColor` utility
  - `Box`, `Text` from ink
  - `ProgressMessage` type
  - `ThemeName` type
  - `ToolProgressData` type
  - `Output` type from EnterPlanModeTool

## Logic
- `renderToolUseMessage`: Returns null (no message when entering plan mode).
- `renderToolResultMessage`: Renders success message showing user entered plan mode with explanation that Claude is exploring/designing.
- `renderToolUseRejectedMessage`: Renders message when user declines plan mode entry.

Uses theme colors from permission mode.

## Exports
- `renderToolUseMessage()` - returns null
- `renderToolResultMessage(output, progressMessages, options)` - renders entered plan mode message
- `renderToolUseRejectedMessage()` - renders user declined message
