# TodoWriteTool/prompt.ts

## Purpose

Exports the prompt documentation and description for TodoWriteTool. The prompt provides comprehensive guidance on when to create and maintain a todo list, task management best practices, state transitions, and numerous illustrative examples with reasoning.

## Imports

- **Stdlib**: None
- **External**: None
- **Internal**: `FILE_EDIT_TOOL_NAME` (from FileEditTool constants)

## Logic

- `PROMPT`: Extensive multi-line string containing:
  - **Purpose**: "Create and manage a structured task list" to track progress and demonstrate thoroughness
  - **When to Use** (7 scenarios): complex multi-step tasks, non-trivial tasks, user requests, multiple tasks, after new instructions, starting work (mark in_progress before beginning), after completion (add follow-ups)
  - **When NOT to Use** (4 cases): single straightforward task, trivial task, <3 trivial steps, purely conversational/informational
  - **Examples with Reasoning**: Four detailed "GOOD" examples showing todo list value; Four "BAD" examples explaining why not used
  - **Task States and Management**:
    - States: `pending`, `in_progress` (max ONE at a time), `completed`
    - Requirement: Every task has two forms: `content` (imperative, e.g., "Run tests") and `activeForm` (present continuous, e.g., "Running tests")
    - Management rules: update status in real-time, mark complete immediately, complete current before starting new, remove irrelevant tasks
    - Completion conditions: ONLY when fully accomplished; keep in_progress if errors/blockers/unresolved issues
    - Task breakdown guidelines: specific, actionable, small steps; always provide both forms
  - Final note: "When in doubt, use this tool"
- `DESCRIPTION`: Short string explaining tool purpose and key constraints (proactive use, always at least one in_progress, provide both content/activeForm)

## Exports

- `PROMPT: string`
- `DESCRIPTION: string`
