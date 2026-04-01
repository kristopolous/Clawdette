## Purpose
React components for rendering ExitPlanMode tool usage and result messages in the CLI interface.

## Imports
- **Stdlib**: `react`
- **External**: None
- **Internal**: 
  - `Markdown` component
  - `MessageResponse` component  
  - `RejectedPlanMessage` component
  - `BLACK_CIRCLE` constant
  - `getModeColor` utility
  - `Box`, `Text` from ink
  - `ToolProgressData` type
  - `ProgressMessage` type
  - `getDisplayPath` utility
  - `getPlan` utility
  - `ThemeName` type
  - `Output` type from ExitPlanModeV2Tool

## Logic
Renders messages for different ExitPlanMode states:
- `renderToolUseMessage`: Returns null (no UI for tool use)
- `renderToolResultMessage`: Displays plan approval outcome (exited plan mode, awaiting leader approval, or user approved plan)
- `renderToolUseRejectedMessage`: Shows rejected plan with plan content

Handles empty plans, displays file paths, and integrates with theme/permission mode colors.

## Exports
- `renderToolUseMessage()` - renders tool use message (returns null)
- `renderToolResultMessage(output, progressMessages, options)` - renders tool result based on plan state
- `renderToolUseRejectedMessage(output, options)` - renders rejected plan message
