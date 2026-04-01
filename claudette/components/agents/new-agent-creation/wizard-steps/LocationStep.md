## Purpose
Wizard step for choosing where to save the agent configuration file.

## Imports
- **External**: react
- **Internal**: ink components, SettingSource types, configurable shortcut hints, custom select component, design system components, wizard utilities, AgentWizardData types

## Logic
Presents location options for saving the agent: project (.claude/agents/) or personal (~/.claude/agents/). Updates wizard data with the selected location and advances to the next step.

## Exports
- `LocationStep` - renders a selection dialog for choosing the agent file storage location
