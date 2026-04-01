# tools/SendMessageTool/SendMessageTool

## Purpose
Tool for sending messages to other agents/teammates, handling routing, broadcast, cross-session messaging, and structured protocol responses (shutdown, plan approval).

## Imports
- **External**: `zod/v4`
- **Internal**: bootstrap state, bridge/replBridgeHandle, Tool, tasks (InProcessTeammateTask, LocalAgentTask, LocalMainSessionTask), types (ids), utils (agentId, agentSwarmsEnabled, debug, errors, format, gracefulShutdown, lazySchema, peerAddress, semanticBoolean, slowOperations, swarm backends/types, swarm constants, swarm teamHelpers, swarm teammateMailbox, etc.), AgentTool/resumeAgent, local constants, prompt, UI

## Logic
1. Defines input schema with `to` (recipient), optional `summary`, and `message` (string or structured types: shutdown_request, shutdown_response, plan_approval_response)
2. Defines multiple output types: MessageOutput, BroadcastOutput, RequestOutput, ResponseOutput (discriminated union SendMessageToolOutput)
3. Handles message routing:
   - To individual teammate: queues in their inbox (local or remote via UDS/bridge)
   - Broadcast to all teammates: sends to each teammate's inbox
   - Cross-session peers via UDS or Remote Control bridge
4. Supports structured protocol:
   - Shutdown request/response for graceful termination
   - Plan approval requests/responses for team coordination
5. Integrates with agent/swarm infrastructure: task assignment, team task lists, inbox management
6. Uses resumeAgentBackground for restarting stopped agents
7. Tracks request IDs for correlation
8. Formats tool results and renders UI

## Exports
- `SendMessageTool` - main tool definition
- `Input` - input type (to, summary?, message)
- `MessageRouting` - routing metadata type
- `MessageOutput` - output type for single message
- `BroadcastOutput` - output type for broadcast
- `RequestOutput` - output type for request (shutdown/plan approval)
- `ResponseOutput` - output type for response
- `SendMessageToolOutput` - union output type
