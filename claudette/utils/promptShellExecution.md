# utils/promptShellExecution

## Purpose
Parses prompt text and executes embedded shell commands.

## Imports
- **Stdlib**: `crypto`
- **External**: (none)
- **Internal**: Tool, BashTool, debug, errors, frontmatterParser, messages, permissions permissions, toolResultStorage, shell shellToolUtils

## Logic
1. Supports two syntaxes: code blocks (```! command ```) and inline (!`command`)
2. `BLOCK_PATTERN` - /```!\s*\n?([\s\S]*?)\n?```/g for code blocks
3. `INLINE_PATTERN` - /(?<=^|\s)!`([^`]+)`/gm for inline (gated by text.includes('!`'))
4. Positive lookbehind prevents false matches inside markdown inline code
5. `ShellOut` - { stdout, stderr, interrupted }
6. `PromptShellTool` - narrow structural slice for BashTool/PowerShellTool
7. `getPowerShellTool` - lazy getter for PowerShellTool (deferred until first use)
8. `executeShellCommandsInPrompt` - main execution function
9. Resolves shell tool once (BashTool or PowerShellTool based on shell param)
10. shell === undefined or 'bash' → BashTool
11. PowerShell only when runtime gate allows (user opt-in/out overrides frontmatter)
12. Parses and executes all embedded commands
13. Replaces command blocks with output in result text
14. Uses hasPermissionsToUseTool for permission check
15. Uses processToolResultBlock for result processing
16. `createAssistantMessage` - creates assistant message
17. `errorMessage`, `MalformedCommandError`, `ShellError` - error types

## Exports
- `BLOCK_PATTERN` - code block pattern regex
- `INLINE_PATTERN` - inline pattern regex
- `executeShellCommandsInPrompt` - executes embedded shell commands
