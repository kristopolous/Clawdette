# EnterPlanModeTool/UI

## Purpose

Renders terminal UI components for the EnterPlanModeTool, which transitions the AI into "plan mode" for designing implementation approaches. Shows entry confirmation messages and handles user rejection of plan mode.

## Imports

- **Stdlib**: React (for React.ReactNode)
- **External**: None
- **Internal**:
  - Constants: `BLACK_CIRCLE`
  - Utilities: `getModeColor`
  - UI Library: `Box`, `Text` from ink`
  - Types: `ToolProgressData`, `ProgressMessage`, `ThemeName`, `Output`
  - Related Tool: `EnterPlanModeTool` (for Output type)

## Logic

- **`renderToolUseMessage`**: Returns null - tool use has no visual representation
- **`renderToolResultMessage`**: Renders the result of successfully entering plan mode
  - Accepts `_output` and `_progressMessagesForMessage` with theme option
  - Displays a box with:
    - Black circle icon with `getModeColor('plan')` color
    - "Entered plan mode" text
    - Indented dimmed message: "Claude is now exploring and designing an implementation approach."
  - Uses margin spacing for visual separation
- **`renderToolUseRejectedMessage`**: Renders when user declines to enter plan mode
  - Returns a row with black circle in default color and "User declined to enter plan mode" text
  - Includes top margin

## Exports

- `renderToolUseMessage(): React.ReactNode`
- `renderToolResultMessage(_output: Output, _progressMessages: ProgressMessage<ToolProgressData>[], _options: {theme: ThemeName}): React.ReactNode`
- `renderToolUseRejectedMessage(): React.ReactNode`
