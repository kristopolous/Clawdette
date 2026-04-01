## Purpose
Provides the main menu component for managing agents including listing, viewing, editing, creating, and deleting.

## Imports
- **External**: chalk, react, react/compiler-runtime, useCallback, useMemo, useState
- **Internal**: src/utils/settings/constants.js (SettingSource type), commands.js (CommandResultDisplay type), hooks/useExitOnCtrlCDWithKeybindings.js, hooks/useMergedTools.js, ink.js (Box, Text), state/AppState.js (useAppState, useSetAppState), Tool.js (Tools type), tools/AgentTool/agentDisplay.js (ResolvedAgent type, resolveAgentOverrides), tools/AgentTool/loadAgentsDir.js (AgentDefinition type, getActiveAgentsFromList), utils/errors.js (toError), utils/log.js (logError), CustomSelect/select.js (Select), design-system/Dialog.js, AgentDetail.js, AgentEditor.js, AgentNavigationFooter.js, AgentsList.js, agentFileUtils.js (deleteAgentFromFile), new-agent-creation/CreateAgentWizard.js, types (ModeState type)

## Logic
Implements a state machine for agent management modes (list-agents, create-agent, agent-menu, view-agent, edit-agent, delete-confirm). Groups agents by source, handles CRUD operations with state updates, and renders the appropriate sub-component for each mode. Tracks changes and reports them on exit.

## Exports
- `AgentsMenu` - renders the complete agent management interface with all modes and operations
