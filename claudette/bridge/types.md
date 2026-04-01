# types

## Purpose
Defines core types and constants for the bridge (Remote Control) protocol including work responses, session activities, and configuration.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `DEFAULT_SESSION_TIMEOUT_MS` - 24-hour per-session timeout
2. `WorkResponse` - work poll response with id, environment_id, state, data, secret
3. `WorkSecret` - decoded secret with session_ingress_token, api_base_url, sources, auth, mcp_config
4. `SessionActivity` - tool_start/text/result/error activities with summary and timestamp
5. `SpawnMode` - single-session/worktree/same-dir for directory management
6. `BridgeWorkerType` - claude_code/claude_code_assistant well-known values
7. `BridgeConfig` - full configuration with dir, machineName, branch, gitRepoUrl, maxSessions, etc.
8. `BridgeApiClient` - interface with registerBridgeEnvironment, pollForWork, acknowledgeWork methods

## Exports
- Constants: `DEFAULT_SESSION_TIMEOUT_MS`, `BRIDGE_LOGIN_INSTRUCTION`, `BRIDGE_LOGIN_ERROR`, `REMOTE_CONTROL_DISCONNECTED_MSG`
- Types: `WorkData`, `WorkResponse`, `WorkSecret`, `SessionDoneStatus`, `SessionActivity`, `SpawnMode`, `BridgeWorkerType`, `BridgeConfig`
- Interfaces: `PermissionResponseEvent`, `BridgeApiClient`
