## Purpose
React components for rendering FileRead tool usage and result messages, error displays, and user-facing naming.

## Imports
- **Stdlib**: `react`
- **External**: `@anthropic-ai/sdk` (ToolResultBlockParam type)
- **Internal**:
  - `extractTag` utility
  - `FallbackToolUseErrorMessage` component
  - `FilePathLink` component
  - `MessageResponse` component
  - `Text` from ink
  - `FILE_NOT_FOUND_CWD_NOTE`, `getDisplayPath` from utils/file
  - `formatFileSize` from utils/format
  - `getPlansDirectory` from utils/plans
  - `getTaskOutputDir` from utils/task/diskOutput
  - `Input`, `Output` types from FileReadTool

## Logic
Exports:
- `renderToolUseMessage(input, options)`: Renders a concise summary of the read operation. For agent output files, returns empty string to hide parentheses. Shows file path (verbose or display-path) and optionally pages or offset/limit. Wraps path in FilePathLink.
- `renderToolUseTag(input)`: For agent output files, renders the task ID as dim text tag.
- `renderToolResultMessage(output)`: Summarizes the read result based on `output.type`:
  - `image`: "Read image (size)"
  - `notebook`: "Read N cells"
  - `pdf`: "Read PDF (size)"
  - `parts`: "Read N pages (size)"
  - `text`: "Read N lines"
  - `file_unchanged`: "Unchanged since last read" (dim)
- `renderToolUseErrorMessage(result, options)`: Short error messages for file-not-found or tool_use_error tag; falls back to generic error component.
- `userFacingName(input)`: Returns 'Reading Plan' for plan files, 'Read agent output' for agent outputs, else 'Read'.
- `getToolUseSummary(input)`: Returns display path or agent task ID for summary display.

## Exports
- `renderToolUseMessage(input, options)`
- `renderToolUseTag(input)`
- `renderToolResultMessage(output)`
- `renderToolUseErrorMessage(result, options)`
- `userFacingName(input)`
- `getToolUseSummary(input)`
