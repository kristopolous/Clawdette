# loadSkillsDir

## Purpose
Loads and manages skills from filesystem directories, supporting multiple sources (managed, user, project, additional dirs) with deduplication, symlink resolution, and dynamic/conditional skill activation.

## Imports

- **Stdlib**: `fs/promises` (realpath), `path` (basename, dirname, isAbsolute, join, sep, relative)
- **External**: `ignore`, `lodash-es/memoize`
- **Internal**: 
  - Bootstrap: `getAdditionalDirectoriesForMd`, `getSessionId`
  - Analytics: `logEvent`
  - Token estimation: `roughTokenCountEstimation`
  - Types: `Command`, `PromptCommand`
  - Utils: `parseArgumentNames`, `substituteArguments`, `logForDebugging`, `EFFORT_LEVELS`, `parseEffortValue`, `getConfigHomeDir`, `isBareMode`, `isEnvTruthy`, `isENOENT`, `isFsInaccessible`, `coerceDescriptionToString`, `parseFrontmatter`, `parseBooleanFrontmatter`, `parseShellFrontmatter`, `splitPathInFrontmatter`, `getFsImplementation`, `isPathGitignored`, `logError`, `extractDescriptionFromMarkdown`, `getProjectDirsUpToHome`, `loadMarkdownFilesForSubdir`, `parseSlashCommandToolsFromFrontmatter`, `parseUserSpecifiedModel`, `executeShellCommandsInPrompt`, `isSettingSourceEnabled`, `getManagedFilePath`, `isRestrictedToPluginOnly`, `HooksSchema`, `createSignal`
  - Skills: `registerMCPSkillBuilders`

## Logic

### Skill Directory Structure

The module loads skills from two directory structures:

1. **`/skills/` directories** - Modern format requiring directory layout:
   - `skill-name/SKILL.md` (directory must contain a `SKILL.md` file)
   - Single `.md` files are NOT supported

2. **Legacy `/commands/` directories** - Supports both:
   - `skill-name/SKILL.md` (directory format)
   - `command-name.md` (single file format)
   - Commands default to `user-invocable: true`

### Skill Loading Sources

Skills are loaded from multiple sources in parallel:

1. **Managed** (`policySettings`): `~/.ai-assistant/skills` or managed path `/.ai-assistant/skills`
2. **User** (`userSettings`): `~/.ai-assistant/skills`
3. **Project** (`projectSettings`): `.ai-assistant/skills` directories found by walking up from cwd to home
4. **Additional** (`projectSettings`): `--add-dir` paths at `<dir>/.ai-assistant/skills`
5. **Legacy commands** (`commands_DEPRECATED`): `commands/` directories

### Deduplication

Skills are deduplicated by resolved canonical path using `realpath` to handle:
- Symlinks pointing to the same file
- Same file accessed via different paths
- First-wins ordering (earlier sources in the array take precedence)

### Bare Mode

When `--bare` flag is set:
- Skips auto-discovery of managed/user/project directories
- Only loads explicit `--add-dir` paths
- Still respects `skillsLocked` policy

### Dynamic Skill Discovery

During a session, new skill directories can be discovered when:
- File operations occur in nested directories
- `discoverSkillDirsForPaths()` walks up from file paths to cwd looking for `.ai-assistant/skills`
- Gitignored directories are skipped
- New skills are loaded and merged, with deeper paths taking precedence

### Conditional Skills

Skills can specify `paths` frontmatter for conditional activation:
- Stored as "conditional" until a matching file is touched
- Activated via `activateConditionalSkillsForPaths()` using gitignore-style matching
- Once activated, added to dynamic skills and available to the model

### Shell Command Execution

For non-MCP skills, inline shell commands (`!`...`` `` ` `` or ```!` `` ```` ```) in skill markdown are executed via `executeShellCommandsInPrompt()` with:
- `${SKILL_DIR}` replaced with the skill's directory
- `${SESSION_ID}` replaced with the current session ID
- Allowed tools passed from skill's `allowed-tools` frontmatter

MCP skills skip shell execution for security (remote/untrusted).

### Memoization

`getSkillDirCommands` is memoized to avoid repeated filesystem reads. Use `clearSkillCaches()` to reset.

## Exports

- `getSkillsPath(source, dir)` - Returns config directory path for a given source
- `estimateSkillFrontmatterTokens(skill)` - Estimates token count from skill frontmatter
- `parseSkillFrontmatterFields(frontmatter, markdownContent, resolvedName, descriptionFallbackLabel)` - Parses shared frontmatter fields for file-based and MCP skills
- `createSkillCommand(...)` - Creates a skill Command object with prompt generation
- `getSkillDirCommands(cwd)` - Main memoized function to load all skills
- `clearSkillCaches()` - Clears all skill caches (including legacy)
- `getCommandDirCommands(cwd)` - Deprecated alias for `getSkillDirCommands`
- `clearCommandCaches()` - Deprecated alias for `clearSkillCaches`
- `transformSkillFiles(files)` - Transforms markdown files for legacy commands format
- `onDynamicSkillsLoaded(callback)` - Registers callback for dynamic skill loading events, returns unsubscribe function
- `discoverSkillDirsForPaths(filePaths, cwd)` - Discovers skill directories by walking up from file paths
- `addSkillDirectories(dirs)` - Loads skills from directories and merges into dynamic skills
- `getDynamicSkills()` - Returns all dynamically discovered skills
- `activateConditionalSkillsForPaths(filePaths, cwd)` - Activates conditional skills matching file paths
- `getConditionalSkillCount()` - Returns count of pending conditional skills
- `clearDynamicSkills()` - Clears dynamic skill state
- `LoadedFrom` - Type union: `'commands_DEPRECATED' | 'skills' | 'plugin' | 'managed' | 'bundled' | 'mcp'`
