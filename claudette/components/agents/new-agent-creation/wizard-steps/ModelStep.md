## Purpose
A wizard workflow step that allows the user to select the specific reasoning model for the new agent, using a specialized selection interface.

## Imports
- **Stdlib**: None
- **External**: `ui-framework` (e.g., react)
- **Internal**: `components/ConfigurableShortcutHint`, `components/design-system/Byline`, `components/design-system/KeyboardShortcutHint`, `components/wizard`, `components/wizard/WizardDialogLayout`, `components/agents/ModelSelector`, `components/agents/new-agent-creation/types`

## Logic
1. **Interactive Selection**: Leverages the `ModelSelector` component to provide a detailed list of available AI models, ensuring the user can choose the appropriate balance of performance and speed.
2. **State Integration**:
    - Initializes the selection with any previously chosen model stored in the wizard's state.
    - Upon confirmation of a model choice, it updates the shared `AgentWizardData` with the new selection.
3. **Workflow Control**: Automatically advances to the next step in the agent creation pipeline once a model has been successfully selected and confirmed.
4. **Navigation**: Provides standard "Go Back" support (typically mapped to the Esc key), allowing the user to return to the previous configuration step without losing their progress.
5. **UI Consistency**: Wraps the selection interface in a standardized wizard dialog layout, including footer hints for keyboard-driven navigation and selection.

## Exports
- `ModelStep` - A functional component that manages the "Model Selection" phase of the agent creation wizard.
