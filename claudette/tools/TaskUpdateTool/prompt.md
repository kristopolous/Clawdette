## Purpose
Provides the prompt for the TaskUpdate tool, describing how to update tasks in the task list.

## Imports
- None

## Logic
Exports:
- `DESCRIPTION` - 'Update a task in the task list'
- `PROMPT` - structured guide with sections:
  - When to use: mark tasks resolved (with completion rules), delete tasks, update details
  - Fields you can update: status, subject, description, activeForm, owner, metadata, addBlocks, addBlockedBy
  - Status workflow: pending → in_progress → completed (deleted is removal)
  - Staleness note: read latest state with TaskGet before updating
  - Examples: marking in_progress/completed/deleted, claiming, setting dependencies

Emphasizes ONLY mark completed when FULLY accomplished; keep in_progress if blocked.

## Exports
- `DESCRIPTION` (string)
- `PROMPT` (string)
