# components/memory/MemoryFileSelector

## Purpose
Provides file selector dialog for choosing which memory file to edit.

## Imports
- **Stdlib**: bun:bundle (feature), chalk, fs/promises (mkdir), path (join)
- **External**: `react`, `react/compiler-runtime`
- **Internal**: bootstrap/state (getOriginalCwd), hooks/useExitOnCtrlCDWithKeybindings, ink (Box, Text), keybindings/useKeybinding, memdir/paths (getAutoMemPath, isAutoMemoryEnabled), services/analytics/index (logEvent), services/autoDream/config (isAutoDreamEnabled), services/autoDream/consolidationLock (readLastConsolidatedAt), state/AppState (useAppState), tools/AgentTool/agentMemory (getAgentMemoryDir), utils/browser (openPath), utils/claudemd (getMemoryFiles, MemoryFileInfo), utils/envUtils (getClaudeConfigHomeDir), utils/file (getDisplayPath), utils/format (formatRelativeTimeAgo), utils/memory/versions (projectIsInGitRepo), utils/settings/settings (updateSettingsForSource), CustomSelect/index (Select), design-system/ListItem (ListItem), memdir/teamMemPaths (conditional require)

## Logic
1. `ExtendedMemoryFileInfo` - MemoryFileInfo with isNested and exists fields
2. `Props` - { onSelect, onCancel }
3. `lastSelectedPath` - module-level state for remembering selection
4. `OPEN_FOLDER_PREFIX` - prefix for folder-open options
5. `MemoryFileSelector` - React component for memory file selection
6. Uses React compiler runtime (_c) for memoization
7. Loads existing memory files via getMemoryFiles()
8. Constructs user and project memory paths
9. Builds allMemoryFiles array with existing files and placeholder entries
10. Computes depth for nested files
11. Creates memoryOptions with labels, descriptions, and values
12. Labels show indented paths for nested files
13. Descriptions indicate source (User, Project, @-imported, dynamically loaded)
14. Adds folder options for auto-memory, team memory, and agent memory
15. State: autoMemoryOn, autoDreamOn, showDreamRow, isDreamRunning, lastDreamAt
16. Toggle handlers update settings and log analytics events
17. Keybindings for navigation (select:next, select:previous) and confirmation
18. onSelect: folder paths are opened in system browser, memory paths are selected
19. dreamStatus shows running/never/last ran X ago

## Exports
- `MemoryFileSelector` - memory file selector dialog component
