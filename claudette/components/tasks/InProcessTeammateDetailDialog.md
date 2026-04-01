## Purpose
Displays a detail dialog for an in-process teammate task, showing its identity, activity, status, progress, prompt, token/tool counts, and recent tool activity.

## Imports
- **Stdlib**: None
- **External**: `react` (useMemo), `react/compiler-runtime`
- **Internal**: `hooks/useElapsedTime`, `ink`, `keybindings/useKeybinding`, `Tool`, `tools`, `utils/format`, `utils/ink`, `design-system/Byline`, `design-system/Dialog`, `design-system/KeyboardShortcutHint`

## Logic
1. **Identity Display**: Renders the teammate's agent name with their assigned color from the theme.
2. **Activity Description**: Shows a human-readable activity string derived from the teammate's recent activities or state flags.
3. **Time and Metrics**: Computes elapsed time from the task start, extracts token count and tool use count from the result or progress.
4. **Progress Display**: When running, shows recent tool activities rendered with tool-specific formatting.
5. **Error Display**: Shows error messages when the teammate has failed.
6. **Key Handling**: Binds keyboard shortcuts for close (Esc/Enter/Space), go back (left arrow), stop (x key), and foreground (f key for running teammates).

## Exports
- `InProcessTeammateDetailDialog` - A dialog component that shows detailed information about an in-process teammate task including identity, status, runtime, token/tool counts, activity, progress, prompt, and errors.
