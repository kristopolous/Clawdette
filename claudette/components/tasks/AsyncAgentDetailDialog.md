## Purpose
Displays a detail dialog for a local async agent task, showing its status, progress, plan, prompt, token/tool counts, and recent tool activity.

## Imports
- **Stdlib**: None
- **External**: `react` (useMemo), `react/compiler-runtime`
- **Internal**: `hooks/useElapsedTime`, `ink`, `keybindings/useKeybinding`, `Tool`, `tools`, `utils/format`, `utils/messages`, `design-system/Byline`, `design-system/Dialog`, `design-system/KeyboardShortcutHint`, `messages/UserPlanMessage`

## Logic
1. **Time and Metrics**: Computes elapsed time from the agent start, extracts token count and tool use count from the agent result or progress.
2. **Plan Extraction**: Extracts the plan content from the agent prompt using tag extraction, falling back to a truncated prompt display.
3. **Progress Display**: When running, shows recent tool activities rendered with tool-specific formatting.
4. **Error Display**: Shows error messages when the agent has failed.
5. **Key Handling**: Binds keyboard shortcuts for close (Esc/Enter/Space), go back (left arrow), and stop (x key for running agents).

## Exports
- `AsyncAgentDetailDialog` - A dialog component that shows detailed information about a local async agent task including status, runtime, token/tool counts, plan or prompt, progress, and errors.
