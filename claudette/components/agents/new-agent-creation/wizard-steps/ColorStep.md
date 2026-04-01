## Purpose
Provides a wizard step for selecting the agent background color.

## Imports
- **External**: react, react/compiler-runtime
- **Internal**: ink.js (Box), keybindings/useKeybinding.js, tools/AgentTool/agentColorManager.js (AgentColorName type), ConfigurableShortcutHint.js, design-system/Byline.js, design-system/KeyboardShortcutHint.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, ColorPicker.js, types (AgentWizardData type)

## Logic
Wraps the ColorPicker component in a wizard dialog layout. On color selection, assembles the final agent definition from all accumulated wizard data and updates the wizard state before advancing.

## Exports
- `ColorStep` - renders a color selection step that finalizes the agent definition
