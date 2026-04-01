## Purpose
React components for rendering BriefTool (SendUserMessage) output in various UI contexts (transcript mode, brief-only chat, default message view).

## Imports
- **Stdlib**: `react`
- **External**: `figures`
- **Internal**:
  - `Markdown` component
  - `BLACK_CIRCLE` constant
  - `Box`, `Text` from ink
  - `ProgressMessage` type
  - `getDisplayPath` utility
  - `formatFileSize` utility
  - `formatBriefTimestamp` utility
  - `Output` type from BriefTool

## Logic
Exports:
- `renderToolUseMessage()`: Returns empty string (no tool-use indicator).
- `renderToolResultMessage(output, progressMessages, options)`: Renders the brief message and attachments. Handles three modes:
  - `isTranscriptMode`: Shows BLACK_CIRCLE gutter, includes message and attachments.
  - `isBriefOnly`: Shows "Claude" label and timestamp, indented 2 columns.
  - Default: No gutter, plain text flow (for regular assistant message).
  - Returns null if no message and no attachments.
- `AttachmentList(attachments)`: Internal component that renders list of attachments using `_temp` for each item. Shows pointer icon, distinguishes `[image]` vs `[file]`, displays path and formatted file size.
- `_temp(att)`: Renders a single attachment line with figure.pointerSmall, type label, path, size.

Uses React compiler runtime (`_c`) for memoization.

## Exports
- `renderToolUseMessage()`
- `renderToolResultMessage(output, progressMessages, options)`
- `AttachmentList` (internal component)
- `_temp` (internal helper)
