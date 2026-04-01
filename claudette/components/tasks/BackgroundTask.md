## Purpose
Renders a compact one-line display for any background task type, showing its description and current status.

## Imports
- **Stdlib**: None
- **External**: `react`, `react/compiler-runtime`
- **Internal**: `ink`, `utils/format`, `utils/ink`, `utils/stringUtils`, `constants/figures`

## Logic
1. **Type Dispatch**: Switches on the task type to render the appropriate display for each task category (local_bash, remote_agent, local_agent, in_process_teammate, local_workflow, monitor_mcp, dream).
2. **Content Truncation**: Truncates task descriptions, commands, and titles to fit within the available width.
3. **Status Indicators**: Appends status text (done, error, stopped, unread) with appropriate coloring for completed tasks.
4. **Specialized Rendering**: Uses RemoteSessionProgress for remote agents, ShellProgress for bash tasks, and teammate activity descriptions for in-process teammates.

## Exports
- `BackgroundTask` - A component that renders a compact one-line display for any background task, showing its description and status indicator.
