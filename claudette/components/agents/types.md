## Purpose
Defines type constants and state types for the agent management system.

## Imports
- **Internal**: src/utils/settings/constants (SettingSource type), tools/AgentTool/loadAgentsDir (AgentDefinition type)

## Logic
Provides path constants for agent file locations and defines the ModeState union type representing all possible UI states in the agent management flow (main menu, list, view, create, edit, delete). Also defines the validation result type for agent configurations.

## Exports
- `AGENT_PATHS` - constant object containing folder name and agents directory path
- `ModeState` - union type representing all possible agent menu states
- `AgentValidationResult` - type for agent validation outcomes with validity status, warnings, and errors
