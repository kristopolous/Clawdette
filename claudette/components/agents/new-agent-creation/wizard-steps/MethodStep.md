## Purpose
Provides a wizard step for choosing between AI-generated and manual agent creation methods.

## Imports
- **External**: react, react/compiler-runtime
- **Internal**: ink.js (Box), ConfigurableShortcutHint.js, CustomSelect/select.js (Select), design-system/Byline.js, design-system/KeyboardShortcutHint.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, types.js (AgentWizardData type)

## Logic
Presents two creation method options: generate with inference provider (recommended) or manual configuration. Selecting generate advances to the generation step; selecting manual skips ahead to the manual configuration flow at step 3.

## Exports
- `MethodStep` - renders a creation method selection step
