## Purpose
Provides a wizard step for generating an agent configuration from a natural language description using the inference provider.

## Imports
- **External**: @anthropic-ai/sdk (APIUserAbortError), react, react/compiler-runtime, useCallback, useRef, useState
- **Internal**: hooks/useMainLoopModel.js (useMainLoopModel), ink.js (Box, Text), keybindings/useKeybinding.js, utils/abortController.js (createAbortController), utils/promptEditor.js (editPromptInEditor), ConfigurableShortcutHint.js, design-system/Byline.js, Spinner.js, TextInput.js, wizard/index.js (useWizard), wizard/WizardDialogLayout, generateAgent (generateAgent), types (AgentWizardData type)

## Logic
Accepts a natural language prompt, calls the inference provider to generate agent configuration (identifier, whenToUse, systemPrompt), handles abort/cancellation, and skips to the tools step on success. Displays a spinner during generation and supports external editor for the prompt input.

## Exports
- `GenerateStep` - renders an AI-powered agent generation step with prompt input and loading state
