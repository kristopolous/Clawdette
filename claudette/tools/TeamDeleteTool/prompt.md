## Purpose
Provides the prompt string for the TeamDelete tool, explaining when and how to use it.

## Imports
- None

## Logic
Defines `getPrompt()` that returns a formatted string describing:
- What the tool does: removes team and task directories
- Specific paths cleaned: `~/.claude/teams/{team-name}/` and `~/.claude/tasks/{team-name}/`
- Clears team context from current session
- Important caveat: only works when all teammates have terminated
- Use case: cleanup after swarm work completion

## Exports
- `getPrompt()` - returns the prompt string
