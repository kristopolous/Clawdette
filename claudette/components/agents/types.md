## Purpose
A central type definition and constants module that provides the foundational structure for the agent management UI and its underlying state machine.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: `utils/settings/constants`, `tools/AgentTool/loadAgentsDir`

## Logic
1. **Standardized Path Constants**:
    - `AGENT_PATHS` defines the canonical directory structure for agent configuration storage (e.g., `.claudette/agents/`).
2. **Interactive State Machine (`ModeState`)**:
    - Defines a comprehensive union type that represents every possible phase of the agent management interface:
        - `main-menu`: The primary configuration entry point.
        - `list-agents`: Displays agents filtered by source (e.g., project, user, global, built-in).
        - `agent-menu`: A contextual menu for operations on a specific agent.
        - `view-agent`: Read-only detailed inspection of an agent's configuration.
        - `create-agent`: Launches the multi-step creation wizard.
        - `edit-agent`: Enters the interactive agent modification flow.
        - `delete-confirm`: Provides a terminal-based safety gate for agent removal.
3. **Data Mixins**:
    - `WithPreviousMode`: A helper type that ensures the system can always "go back" to a logical parent state during navigation.
    - `WithAgent`: A helper type that ensures specific agent context is passed through each state transition.
4. **Validation Structure**:
    - `AgentValidationResult` provides a standardized interface for reporting on the health of an agent definition, including flags for overall validity and lists of specific warnings or errors.

## Exports
- `AGENT_PATHS` - A constant object defining the agent filesystem structure.
- `ModeState` - The core state machine type for the agent management interface.
- `AgentValidationResult` - The standard structure for agent configuration validation reports.
