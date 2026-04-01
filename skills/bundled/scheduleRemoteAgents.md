# scheduleRemoteAgents

## Purpose
Implements the /schedule-remote-agents bundled skill for scheduling recurring agent runs on remote environments.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: GrowthBook, MCP types, policy limits, Tool, AskUserQuestion/RemoteTriggerTool constants, auth, background/remote preconditions, debug, detectRepository, git, JSON utils, teleport environments, bundledSkills

## Logic
1. `taggedIdToUUID` - decodes mcpsrv_ tagged IDs to UUID strings (base58 decoding)
2. Checks repo for remote access eligibility
3. Fetches environments and creates default cloud environment if needed
4. Uses RemoteTriggerTool for scheduling
5. AskUserQuestion for user confirmation
6. Handles OAuth tokens for authentication
7. Parses git remote for repository detection

## Exports
- `registerScheduleRemoteAgentsSkill` - function that registers the skill
- `taggedIdToUUID` - decodes tagged MCP server IDs to UUIDs
