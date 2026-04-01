## Purpose
React components for rendering LSP tool usage and result messages in the CLI.

## Imports
- **Stdlib**: `react`
- **External**: `@anthropic-ai/sdk` (ToolResultBlockParam type)
- **Internal**:
  - `CtrlOToExpand` component
  - `FallbackToolUseErrorMessage` component
  - `MessageResponse` component
  - `Box`, `Text` from ink
  - `getDisplayPath` utility
  - `extractTag` utility
  - `Input`, `Output` types from LSPTool
  - `getSymbolAtPosition` from symbolContext

## Logic
Exports:
- `userFacingName()`: Returns 'LSP'.
- `renderToolUseMessage(input, options)`: Renders a summary of the LSP operation. For position-based operations (goToDefinition, findReferences, hover, goToImplementation), attempts to extract the symbol at the given position using `getSymbolAtPosition` and displays it; falls back to showing file and position. For other operations, shows operation name and file.
- `renderToolUseErrorMessage(result, options)`: Shows error message; if not verbose and result contains tool_use_error tag, returns simplified error; otherwise uses FallbackToolUseErrorMessage.
- `renderToolResultMessage(output, progressMessages, options)`: If output has resultCount and fileCount, uses `LSPResultSummary` component (collapsed/expanded view with CtrlOToExpand); otherwise renders raw result text.

`LSPResultSummary` (internal function component):
- Displays operation-specific labels (e.g., "definitions", "references").
- Shows count text: "Found X result(s)" or "Hover info available".
- Shows "across Y files" when fileCount > 1.
- In verbose mode, shows full content indented.
- In normal mode, shows one-line message with expand hint.

Uses React compiler runtime (`_c`) for optimized renders.

## Exports
- `userFacingName()`
- `renderToolUseMessage(input, options)`
- `renderToolUseErrorMessage(result, options)`
- `renderToolResultMessage(output, progressMessages, options)`
