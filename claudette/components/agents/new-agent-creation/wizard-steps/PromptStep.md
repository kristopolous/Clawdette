## Purpose
A wizard workflow step that allows the user to define the core system prompt for a new agent, which establishes its persona, behavioral boundaries, and operational logic.

## Imports
- **Stdlib**: None
- **External**: `ui-framework` (e.g., react), `ui-components` (e.g., ink)
- **Internal**: `keybindings/useKeybinding`, `utils/promptEditor`, `components/ConfigurableShortcutHint`, `components/design-system/Byline`, `components/design-system/KeyboardShortcutHint`, `components/TextInput`, `components/wizard`, `components/wizard/WizardDialogLayout`, `components/agents/new-agent-creation/types`

## Logic
1. **Persona Definition**: Provides a primary interface for entering the detailed instructions that will govern the agent's behavior. Users are encouraged to be comprehensive to ensure the agent performs as expected.
2. **Text Entry Methods**:
    - **Inline Entry**: Uses a specialized `TextInput` component for direct typing within the terminal interface, complete with cursor management.
    - **External Editor**: Supports a keyboard shortcut (e.g., `Ctrl+G`) to open the system's default text editor, providing a more robust environment for drafting complex, multi-line instructions.
3. **Input Validation**: Ensures that the system prompt is not empty before allowing the user to proceed, displaying an error message if the requirement is not met.
4. **State Management**:
    - Initializes with any previously entered prompt from the wizard's shared data.
    - Persists the final trimmed prompt to the wizard's state upon successful submission.
5. **Interactive Navigation**: Implements standard "Continue" (Enter) and "Go Back" (Esc) actions, with contextual keyboard hints displayed in the footer for user guidance.

## Exports
- `PromptStep` - A functional component that manages the "System Prompt Definition" phase of the agent creation wizard.
