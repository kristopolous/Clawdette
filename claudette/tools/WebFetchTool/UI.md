## Purpose
React components for rendering WebFetch tool usage and result messages.

## Imports
- **Stdlib**: `react`
- **External**: None
- **Internal**:
  - `MessageResponse` component
  - `TOOL_SUMMARY_MAX_LENGTH` constant
  - `Box`, `Text` from ink
  - `ProgressMessage` type
  - `ToolProgressData` type
  - `formatFileSize`, `truncate` from utils/format
  - `Output` type from WebFetchTool

## Logic
Exports:
- `renderToolUseMessage(input, options)`: Shows URL (verbose adds prompt too). Returns null if no URL.
- `renderToolUseProgressMessage()`: Shows dim "Fetching…" message during fetch.
- `renderToolResultMessage(output, progressMessages, options)`: Shows "Received X (code status)". Verbose includes full result text below.
- `getToolUseSummary(input)`: Returns truncated URL for summary display.

Uses `TOOL_SUMMARY_MAX_LENGTH` to limit URL length in summaries.

## Exports
- `renderToolUseMessage(input, options)`
- `renderToolUseProgressMessage()`
- `renderToolResultMessage(output, progressMessages, options)`
- `getToolUseSummary(input)`
