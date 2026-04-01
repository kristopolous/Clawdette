# replBridgeHandle

## Purpose
Type definition for the REPL bridge handle interface that provides message writing and control request/response methods.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: SDKMessage, Message, SDKControlRequest, SDKControlResponse types

## Logic
1. Defines the public interface for a connected bridge session
2. `writeMessages` / `writeSdkMessages` - send messages to the bridge
3. `sendControlRequest` / `sendControlResponse` / `sendControlCancelRequest` - control plane communication
4. `sendResult` - signals completion
5. `teardown` - async cleanup and session archival
6. Exposes bridgeSessionId, environmentId, and sessionIngressUrl for tracking

## Exports
- `ReplBridgeHandle` - interface defining the bridge handle contract
