## Purpose
A wizard workflow step that allows the user to define a unique, machine-readable identifier (type) for a new agent, which is used for delegation and configuration management.

## Imports
- **Stdlib**: None
- **External**: `ui-framework` (e.g., react), `ui-components` (e.g., ink)
- **Internal**: `keybindings/useKeybinding`, `tools/AgentTool/loadAgentsDir`, `components/ConfigurableShortcutHint`, `components/design-system/Byline`, `components/design-system/KeyboardShortcutHint`, `components/TextInput`, `components/wizard`, `components/wizard/WizardDialogLayout`, `components/agents/validateAgent`, `components/agents/new-agent-creation/types`

## Logic
1. **Identifier Entry**: Provides a focused `TextInput` field for the user to name the agent. This identifier is what users will type to invoke or delegate tasks to the subagent.
2. **Validation Logic**:
    - Leverages a central validation utility (`validateAgentType`) to ensure the identifier meets technical requirements (e.g., alphanumeric characters and hyphens only, lowercase).
    - Prevents progression if the identifier is invalid or empty, displaying immediate visual feedback to the user.
3. **State Management**: 
    - Initializes with any existing identifier from the wizard's shared data.
    - Persists the final trimmed identifier to the `AgentWizardData` context upon successful submission.
4. **Interactive Controls**:
    - Uses the "Enter" key to submit the identifier and advance the wizard.
    - Supports "Go Back" (Esc) to return to previous steps.
5. **Contextual Guidance**: Displays descriptive placeholders and examples (e.g., `test-runner`, `tech-lead`) to help users choose appropriate and memorable identifiers.

## Exports
- `TypeStep` - A functional component that manages the "Identifier Definition" phase of the agent creation wizard.
