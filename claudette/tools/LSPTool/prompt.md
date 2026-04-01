## Purpose
Provides the tool prompt and metadata for the LSP tool, describing supported operations and parameters.

## Imports
- None

## Logic
Exports:
- `LSP_TOOL_NAME` - constant 'LSP'
- `DESCRIPTION` - multi-line string detailing:
  - Purpose: Interact with LSP servers for code intelligence
  - List of 9 supported operations with brief descriptions
  - Required parameters (filePath, line, character) with note that they are 1-based
  - Important note about LSP server configuration

The prompt is static and serves as documentation for the model when deciding whether and how to use the LSP tool.

## Exports
- `LSP_TOOL_NAME` (constant)
- `DESCRIPTION` (string)
