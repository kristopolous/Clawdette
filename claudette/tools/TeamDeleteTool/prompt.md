# TeamDeleteTool/prompt.ts

## Purpose

Exports a function that generates the prompt/instructions for the TeamDeleteTool. The prompt describes what the tool does, its effects, and important usage constraints.

## Imports

- **Stdlib**: None
- **External**: None
- **Internal**: None

## Logic

- `getPrompt(): string` - Returns a multi-line string with:
  - **Tool Name**: `# TeamDelete`
  - **Purpose**: "Remove team and task directories when the swarm work is complete"
  - **Operations performed**:
    - Removes team directory at `~/.claude/teams/{team-name}/`
    - Removes task directory at `~/.claude/tasks/{team-name}/`
    - Clears team context from the current session
  - **Important constraint**: Tool fails if team still has active members; must gracefully terminate teammates first
  - **Usage**: When all teammates have finished work and need to clean up resources; team name is auto-determined from session context
- Uses template literal with `.trim()` to remove leading/trailing whitespace

## Exports

- `getPrompt(): string`
