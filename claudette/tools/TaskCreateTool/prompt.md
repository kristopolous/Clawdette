## Purpose
Provides the prompt for TaskCreate, guiding when to create tasks and how to define them.

## Imports
- **Internal**: `isAgentSwarmsEnabled` from utils/agentSwarmsEnabled

## Logic
Exports:
- `DESCRIPTION` = 'Create a new task in the task list'
- `getPrompt(): string`: Returns comprehensive instructions including:
  - Purpose: organize tasks, track progress, demonstrate thoroughness.
  - When to use (8 scenarios): complex multi-step tasks, non-trivial tasks, plan mode, user requested todo list, multiple tasks, after new instructions, marking start/in-progress, after task completion to add follow-ups.
  - When NOT to use (4 cases): single straightforward, trivial, <3 steps, conversational/informational.
  - Task fields: subject (imperative title), description, activeForm (optional present continuous), status defaults to pending.
  - Tips: clear subjects, set dependencies via TaskUpdate, check TaskList to avoid duplicates.
  - If agent swarms enabled (`isAgentSwarmsEnabled`), includes extra teammate tips: include detail for other agents; assign via TaskUpdate; check TaskList first.

The prompt adapts based on the feature flag to include teammate-specific guidance.

## Exports
- `DESCRIPTION` (string)
- `getPrompt(): string`
