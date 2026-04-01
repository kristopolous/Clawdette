## Purpose
Dialog component that displays git diffs, supporting both current uncommitted changes and per-turn diffs from conversation history.

## Imports
- **Stdlib**: none
- **External**: `react/compiler-runtime`, `diff` (StructuredPatchHunk type), `react`
- **Internal**: `../../commands.js`, `../../context/overlayContext.js`, `../../hooks/useDiffData.js`, `../../hooks/useTurnDiffs.js`, `../../ink.js`, `../../keybindings/useKeybinding.js`, `../../keybindings/useShortcutDisplay.js`, `../../types/message.js`, `../../utils/stringUtils.js`, `../design-system/Byline.js`, `../design-system/Dialog.js`, `./DiffDetailView.js`, `./DiffFileList`

## Logic
1. Fetches current git diff data and per-turn diffs from messages
2. Builds a sources array combining current changes and historical turn diffs
3. Manages two view modes (list and detail) with keyboard navigation between sources and files
4. Resets file selection when switching sources
5. Renders a Dialog with source selector tabs, diff stats, and either a file list or detailed diff view
6. Handles cancel/back navigation and dismiss shortcuts

## Exports
- `DiffDialog` - main dialog component for viewing and navigating diffs within a Dialog wrapper
