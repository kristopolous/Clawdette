## Purpose
Provides the final confirmation step that displays a summary of the agent configuration before saving.

## Imports
- **External**: react, react/compiler-runtime
- **Internal**: ink/events/keyboard-event.js (KeyboardEvent type), ink.js (Box, Text), keybindings/useKeybinding.js, memdir/paths.js (isAutoMemoryEnabled), Tool.js (Tools type), tools/AgentTool/agentMemory.js (getMemoryScopeDisplay), tools/AgentTool/loadAgentsDir.js (AgentDefinition type), utils/format.js (truncateToWidth), utils/model/agent.js (getAgentModelDisplay), ConfigurableShortcutHint.js, design-system/Byline.js, design-system/KeyboardShortcutHint.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, agentFileUtils (getNewRelativeAgentFilePath), validateAgent (validateAgent), types (AgentWizardData type)

## Logic
Validates the complete agent configuration and displays a summary including name, location, tools, model, memory, description, and system prompt preview. Shows validation warnings and errors. Handles keyboard shortcuts for save (s/Enter) and save-and-edit (e).

## Exports
- `ConfirmStep` - renders an agent configuration summary with validation feedback and save actions
