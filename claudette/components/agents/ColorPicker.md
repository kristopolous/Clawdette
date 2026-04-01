## Purpose
Provides an interactive UI component for selecting an agent background color.

## Imports
- **External**: figures, react, react/compiler-runtime, useState
- **Internal**: ink/events/keyboard-event.js (KeyboardEvent type), ink.js (Box, Text), tools/AgentTool/agentColorManager.js (AGENT_COLOR_TO_THEME_COLOR, AGENT_COLORS, AgentColorName type), utils/stringUtils.js (capitalize)

## Logic
Renders a navigable list of color options including automatic and predefined agent colors. Supports up/down arrow navigation and enter to confirm. Displays a live preview of the agent mention with the selected color applied.

## Exports
- `ColorPicker` - renders an interactive color selection interface with keyboard navigation and live preview
