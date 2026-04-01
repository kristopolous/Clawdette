## Purpose
Renders a single line for a teammate showing their status, activity, and optional message preview.

## Imports
- **Stdlib**: None
- **External**: `figures`, `lodash-es/sample`, `react`
- **Internal**: `constants/spinnerVerbs` (getSpinnerVerbs), `constants/turnCompletionVerbs`, `hooks/useElapsedTime`, `hooks/useTerminalSize`, `ink/stringWidth`, `ink` (Box, Text), `tasks/InProcessTeammateTask/types`, `utils/collapseReadSearch` (summarizeRecentActivities), `utils/format` (formatDuration, formatNumber, truncateToWidth), `utils/ink` (toInkColor), `teammateSelectHint`

## Logic
1. Selects random verbs for idle/active states as fallbacks
2. Tracks idle start time and freezes duration when all teammates become idle
3. Calculates responsive layout based on terminal width, progressively hiding name, hints, and stats
4. Determines activity text from recent activities, last activity description, or random verb
5. Renders status based on shutdown, approval, idle, or active states
6. Optionally renders preview lines extracted from recent teammate messages

## Exports
- `TeammateSpinnerLine` - renders a single teammate row with tree characters, name, status, stats, and optional message preview with responsive width gating
