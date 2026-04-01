## Purpose
Renders a status bar footer showing active background tasks as clickable pills or a summary count, with horizontal scrolling for teammate views.

## Imports
- **Stdlib**: None
- **External**: `react` (useMemo, useState), `react/compiler-runtime`, `figures`
- **Internal**: `hooks/useTerminalSize`, `ink/stringWidth`, `state/AppState`, `state/teammateViewHelpers`, `tasks/LocalAgentTask/LocalAgentTask`, `tasks/pillLabel`, `tasks/types`, `utils/horizontalScroll`, `ink`, `tools/AgentTool/agentColorManager`, `design-system/KeyboardShortcutHint`

## Logic
1. **Teammate Pill Mode**: When viewing teammates or all tasks are teammates, renders individual agent pills with horizontal scrolling, arrow indicators, and click-to-foreground behavior.
2. **Summary Mode**: Otherwise, shows a single summary pill with a count of running tasks and a "press down to view" hint when actionable.
3. **Pill Styling**: Agent pills display with color-coded backgrounds, bold for viewed agents, dimmed for idle agents, and inverse highlighting on selection or hover.
4. **Scroll Calculation**: Computes a horizontal scroll window based on pill widths and available terminal width to keep the selected pill visible.

## Exports
- `BackgroundTaskStatus` - A component that renders the background task status bar, either as individual teammate pills or a summary count pill.
- `AgentPill` - A clickable pill component displaying an agent name with color, selection, viewed, and idle states.
- `SummaryPill` - A pill component showing a summary of running tasks with hover and selection highlighting.
- `getAgentThemeColor` - Maps an agent color name to a theme color key.
