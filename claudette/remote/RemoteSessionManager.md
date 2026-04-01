## Purpose
Coordinates communication with a remote session via WebSocket for receiving messages and HTTP for sending user messages.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: entrypoints/agentSdkTypes, entrypoints/sdk/controlTypes, utils/debug, utils/log, utils/teleport/api, SessionsWebSocket

## Logic
Wraps SessionsWebSocket to handle the full remote session lifecycle. Routes incoming messages to the appropriate handler: SDK messages are forwarded to the onMessage callback, control requests (permission prompts) are tracked and forwarded, control cancel requests clear pending permissions, and control responses are acknowledged. User messages are sent via HTTP POST to the remote session. Permission responses are sent back over the WebSocket as control responses. Supports viewer-only mode where the client does not send interrupts.

## Exports
- `RemotePermissionResponse` - type for allow/deny permission decisions
- `RemoteSessionConfig` - configuration type containing session ID, token getter, org UUID, and mode flags
- `RemoteSessionCallbacks` - callback types for message, permission request, permission cancelled, connected, disconnected, reconnecting, and error events
- `RemoteSessionManager` - class managing the remote session with connect, disconnect, sendMessage, respondToPermissionRequest, cancelSession, reconnect, getSessionId, and isConnected methods
- `createRemoteSessionConfig` - factory function to create a RemoteSessionConfig from OAuth tokens
