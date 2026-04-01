# replBridge

## Purpose
Implements the REPL bridge core that manages the environment-based Remote Control bridge lifecycle with poll/dispatch architecture.

## Imports
- **Stdlib**: `crypto`
- **External**: (none)
- **Internal**: bridgeApi, types, debug/diag utils, analytics, cleanup, bridgeMessaging, workSecret, sessionIdCompat, concurrentSessions, trustedDevice, replBridgeTransport, sessionIngressAuth, envUtils, capacityWake, flushGate, pollConfigDefaults, error/sleep utils, bridgeDebug

## Logic
1. `initBridgeCore` - main entry point with explicit params (dir, machineName, branch, gitRepoUrl, title, etc.)
2. Manages environment registration, poll loop, work acknowledgment, and session spawning
3. Handles transport connection (v1 or v2) with automatic reconnection on failure
4. Implements capacity wake for early wake from at-capacity sleeps
5. Flush gate prevents message interleaving during historical replay
6. Fault injection support for testing recovery paths (ant-only)
7. Token refresh scheduling for proactive JWT renewal
8. Teardown handles graceful session archival and cleanup

## Exports
- `ReplBridgeHandle` - interface with writeMessages, sendControl*, teardown methods
- `BridgeState` - type for bridge states (ready, connected, reconnecting, failed)
- `BridgeCoreParams` - explicit configuration interface
- `initBridgeCore` - main entry point for environment-based bridge
