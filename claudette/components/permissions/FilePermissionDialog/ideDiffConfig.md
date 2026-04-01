## Purpose
Defines TypeScript interfaces for IDE diff configuration and a helper function for creating single-edit diff configs.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `ToolInput`

## Logic
1. Defines the FileEdit interface representing a single string replacement edit
2. Defines IDEDiffConfig for configuring IDE diff display with file path, edits, and edit mode
3. Defines IDEDiffChangeInput for representing modified edits from the IDE
4. Defines IDEDiffSupport generic interface for extracting diff config from tool input and applying IDE modifications back
5. Provides createSingleEditDiffConfig helper to construct a config for a single string replacement

## Exports
- `FileEdit` - interface for a single edit with old_string, new_string, and optional replace_all flag
- `IDEDiffConfig` - interface for diff display configuration with file path, edits array, and edit mode
- `IDEDiffChangeInput` - interface for modified diff input from the IDE
- `IDEDiffSupport` - generic interface for getting diff config and applying changes back to tool input
- `createSingleEditDiffConfig` - factory function that creates an IDEDiffConfig for a single edit operation
