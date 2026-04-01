## Purpose
A wizard workflow step that allows the user to define the set of capabilities (tools) that the new agent is permitted to execute.

## Imports
- **Stdlib**: None
- **External**: `ui-framework` (e.g., react)
- **Internal**: `Tool`, `components/ConfigurableShortcutHint`, `components/design-system/Byline`, `components/design-system/KeyboardShortcutHint`, `components/wizard`, `components/wizard/WizardDialogLayout`, `components/agents/ToolSelector`, `components/agents/new-agent-creation/types`

## Logic
1. **Interactive Capability Assignment**: Employs the `ToolSelector` component to present a multi-select list of all available system and project tools.
2. **State Management**:
    - Initializes the selection interface with any tools already chosen in the wizard's shared state.
    - Supports the "All Tools" semantic by passing `undefined` if no specific restrictions have been set yet.
    - Upon confirmation, updates the wizard's `selectedTools` data with the definitive list of authorized tool identifiers.
3. **Flow Integration**:
    - Advances the user to the next configuration step (`goNext`) once the tool list is finalized.
    - Handles "Go Back" (Esc) navigation to allow for iterative refinements of the agent's definition.
4. **UI Consistency**: Wraps the selection logic in a standardized wizard dialog layout, including a footer with keyboard shortcut hints for navigating and toggling tool selections.

## Exports
- `ToolsStep` - A functional component that manages the "Tool Assignment" phase of the agent creation wizard.
