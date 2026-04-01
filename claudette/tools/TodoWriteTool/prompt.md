## Purpose
Provides the comprehensive prompt for the TodoWrite tool, explaining when and how to use it to manage a task list.

## Imports
- **Internal**: `FILE_EDIT_TOOL_NAME` from FileEditTool/constants

## Logic
Exports:
- `PROMPT` - lengthy multi-section string covering:
  - Purpose: track progress, organize complex tasks, demonstrate thoroughness
  - When to use (7 scenarios): complex multi-step tasks, non-trivial tasks, explicit user request, multiple tasks, after new instructions, start of task (in_progress), completion
  - When NOT to use (4 cases): single trivial task, conversational/informational
  - Rich examples with reasoning for both use and skip cases
  - Task states and management rules (states: pending/in_progress/completed; task must have content + activeForm; exactly one in_progress; completion requirements)
  - Task breakdown guidance
- `DESCRIPTION` - short summary: 'Update the todo list for the current session...'

The prompt blends instruction, policy, and examples to guide model behavior.

## Exports
- `PROMPT` (string)
- `DESCRIPTION` (string)
