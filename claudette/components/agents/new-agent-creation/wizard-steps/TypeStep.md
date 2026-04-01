## Purpose
Provides a wizard step for entering the agent type identifier.

## Imports
- **External**: react, react/compiler-runtime, useState
- **Internal**: ink.js (Box, Text), keybindings/useKeybinding.js, tools/AgentTool/loadAgentsDir.js (AgentDefinition type), ConfigurableShortcutHint.js, design-system/Byline.js, design-system/KeyboardShortcutHint.js, TextInput.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, validateAgent.js (validateAgentType), types.js (AgentWizardData type)

## Logic
Renders a text input for the agent type identifier with validation against naming rules (alphanumeric with hyphens, 3-50 characters). Validates input, checks for duplicates against existing agents, updates wizard data, and advances on submit.

## Exports
- `TypeStep` - renders an agent type identifier input step with validation
