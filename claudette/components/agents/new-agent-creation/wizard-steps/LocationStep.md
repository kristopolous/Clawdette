## Purpose
Provides a wizard step for choosing where the agent configuration will be stored.

## Imports
- **External**: react, react/compiler-runtime
- **Internal**: ink.js (Box), utils/settings/constants.js (SettingSource type), ConfigurableShortcutHint.js, CustomSelect/select.js (Select), design-system/Byline.js, design-system/KeyboardShortcutHint.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, types.js (AgentWizardData type)

## Logic
Presents two location options: project (.claude/agents/) or personal (~/.claude/agents/). Updates wizard data with the selected location source and advances to the next step.

## Exports
- `LocationStep` - renders a storage location selection step
