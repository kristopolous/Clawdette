## Purpose
Provides the prompt for TeamCreate tool, explaining when and how to create teams for multi-agent work.

## Imports
- None

## Logic
Exports `getPrompt(): string` that returns a comprehensive guide covering:
- When to use: user asks for team/swarm/coordination; tasks complex enough for parallel work.
- Choosing agent types: read-only vs full-capability vs custom agents (based on tools they need).
- Team workflow steps: create team → create tasks → spawn teammates → assign tasks → work → mark complete → shutdown.
- Task ownership via TaskUpdate.
- Automatic message delivery: teammates' messages auto-delivered as new turns; no manual inbox check.
- Teammate idle state: normal after each turn; idle teammates can receive messages; don't treat idle as error.
- Discovering team members: read team config at `~/.claude/teams/{team-name/configon`; use names (not UUIDs) for messaging.
- Task list coordination: shared task list directory; rules for claiming tasks (prefer ID order), creating tasks, marking complete, coordinating.
- Communication notes: use SendMessage to teammates; don't use terminal; don't send structured JSON status; TaskUpdate for task status; system auto-sends idle notifications to lead.

The prompt also includes the JSON schema for the tool's input (team_name, description) and file paths created.

## Exports
- `getPrompt(): string`
