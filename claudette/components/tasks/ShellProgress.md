## Purpose
Renders a compact status indicator for shell tasks showing their current state as colored text.

## Imports
- **Stdlib**: None
- **External**: `react`
- **Internal**: `ink`

## Logic
1. **Status Mapping**: Maps task status values to display labels and semantic colors (completed/success, failed/error, killed/warning, running/undefined).
2. **Shell Progress**: Switches on the shell status to render the appropriate status text with predefined labels (done, error, stopped, running).

## Exports
- `TaskStatusText` - A component that renders a task status as dimmed colored text with optional label and suffix.
- `ShellProgress` - A component that renders a shell task's status indicator based on its current state.
