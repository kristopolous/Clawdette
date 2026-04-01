## Purpose
Renders a trust confirmation dialog that prompts the user to verify they trust the current workspace before granting file access and execution permissions.

## Imports
- **Stdlib**: `os` (homedir)
- **External**: `react`, `react/compiler-runtime`
- **Internal**: `services/analytics/index.js`, `bootstrap/state.js`, `commands.js`, `hooks/useExitOnCtrlCDWithKeybindings.js`, `ink.js` (Box, Link, Text), `keybindings/useKeybinding.js`, `services/mcp/config.js`, `tools/BashTool/toolName.js`, `utils/config.js`, `utils/cwd.js`, `utils/fsOperations.js`, `utils/gracefulShutdown.js`, `CustomSelect/index.js`, `permissions/PermissionDialog.js`, `TrustDialog/utils.js`

## Logic
Gathers information about MCP servers, hooks, bash permissions, API key helpers, cloud commands, and dangerous environment variables from settings. Logs analytics events on dialog show and acceptance. Presents a confirmation dialog with the current workspace path, a trust prompt, and a security guide link. On acceptance, saves the project config or session trust state. Skips rendering if trust was already accepted.

## Exports
- `TrustDialog` - React component that displays a workspace trust confirmation dialog with security context information
