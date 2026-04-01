# components/skills/SkillsMenu

## Purpose
Provides skills menu component for browsing and selecting skills.

## Imports
- **Stdlib**: (none)
- **External**: `react`, `react/compiler-runtime`, `lodash-es/capitalize`
- **Internal**: commands, ink, skills loadSkillsDir, file, format, settings constants, stringUtils, ConfigurableShortcutHint, design-system Dialog

## Logic
1. `SkillCommand` - CommandBase & PromptCommand type
2. `SkillSource` - SettingSource | 'plugin' | 'mcp'
3. `Props` - { onExit, commands }
4. `getSourceTitle` - gets title for skill source
5. plugin → 'Plugin skills', mcp → 'MCP skills', else → capitalized source name + ' skills'
6. `getSourceSubtitle` - gets subtitle for skill source
7. MCP skills show server names (skill names are `<server>:<skill>`)
8. File-based skills show filesystem paths
9. Shows skillsPath and commands path if hasCommandsSkills
10. `SkillsMenu` - React component for skills menu
11. Uses React compiler runtime (_c) for memoization
12. Filters commands to skills only
13. Groups skills by source (policySettings, userSettings, projectSettings, localSettings, flagSettings, plugin, mcp)
14. Sorts each group alphabetically
15. Renders Dialog with skill groups
16. Shows source title and subtitle for each group
17. Uses ConfigurableShortcutHint for keyboard shortcuts
18. `estimateSkillFrontmatterTokens`, `getSkillsPath` - skills functions
19. `getDisplayPath` - gets display path
20. `formatTokens` - formats tokens
21. `getSettingSourceName` - gets setting source name
22. `plural` - pluralizes string

## Exports
- `SkillsMenu` - skills menu component
- `getSourceTitle` - gets source title
- `getSourceSubtitle` - gets source subtitle
