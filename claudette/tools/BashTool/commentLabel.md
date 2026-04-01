## Purpose
Extracts a human-readable label from a bash command's first line comment.

## Imports
- None

## Logic
Exports `extractBashCommentLabel(command)`: If the first line of the command starts with `#` (but not `#!`), returns the comment text with leading `#` and whitespace stripped. Otherwise returns `undefined`. Used for tool-use labels and collapse hints in the UI.

## Exports
- `extractBashCommentLabel(command)` (function)
