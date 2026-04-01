## Purpose
Wizard step for selecting the agent background color.

## Imports
- **External**: react
- **Internal**: ink components, keybinding utilities, AgentColorName types, configurable shortcut hints, design system components, wizard utilities, ColorPicker component, AgentWizardData types

## Logic
Renders a ColorPicker component for selecting the agent background color. On color selection, assembles the final agent object from all wizard data fields and advances to the next step.

## Exports
- `ColorStep` - renders a color selection dialog within the wizard flow
