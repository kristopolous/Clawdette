## Purpose
Provides an interactive dialog for viewing and managing teammates in a team, including navigation, permission mode cycling, and teammate lifecycle operations.

## Imports
- **Stdlib**: crypto
- **External**: react, react/compiler-runtime, figures, usehooks-ts
- **Internal**: context/overlayContext, ink, ink/stringWidth, keybindings/useKeybinding, keybindings/useShortcutDisplay, state/AppState, Tool, tools/AgentTool/agentColorManager, utils/debug, utils/execFileNoThrow, utils/format, utils/permissions/getNextPermissionMode, utils/permissions/PermissionMode, utils/slowOperations, utils/swarm/backends/detection, utils/swarm/backends/registry, utils/swarm/backends/types, utils/swarm/constants, utils/swarm/teamHelpers, utils/tasks, utils/teamDiscovery, utils/teammateMailbox, components/design-system/Dialog, components/design-system/ThemedText

## Logic
1. Registers as an overlay to prevent escape interception
2. Maintains dialog state for two levels: teammate list and teammate detail
3. Periodically refreshes teammate statuses every second
4. Handles keyboard input for navigation (arrows, j/k), drilling down (Enter), killing (k), shutdown (s), hide/show (h/H), pruning idle teammates (p), and mode cycling (shift+tab)
5. Renders either a TeamDetailView listing all teammates or a TeammateDetailView showing individual details including tasks and prompt
6. Provides helper functions for killing teammates, viewing output, toggling visibility, and cycling permission modes for single or all teammates

## Exports
- `TeamsDialog` - renders an interactive dialog for viewing and managing team members with navigation and action support
