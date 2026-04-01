## Purpose
Shared module for spawning multiple agents/teammates, extracted from TeammateTool to allow reuse by AgentTool.

## Imports
Many internal modules from bootstrap/state, state/AppState, Task.js, Tool.js, tasks/InProcessTeammateTask/types, utils/agentId, utils/bash/shellQuote, utils/bundledMode, utils/config, utils/cwd, utils/debug, utils/errors, utils/execFileNoThrow, utils/model/model, utils/permissions/PermissionMode, utils/swarm/backends/*, utils/swarm/teammateModeSnapshot, utils/swarm/backends/types, utils/swarm/constants, utils/swarm/It2SetupPrompt, utils/swarm/inProcessRunner, utils/swarm/spawnInProcess, utils/swarm/spawnUtils, utils/swarm/teamHelpers, utils/swarm/teammateLayoutManager, utils/swarm/teammateModel, utils/task/framework, utils/teammateMailbox, and ../AgentTool/loadAgentsDir.

## Logic
Exports at least:
- `resolveTeammateModel(inputModel, leaderModel)`: Resolves the model for a teammate, handling 'inherit' alias and falling back to defaults.
- Likely other functions for spawning teammates in-process or via external processes, managing tmux panes, task registration, etc. The file is >1000 lines and contains orchestration logic for creating new agent tasks, inheriting environment, permissions, and session state.

Because it's shared, it consolidates teammate creation logic used by multiple tool implementations.

## Exports
- `resolveTeammateModel(inputModel, leaderModel)` (function)
- plus other internal functions used by TeammateTool and AgentTool (not fully enumerated here)
