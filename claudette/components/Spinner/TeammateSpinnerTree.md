## Purpose
Renders a tree structure displaying spinner lines for all running teammates with selection and highlighting support.

## Imports
- **Stdlib**: None
- **External**: `figures`, `react`
- **Internal**: `ink` (Box, Text), `state/AppState`, `tasks/InProcessTeammateTask/InProcessTeammateTask` (getRunningTeammatesSorted), `utils/format` (formatNumber), `TeammateSpinnerLine`, `teammateSelectHint`

## Logic
1. Retrieves running teammate tasks sorted by priority from app state
2. Returns null if no teammates are running
3. Determines leader highlight state based on foreground and selection mode
4. Renders leader row with pointer, tree characters, name, verb, token count, and hints
5. Maps each teammate to a TeammateSpinnerLine component
6. Optionally renders a hide row when in selection mode

## Exports
- `TeammateSpinnerTree` - renders a vertical tree layout of all active teammates with selection, highlighting, and leader status display
