## Purpose
Constructs system prompts for the agent, assembling static and dynamic sections based on environment, tools, model, and feature flags.

## Imports
- **Stdlib**: `os`
- **External**: `bun:bundle`
- **Internal**: `utils/env`, `utils/git`, `utils/cwd`, `bootstrap/state`, `utils/worktree`, `constants/common`, `utils/settings/settings`, tool constants from individual tool modules, `Tool`, `types/command`, `utils/model/model`, `commands`, `constants/outputStyles`, `services/mcp/types`, `utils/embeddedTools`, `tools/AgentTool/built-in/exploreAgent`, `tools/AgentTool/builtInAgents`, `utils/permissions/filesystem`, `utils/envUtils`, `tools/REPLTool/constants`, `services/analytics/growthbook`, `utils/betas`, `tools/AgentTool/forkSubagent`, `constants/systemPromptSections`, `constants/xml`, `utils/debug`, `memdir/memdir`, `utils/undercover`, `utils/mcpInstructionsDelta`, and conditional imports for cached microcompact, proactive, brief, and skill search modules

## Logic
Assembles system prompts by combining static cacheable sections (intro, system rules, task guidance, actions, tools, tone, output efficiency) with dynamic sections (session guidance, memory, model overrides, environment info, language, output style, MCP instructions, scratchpad, function result clearing, token budgets, brief mode). Supports simple mode, proactive/autonomous mode, and REPL mode. Environment detection, model knowledge cutoffs, and shell info are computed for context injection.

## Exports
- `CLAUDE_CODE_DOCS_MAP_URL` - URL to the documentation mapping file
- `SYSTEM_PROMPT_DYNAMIC_BOUNDARY` - marker separating static cacheable content from dynamic content
- `prependBullets` - utility that prepends bullet markers to an array of strings
- `getSystemPrompt` - async function that builds the full system prompt array from tools, model, directories, and MCP clients
- `computeEnvInfo` - async function that computes detailed environment info string including model, git status, platform, and shell
- `computeSimpleEnvInfo` - async function that computes a simplified environment info string with worktree awareness
- `getUnameSR` - returns OS version string equivalent to `uname -sr`
- `DEFAULT_AGENT_PROMPT` - default prompt used for agent sub-tasks
- `enhanceSystemPromptWithEnvDetails` - appends environment details and notes to an existing system prompt for subagents
- `getScratchpadInstructions` - returns scratchpad directory usage instructions when enabled
