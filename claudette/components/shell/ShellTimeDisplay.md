## Purpose
Displays elapsed time and optional timeout duration for shell commands in a dimmed text format.

## Imports
- **Stdlib**: None
- **External**: `react`, `react/compiler-runtime`
- **Internal**: `ink.js` (Text), `utils/format.js` (formatDuration)

## Logic
Formats and displays elapsed time (converted from seconds to milliseconds) and/or a timeout value using formatDuration. Returns null if neither value is provided. Renders different formats: timeout only, elapsed only, or both combined with a separator.

## Exports
- `ShellTimeDisplay` - React component that renders elapsed time and/or timeout duration as dimmed text
