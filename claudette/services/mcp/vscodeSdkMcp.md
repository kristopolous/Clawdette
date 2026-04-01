# mcp/vscodeSdkMcp

## Purpose
Implements VSCode MCP integration for bidirectional communication via notifications.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: debug, lazySchema, growthbook, analytics, MCP types

## Logic
1. `AutoModeEnabledState` - type: enabled, disabled, opt-in (mirrors permissionSetup.ts)
2. `readAutoModeEnabledState` - reads from tengu_auto_mode_config GrowthBook feature
3. `LogEventNotificationSchema` - schema for log_event notifications from VSCode
4. `vscodeMcpClient` - stored reference to connected VSCode MCP client
5. `notifyVscodeFileUpdated` - sends file_updated notification to VSCode
6. Ant-only feature, requires connected client
7. Includes filePath, oldContent, newContent in notification
8. Catches errors silently (doesn't throw on notification failure)
9. `setupVscodeSdkMcp` - sets up VSCode MCP for bidirectional communication
10. Finds 'claude-vscode' client from SDK connections
11. Registers LogEventNotification handler to forward events to analytics
12. Logs events as tengu_vscode_{eventName}

## Exports
- `LogEventNotificationSchema` - log event notification schema
- `notifyVscodeFileUpdated` - sends file updated notification to VSCode
- `setupVscodeSdkMcp` - sets up VSCode MCP integration
