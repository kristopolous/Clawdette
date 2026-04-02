# ink

## Purpose
Converts agent color strings to Ink's TextProps color format, mapping known agent colors to theme keys and falling back to raw ANSI for unknown colors.

## Imports
- **Internal**: ../ink (TextProps type), ../tools/AgentTool/agentColorManager (AGENT_COLOR_TO_THEME_COLOR, AgentColorName)

## Logic
1. `toInkColor` - converts a color string to Ink's TextProps['color'] format. If undefined, returns default 'cyan_FOR_SUBAGENTS_ONLY'. If the color matches a known AgentColorName, maps it to the corresponding theme color via AGENT_COLOR_TO_THEME_COLOR. Otherwise falls back to `ansi:${color}` format for raw ANSI colors.

## Exports
- `toInkColor` - converts color string to Ink TextProps color format with theme mapping
