## Purpose
Main component for managing agents including listing, viewing, editing, creating, and deleting.

## Imports
- **External**: chalk, react (useCallback, useMemo, useState)
- **Internal**: SettingSource types, command result types, exit keybinding hooks, merged tools hook, ink components, app state utilities, Tool types, agent display utilities, agent loading utilities, error utilities, logging utilities, custom select component, dialog component, agent sub-components (AgentDetail, AgentEditor, AgentNavigationFooter, AgentsList), agent file utilities, CreateAgentWizard, ModeState types

## Logic
Manages a state machine for different agent management modes (list-agents, create-agent, agent-menu, view-agent, edit-agent, delete-confirm). Groups agents by source, handles CRUD operations with state updates, and renders the appropriate sub-component for each mode. Tracks changes and provides exit handling with change summaries.

## Exports
- `AgentsMenu` - renders the complete agent management interface with all modes and operations
