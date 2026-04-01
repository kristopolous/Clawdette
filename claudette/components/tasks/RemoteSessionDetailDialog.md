## Purpose
Displays a detail dialog for a remote agent session, with specialized views for ultraplan sessions, review sessions, and standard remote sessions.

## Imports
- **Stdlib**: None
- **External**: `react` (useMemo, useState), `react/compiler-runtime`, `figures`
- **Internal**: `constants/figures`, `hooks/useElapsedTime`, `ink`, `keybindings/useKeybinding`, `tasks/RemoteAgentTask/RemoteAgentTask`, `tools/AgentTool/constants`, `tools/AskUserQuestionTool/prompt`, `tools/ExitPlanModeTool/constants`, `utils/browser`, `utils/errors`, `utils/format`, `utils/messages`, `utils/messages/mappers`, `utils/stringUtils`, `utils/teleport`, `CustomSelect/select`, `design-system/Byline`, `design-system/Dialog`, `design-system/KeyboardShortcutHint`, `Message`

## Logic
1. **Ultraplan View**: For ultraplan sessions, displays session stats (agents working, tool calls, last tool call), phase status, and a session URL link with options to open in browser or stop.
2. **Review View**: For review sessions, shows a stage pipeline (Setup → Find → Verify → Dedupe) with current stage highlighting, review counts, and session URL.
3. **Standard View**: For other remote sessions, displays status, runtime, title, progress, session URL, and recent messages from the session log.
4. **Teleport Support**: Handles teleporting to a remote session with error display and loading state.
5. **Tool Use Formatting**: Formats tool use summaries compactly, with special handling for exit plan mode and ask user question tools.
6. **Stop Confirmation**: Shows a confirmation dialog before terminating ultraplan or review sessions.

## Exports
- `RemoteSessionDetailDialog` - A dialog component that shows detailed information about a remote agent session, delegating to specialized views for ultraplan and review sessions.
- `formatToolUseSummary` - Creates a compact one-line summary of a tool use from its name and input.
- `UltraplanSessionDetail` - Renders detail view for an ultraplan session with stats and controls.
- `ReviewSessionDetail` - Renders detail view for a review session with stage pipeline and counts.
- `StagePipeline` - Renders a visual pipeline of review stages with the current stage highlighted.
- `reviewCountsLine` - Generates a stage-appropriate counts string for a review session.
