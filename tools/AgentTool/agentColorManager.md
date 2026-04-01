# tools/AgentTool/agentColorManager

## Purpose
Manages agent color assignment for visual distinction in UI.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: bootstrap state, theme types

## Logic
1. `AgentColorName` - union: red, blue, green, yellow, purple, orange, pink, cyan
2. `AGENT_COLORS` - readonly array of color names
3. `AGENT_COLOR_TO_THEME_COLOR` - maps agent colors to theme colors (_FOR_SUBAGENTS_ONLY suffix)
4. `getAgentColor` - gets assigned color for agent type
5. Returns undefined for 'general-purpose' agent (no color)
6. Checks agentColorMap from bootstrap state
7. Returns existing color if assigned, undefined otherwise
8. `setAgentColor` - assigns color to agent type
9. Deletes from map if color is undefined
10. Validates color against AGENT_COLORS before setting
11. Colors persist across session via agentColorMap

## Exports
- `AgentColorName` - agent color name type
- `AGENT_COLORS` - array of valid color names
- `AGENT_COLOR_TO_THEME_COLOR` - color mapping record
- `getAgentColor` - gets agent's assigned color
- `setAgentColor` - assigns color to agent
