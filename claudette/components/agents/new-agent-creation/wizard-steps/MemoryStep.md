## Purpose
Provides a wizard step for configuring agent memory scope and persistence.

## Imports
- **External**: react, react/compiler-runtime
- **Internal**: ink.js (Box), keybindings/useKeybinding.js, memdir/paths.js (isAutoMemoryEnabled), tools/AgentTool/agentMemory.js (AgentMemoryScope type, loadAgentMemoryPrompt), ConfigurableShortcutHint.js, CustomSelect/select.js (Select), design-system/Byline.js, design-system/KeyboardShortcutHint.js, wizard/index.js (useWizard), wizard/WizardDialogLayout.js, types.js (AgentWizardData type)

## Logic
Presents memory scope options (user, project, local, none) with different ordering based on whether the agent is user-scoped or project-scoped. Updates wizard data with the selected memory and composes the system prompt with memory instructions when applicable.

## Exports
- `MemoryStep` - renders a memory configuration step with scope selection
