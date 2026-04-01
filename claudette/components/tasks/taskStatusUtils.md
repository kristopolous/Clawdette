## Purpose
Provides shared utilities for displaying task status indicators, icons, colors, and activity descriptions across different task types.

## Imports
- **Stdlib**: None
- **External**: `figures`
- **Internal**: `tasks/LocalAgentTask/LocalAgentTask`, `tasks/types`, `utils/collapseReadSearch`

## Logic
1. **Terminal Status Check**: Determines if a task status represents a finished state (completed, failed, or killed).
2. **Icon Resolution**: Returns the appropriate unicode icon based on task status and flags such as idle, awaiting approval, error, or shutdown requested.
3. **Color Resolution**: Maps task status and state flags to semantic theme colors (success, error, warning, background).
4. **Activity Description**: Generates a human-readable activity string for in-process teammates, checking shutdown, approval, and idle states before falling back to recent activity summaries or "working".
5. **Footer Visibility**: Determines whether the background task status footer should be hidden when the spinner tree is active and all visible tasks are in-process teammates.

## Exports
- `isTerminalStatus` - Returns true if a task status represents a finished state.
- `getTaskStatusIcon` - Returns a unicode icon string appropriate for a task's status and state flags.
- `getTaskStatusColor` - Returns a semantic color name appropriate for a task's status and state flags.
- `describeTeammateActivity` - Derives a human-readable activity description for an in-process teammate task.
- `shouldHideTasksFooter` - Returns true when the background task footer should be hidden because the spinner tree is showing all tasks.
