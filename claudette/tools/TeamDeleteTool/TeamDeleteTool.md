## Purpose
Tool for disbanding a swarm team and cleaning up associated directories and state when work is complete.

## Imports
- **External**: `zod/v4`
- **Internal**: 
  - Analytics: `logEvent`, `AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS`
  - Tool utilities: `buildTool`, `Tool`, `ToolDef`
  - Utils: `isAgentSwarmsEnabled`, `lazySchema`, `jsonStringify`
  - Swarm: `TEAM_LEAD_NAME`, `cleanupTeamDirectories`, `readTeamFile`, `unregisterTeamForSessionCleanup`, `clearTeammateColors`, `clearLeaderTeamName`
  - Local: `TEAM_DELETE_TOOL_NAME`, `getPrompt`, `renderToolResultMessage`, `renderToolUseMessage`

## Logic
1. Checks if agent swarms are enabled
2. Reads team configuration to check for active non-lead members
3. Refuses to delete if there are active members remaining (requires requestShutdown first)
4. Cleans up team directories and worktrees
5. Unregisters team from session cleanup handlers
6. Clears teammate color assignments and leader team name
7. Clears team context and inbox from app state
8. Logs analytics event and returns success status

## Exports
- `TeamDeleteTool` - The main tool definition for team deletion
- `Input` - Type for input schema (empty object)
- `Output` - Type for output containing success, message, and team_name
