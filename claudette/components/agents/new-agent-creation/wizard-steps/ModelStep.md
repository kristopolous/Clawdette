## Purpose
Provides a wizard step for selecting the inference model for an agent.

## Imports
- **External**: react, react/compiler-runtime
- **Internal**: ConfigurableShortcutHint.js, design-system/Byline.js, design-system/KeyboardShortcutHint.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, ModelSelector.js, types.js (AgentWizardData type)

## Logic
Wraps the ModelSelector component in a wizard dialog layout. Updates wizard data with the selected model and advances to the next step upon completion.

## Exports
- `ModelStep` - renders a model selection step using ModelSelector
