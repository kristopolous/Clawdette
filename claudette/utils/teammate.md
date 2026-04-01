# utils/teammate

## Purpose
Provides teammate utilities for agent swarm coordination.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: state AppState, envUtils, teammateContext

## Logic
1. Re-exports in-process teammate utilities from teammateContext.ts
2. `createTeammateContext`, `getTeammateContext`, `isInProcessTeammate`, `runWithTeammateContext`, `TeammateContext` - teammate context functions/types
3. `getParentSessionId` - gets parent session ID for teammate
4. For in-process teammates: team lead's session ID
5. Priority: AsyncLocalStorage (in-process) > dynamicTeamContext (tmux teammates)
6. `dynamicTeamContext` - dynamic team context for runtime team joining
7. When set, values take precedence over environment variables
8. Contains: agentId, agentName, teamName, color, planModeRequired, parentSessionId
9. `setDynamicTeamContext` - sets dynamic team context (called when joining team at runtime)
10. `clearDynamicTeamContext` - clears dynamic team context (called when leaving team)
11. `getDynamicTeamContext` - gets current dynamic team context (for inspection/debugging)
12. `getAgentId` - gets agent ID
13. `getAgentName` - gets agent name
14. `getTeamName` - gets team name
15. `getTeammateColor` - gets teammate color
16. `isTeammate` - checks if running as teammate
17. `isPlanModeRequired` - checks if plan mode required
18. `isEnvTruthy` - checks env var truthy
19. `AppState` - app state type

## Exports
- `createTeammateContext`, `getTeammateContext`, `isInProcessTeammate`, `runWithTeammateContext`, `TeammateContext` - teammate context functions/types
- `getParentSessionId` - gets parent session ID
- `setDynamicTeamContext` - sets dynamic team context
- `clearDynamicTeamContext` - clears dynamic team context
- `getDynamicTeamContext` - gets dynamic team context
- `getAgentId` - gets agent ID
- `getAgentName` - gets agent name
- `getTeamName` - gets team name
- `getTeammateColor` - gets teammate color
- `isTeammate` - checks if teammate
- `isPlanModeRequired` - checks plan mode required
