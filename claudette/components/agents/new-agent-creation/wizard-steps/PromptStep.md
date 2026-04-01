## Purpose
Provides a wizard step for entering the agent system prompt.

## Imports
- **External**: react, react/compiler-runtime, useCallback, useState
- **Internal**: ink.js (Box, Text), keybindings/useKeybinding.js, utils/promptEditor.js (editPromptInEditor), ConfigurableShortcutHint.js, design-system/Byline.js, design-system/KeyboardShortcutHint.js, TextInput.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, types (AgentWizardData type)

## Logic
Renders a multi-line text input for the system prompt with validation requiring non-empty input. Supports external editor integration via keybinding. Trims input, validates, updates wizard data, and advances on submit. Displays a hint to be comprehensive for best results.

## Exports
- `PromptStep` - renders a system prompt input step with validation and external editor support
