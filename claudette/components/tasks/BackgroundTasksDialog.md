## Purpose
Provides a dialog for viewing, navigating, and managing all active background tasks including shells, agents, teammates, workflows, and dream tasks.

## Imports
- **Stdlib**: None
- **External**: `react` (ReactNode, useEffect, useEffectEvent, useMemo, useRef, useState), `react/compiler-runtime`, `bun:bundle`, `figures`
- **Internal**: `coordinator/coordinatorMode`, `hooks/useTerminalSize`, `state/AppState`, `state/teammateViewHelpers`, `tasks/types`, `utils/array`, `utils/swarm/constants`, `commands/ultraplan`, `context/overlayContext`, `ink`, `keybindings/useKeybinding`, `keybindings/useShortcutDisplay`, `design-system/Byline`, `design-system/Dialog`, `design-system/KeyboardShortcutHint`

## Logic
1. **Task Categorization**: Filters and sorts background tasks into categories (bash, remote agents, local agents, teammates, workflows, monitors, dreams) with running tasks listed first.
2. **View State Management**: Supports list and detail modes, auto-skipping to detail view when only one task exists or when an initial task ID is provided.
3. **Keyboard Navigation**: Handles up/down for list navigation, Enter to view details, x to stop running tasks, f to foreground teammates, and left/Esc to close.
4. **Task Lifecycle**: Monitors task removal and automatically returns to list view or closes the dialog when the viewed task is no longer a background task.
5. **Grouped Rendering**: Renders task groups with section headers, teammate grouping by team name, and leader entry for returning to the main agent view.

## Exports
- `BackgroundTasksDialog` - A dialog component that lists all active background tasks with navigation, detail views, and management actions (stop, foreground).
- `toListItem` - Converts a background task state into a list item with id, type, label, status, and task reference.
- `getSelectableBackgroundTasks` - Filters background tasks excluding any that are currently foregrounded.
