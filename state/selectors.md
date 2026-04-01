# selectors.ts

## Purpose
Pure selector functions for deriving computed state from AppState. Provides type-safe queries for UI state like the currently viewed teammate and input routing destinations.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**:
  - `InProcessTeammateTaskState` from `src/tasks/InProcessTeammateTask/types.js`
  - `isInProcessTeammateTask` from `src/tasks/InProcessTeammateTask/types.js`
  - `LocalAgentTaskState` from `src/tasks/LocalAgentTask/LocalAgentTask.js`
  - `AppState` from `src/state/AppStateStore.js`

## Logic
Two selector functions for UI state:

1. **getViewedTeammateTask** - Retrieves the currently viewed teammate task:
   - Returns `undefined` if no teammate is being viewed
   - Returns `undefined` if the task ID doesn't exist
   - Returns `undefined` if the task is not an in-process teammate task
   - Used by components that need to display teammate-specific UI

2. **getActiveAgentForInput** - Determines where user input should be routed:
   - Returns `{ type: 'viewed', task }` when viewing an agent (input goes to that agent)
   - Returns `{ type: 'named_agent', task }` for local agent tasks
   - Returns `{ type: 'leader' }` as the default (input goes to main leader)
   - Used by input routing logic to direct user messages to the correct agent

## Exports
- `getViewedTeammateTask` - Returns the currently viewed teammate task or undefined
- `ActiveAgentForInput` - Discriminated union type for input routing:
  - `{ type: 'leader' }` - Input goes to leader
  - `{ type: 'viewed', task }` - Input goes to viewed teammate
  - `{ type: 'named_agent', task }` - Input goes to named local agent
- `getActiveAgentForInput` - Returns the destination for user input routing
