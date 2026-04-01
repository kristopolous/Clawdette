## Purpose
Defines types and constants for agent management state and validation.

## Imports
- **Internal**: src/utils/settings/constants (SettingSource type), tools/AgentTool/loadAgentsDir (AgentDefinition type)

## Logic
Defines the agent file path constants, a discriminated union type for the agent menu state machine covering all modes (main-menu, list-agents, agent-menu, view-agent, create-agent, edit-agent, delete-confirm), and a validation result type for agent configurations.

## Exports
- `AGENT_PATHS` - constant object containing folder name and agents directory name
- `ModeState` - discriminated union type representing all possible states of the agent menu
- `AgentValidationResult` - type for validation outcomes with isValid flag, warnings, and errors
