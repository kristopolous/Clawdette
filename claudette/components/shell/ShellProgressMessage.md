## Purpose
Renders a progress message for shell command output with line count, file size, and elapsed time information.

## Imports
- **Stdlib**: None
- **External**: `react`, `react/compiler-runtime`, `strip-ansi`
- **Internal**: `ink.js` (Box, Text), `utils/format.js` (formatFileSize), `MessageResponse.js`, `OffscreenFreeze.js`, `ShellTimeDisplay.js`

## Logic
Strips ANSI codes from shell output, splits into lines, and displays either a "Running…" indicator with time display when no output exists, or the last 5 lines of output with metadata (line count, file size, elapsed time). In verbose mode, shows all output instead of truncating.

## Exports
- `ShellProgressMessage` - React component that renders shell command progress with output preview and timing metadata
