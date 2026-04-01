## Purpose
Wizard step displaying a summary of the agent configuration for final review before saving.

## Imports
- **External**: react
- **Internal**: ink components (Box, Text), keyboard event types, keybinding utilities, memdir/paths (isAutoMemoryEnabled), Tool types, agent memory utilities, AgentDefinition types, formatting utilities, model display utilities, configurable shortcut hints, design system components, wizard utilities, agent file utilities, validateAgent utility, AgentWizardData types

## Logic
Validates the complete agent configuration and displays all settings (name, location, tools, model, memory, description, system prompt) with truncation for long values. Shows validation warnings and errors. Provides save and save-and-edit actions with keyboard shortcuts.

## Exports
- `ConfirmStep` - renders a summary view of the agent configuration with validation results and save options
