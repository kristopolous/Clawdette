# command

## Purpose
Provides type definitions for local commands and prompt commands.

## Imports
- **Stdlib**: (none)
- **External**: `@anthropic-ai/sdk`, `crypto`
- **Internal**: hooks, compact, MCP types, Tool, effort, ide, settings, theme, logs, message, plugin types

## Logic
1. `LocalCommandResult` - union: text value, compact result, or skip
2. `PromptCommand` - prompt-type command with progressMessage, contentLength, argNames
3. allowedTools, model, source (user/project/local/flag/builtin/mcp/plugin/bundled)
4. pluginInfo with manifest and repository
5. disableNonInteractive for headless mode
6. hooks for hook registration on invocation
7. skillRoot for CLAUDE_PLUGIN_ROOT environment variable
8. context: inline (default) or fork (sub-agent with separate context)
9. agent type for forked execution
10. effort value for effort-based model selection
11. paths glob patterns for file-specific skills
12. `getPromptForCommand` - async function generating prompt content
13. `LocalCommandCall` - call signature for local command implementation
14. `LocalCommandModule` - module shape with call function
15. `LocalJSXCommandContext` - ToolUseContext extension for JSX commands

## Exports
- `LocalCommandResult` - result type for local commands
- `PromptCommand` - type for prompt commands
- `LocalCommandCall` - call signature type
- `LocalCommandModule` - module shape type
- `LocalJSXCommandContext` - JSX command context type
