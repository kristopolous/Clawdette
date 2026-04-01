## Purpose
Provides symbol extraction utility to show context in LSP tool use messages.

## Imports
- **Internal**:
  - `logForDebugging` utility
  - `truncate` utility
  - `getFsImplementation` utility
  - `expandPath` utility

## Logic
Exports `getSymbolAtPosition(filePath, line, character)`:
- Synchronously reads first 64KB of the file (performance optimization; symbol likely within recent edit window).
- Splits content into lines and validates line/character bounds.
- Uses regex `[\w$'!]+|[+\-*/%&|^~<>=]+` to match identifiers, Rust lifetimes, macros, and operators at the character position.
- Returns the matched symbol truncated to 30 characters, or null if not found.
- Wraps all I/O in try/catch; logs errors with `logForDebugging` (warn level) for non-critical failures.

This function is called from `renderToolUseMessage` in LSPTool UI to provide user-friendly context like `symbol: "myFunction" in: "src/file.ts"`.

## Exports
- `getSymbolAtPosition(filePath, line, character)` - function returning string or null
