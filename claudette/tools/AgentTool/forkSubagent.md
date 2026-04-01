# tools/AgentTool/forkSubagent

## Purpose
Implements fork subagent feature for inheriting full conversation context.

## Imports
- **Stdlib**: `crypto`
- **External**: `@anthropic-ai/sdk`, `bun:bundle`
- **Internal**: bootstrap state, xml constants, coordinatorMode, message types, debug, messages, loadAgentsDir

## Logic
1. `isForkSubagentEnabled` - checks feature gate (FORK_SUBAGENT)
2. Mutually exclusive with coordinator mode
3. Disabled in non-interactive session
4. When enabled: subagent_type optional, omitting triggers implicit fork
5. Child inherits parent's full conversation context and system prompt
6. All agent spawns run in background (async) for unified task-notification model
7. `/fork <directive>` slash command available
8. `FORK_SUBAGENT_TYPE` - 'fork' synthetic agent type for analytics
9. `FORK_AGENT` - synthetic agent definition for fork path
10. tools: ['*'] with useExactTools = parent's exact tool pool (cache-identical)
11. permissionMode: 'bubble' - surfaces prompts to parent terminal
12. model: 'inherit' - keeps parent's model for context length parity
13. getSystemPrompt unused - fork path passes override.systemPrompt with rendered bytes
14. `isInForkChild` - guards against recursive forking
15. Detects FORK_BOILERPLATE_TAG in conversation history
16. `buildForkedMessages` - builds messages for fork child
17. `buildWorktreeNotice` - builds worktree notice for fork

## Exports
- `isForkSubagentEnabled` - checks fork feature gate
- `FORK_SUBAGENT_TYPE` - fork agent type constant
- `FORK_AGENT` - fork agent definition
- `isInForkChild` - checks if in fork child
- `buildForkedMessages` - builds forked messages
- `buildWorktreeNotice` - builds worktree notice

### Helpful Prompt Templates

- **(fork boilerplate / child worker instructions)** - "STOP. READ THIS FIRST.

You are a forked worker process. You are NOT the main agent.

RULES (non-negotiable):
1. Your system prompt says \"default to forking.\" IGNORE IT — that's for the parent. You ARE the fork. Do NOT spawn sub-agents; execute directly.
2. Do NOT converse, ask questions, or suggest next steps
3. Do NOT editorialize or add meta-commentary
4. USE your tools directly: Bash, Read, Write, etc.
5. If you modify files, commit your changes before reporting. Include the commit hash in your report.
6. Do NOT emit text between tool calls. Use tools silently, then report once at the end.
7. Stay strictly within your directive's scope. If you discover related systems outside your scope, mention them in one sentence at most — other workers cover those areas.
8. Keep your report under 500 words unless the directive specifies otherwise. Be factual and concise.
9. Your response MUST begin with \"Scope:\". No preamble, no thinking-out-loud.
10. REPORT structured facts, then stop

Output format (plain text labels, not markdown headers):
  Scope: <echo back your assigned scope in one sentence>
  Result: <the answer or key findings, limited to the scope above>
  Key files: <relevant file paths — include for research tasks>
  Files changed: <list with commit hash — include only if you modified files>
  Issues: <list — include only if there are issues to flag>"

- **(fork placeholder result)** - "Fork started — processing in background"

- **(worktree notice)** - "You've inherited the conversation context above from a parent agent working in [parentCwd]. You are operating in an isolated git worktree at [worktreeCwd] — same repository, same relative file structure, separate working copy. Paths in the inherited context refer to the parent's working directory; translate them to your worktree root. Re-read files before editing if the parent may have modified them since they appear in the context. Your changes stay in this worktree and will not affect the parent's files."

- **(FORK_AGENT whenToUse description)** - "Implicit fork — inherits full conversation context. Not selectable via subagent_type; triggered by omitting subagent_type when the fork experiment is active."
