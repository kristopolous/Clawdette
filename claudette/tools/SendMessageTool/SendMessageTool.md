## Purpose
Main tool implementation for SendMessage — sending messages to other agents, handling routing, and legacy protocol responses.

## Imports
Many internal modules from bootstrap/state, bridge/replBridgeHandle, Tool.js, tasks/InProcessTeammateTask/InProcessTeammateTask, tasks/LocalAgentTask/LocalAgentTask, tasks/LocalMainSessionTask, types/ids, utils/agentId, utils/agentSwarmsEnabled, utils/debug, utils/errors, utils/format, utils/gracefulShutdown, utils/lazySchema, utils/peerAddress, utils/semanticBoolean, utils/slowOperations, utils/swarm/backends/types, utils/swarm/constants, utils/swarm/teamHelpers, utils/swarm/teammateLayoutManager, utils/swarm/teammateModel, utils/task/framework, utils/teammateMailbox, AgentTool/resumeAgent, and local constants, prompt, UI.

## Logic
Builds the SendMessage tool via `buildTool` (partial implementation seen). Handles multiple input schema types including regular messages and structured protocol responses (shutdown_request, plan_approval_request). Manages message routing to teammates (by name or broadcast), cross-session messaging via UDS or bridge, task assignment via TaskUpdate, and integration with team task lists. Also processes legacy protocol responses ensuring request_id echo and approval flags.

The tool coordinates with the agent/swarm infrastructure to deliver messages, handle shutdown approvals, and manage peer-to-peer communication.

The file likely exports `SendMessageTool` (the tool definition) and possibly other helpers. (Note: full details not captured from first 50 lines; but purpose is central messaging.)

## Exports
- The tool object built by `buildTool` (named `SendMessageTool`)
- Possibly additional internal types/functions
