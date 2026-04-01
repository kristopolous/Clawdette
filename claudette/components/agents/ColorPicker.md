## Purpose
Provides a component for selecting an agent background color.

## Imports
- **External**: figures, react (useState)
- **Internal**: ink components (Box, Text), keyboard event types, agent color manager utilities (AGENT_COLOR_TO_THEME_COLOR, AGENT_COLORS, AgentColorName type), string utilities (capitalize)

## Logic
Presents a list of color options including automatic and predefined colors. Handles keyboard navigation (up/down arrows) and selection confirmation. Shows a live preview of the agent name with the selected color applied.

## Exports
- `ColorPicker` - renders an interactive color selection UI with navigation and preview
