## Purpose
Provides a wizard step for selecting which tools the agent should have access to.

## Imports
- **External**: react, react/compiler-runtime
- **Internal**: Tool.js (Tools type), ConfigurableShortcutHint.js, design-system/Byline.js, design-system/KeyboardShortcutHint.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, ToolSelector.js, types.js (AgentWizardData type)

## Logic
Wraps the ToolSelector component in a wizard dialog layout. Passes through the initial tools selection from wizard data to preserve the "all tools" semantic. Updates wizard data with selected tools and advances on completion.

## Exports
- `ToolsStep` - renders a tool selection step using ToolSelector
