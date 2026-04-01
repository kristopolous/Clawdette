## Purpose
Displays a detail dialog for a dream task, showing its status, elapsed time, sessions reviewing, files touched, and recent turns.

## Imports
- **Stdlib**: None
- **External**: `react`, `react/compiler-runtime`
- **Internal**: `hooks/useElapsedTime`, `ink`, `keybindings/useKeybinding`, `utils/stringUtils`, `design-system/Byline`, `design-system/Dialog`, `design-system/KeyboardShortcutHint`

## Logic
1. **Time Tracking**: Computes elapsed time from the task start, updating every second while the task is running.
2. **Turn Display**: Shows the most recent 6 turns with text output and tool use counts, collapsing earlier turns into a count label.
3. **Key Handling**: Binds keyboard shortcuts for close (Esc/Enter/Space), go back (left arrow), and stop (x key for running tasks).
4. **Status Rendering**: Displays the task status with color-coded text (running, completed, or error) and a subtitle with elapsed time, session count, and file touch count.

## Exports
- `DreamDetailDialog` - A dialog component that shows detailed information about a dream task including status, runtime, sessions reviewing, files touched, and recent turns.
