## Purpose
Displays a detail dialog for a shell task, showing its command, status, runtime, and a tail of its output.

## Imports
- **Stdlib**: None
- **External**: `react` (Suspense, use, useDeferredValue, useEffect, useState), `react/compiler-runtime`
- **Internal**: `utils/format`, `utils/fsOperations`, `utils/task/diskOutput`, `hooks/useTerminalSize`, `ink`, `keybindings/useKeybinding`, `design-system/Byline`, `design-system/Dialog`, `design-system/KeyboardShortcutHint`

## Logic
1. **Output Fetching**: Reads the tail of the task output file (last 8192 bytes) asynchronously to avoid loading large files, with periodic refresh while the shell is running.
2. **Key Handling**: Binds keyboard shortcuts for close (Esc/Enter/Space), go back (left arrow), and stop (x key for running shells).
3. **Detail Rendering**: Displays the shell status with color-coded text, runtime duration, the command (or "Script" for monitors), and the output in a scrollable bordered box.
4. **Output Display**: Suspense-based rendering of shell output with line truncation to fit terminal width, showing line count and total file size when output is incomplete.

## Exports
- `ShellDetailDialog` - A dialog component that shows detailed information about a running or completed shell task, including command, status, runtime, and output.
- `ShellOutputContent` - A component that renders the tail of a shell task's output file with line count and file size information.
