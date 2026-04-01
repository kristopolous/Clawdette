## Purpose
Renders a single line of shell output with optional JSON formatting, URL linkification, and ANSI handling.

## Imports
- **Stdlib**: None
- **External**: `react`, `react/compiler-runtime`
- **Internal**: `hooks/useTerminalSize.js`, `ink.js` (Ansi, Text), `utils/hyperlink.js`, `utils/slowOperations.js`, `utils/terminal.js`, `MessageResponse.js`, `messageActions.js`, `ExpandShellOutputContext.js`

## Logic
Attempts to format JSON content with precision loss detection, optionally linkifies URLs, and renders content with ANSI codes preserved. Truncates content based on terminal width unless verbose mode or expanded output is enabled. Strips underline ANSI codes specifically to prevent visual leaks while preserving other formatting.

## Exports
- `tryFormatJson` - Attempts to parse and pretty-print a JSON line, returning original if precision would be lost
- `tryJsonFormatContent` - Applies JSON formatting to all lines in content with a length guard
- `linkifyUrlsInText` - Replaces HTTP(S) URLs in text with terminal hyperlinks
- `OutputLine` - React component that renders a formatted shell output line
- `stripUnderlineAnsi` - Removes underline ANSI escape sequences from content
