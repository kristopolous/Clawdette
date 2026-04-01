## Purpose
Displays status and warning messages for the channels feature, showing channel configuration state and any unmatched entries.

## Imports
- **Stdlib**: Object, Set
- **External**: react, react/compiler-runtime
- **Internal**: bootstrap/state, ink/Box, ink/Text, services/mcp/channelAllowlist, services/mcp/channelNotification, services/mcp/config, utils/auth, utils/plugins/installedPluginsManager, utils/settings/settings

## Logic
Evaluates channel state including whether channels are disabled, missing auth, blocked by org policy, or actively listening. Identifies unmatched channel entries that are either uninstalled plugins, unconfigured servers, or not on the approved allowlist. Renders appropriate error or warning messages for each state.

## Exports
- `ChannelsNotice` - renders channel status messages and warnings for unmatched entries
