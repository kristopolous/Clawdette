## Purpose
Provides a wizard step for entering the agent description that tells the inference provider when to use the agent.

## Imports
- **External**: react, react/compiler-runtime, useCallback, useState
- **Internal**: ink.js (Box, Text), keybindings/useKeybinding.js, utils/promptEditor.js (editPromptInEditor), ConfigurableShortcutHint.js, design-system/Byline.js, design-system/KeyboardShortcutHint.js, TextInput.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, types.js (AgentWizardData type)

## Logic
Renders a text input for the "when to use" description with validation requiring non-empty input. Supports external editor integration via keybinding. Trims input, validates, updates wizard data, and advances on submit.

## Exports
- `DescriptionStep` - renders a description input step with validation and external editor support
