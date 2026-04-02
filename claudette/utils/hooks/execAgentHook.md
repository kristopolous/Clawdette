# execAgentHook

## Purpose
Executes an agent-based hook using a multi-turn LLM query with tool access. Used primarily for stop condition verification — the agent reads the session transcript and uses tools to verify whether a plan was completed.

## Imports
- **Stdlib**: `crypto` (randomUUID)
- **Internal**: `../../query`, `../../services/analytics`, `../../services/analytics/metadata`, `../../Tool`, `../../tools/SyntheticOutputTool`, `../../tools`, `../../types/ids`, `../../types/message`, `../abortController`, `../attachments`, `../combinedAbortSignal`, `../debug`, `../errors`, `../hooks`, `../messages`, `../model/model`, `../permissions/permissions`, `../sessionStorage`, `../settings/types`, `../slowOperations`, `../systemPromptType`, `./hookHelpers`, `./sessionHooks`

## Logic
1. **Setup** — generates a unique toolUseID, gets transcript path, replaces `$ARGUMENTS` in the hook prompt with JSON input.
2. **Signal handling** — creates a combined abort signal from the parent signal + hook timeout (default 60s).
3. **Tool configuration** — filters out existing StructuredOutput tools to avoid duplicates, adds a new StructuredOutput tool, filters out disallowed agent tools (prevents subagent spawning, plan mode entry).
4. **Agent context** — creates a modified ToolUseContext with a unique hook-agent ID, `isNonInteractiveSession: true`, thinking disabled, and a session-level rule allowing Read access to the transcript file.
5. **Multi-turn execution** — uses `query()` in a `for await` loop (max 50 turns). Processes stream events for spinner updates. Checks assistant messages for turn limit. Checks attachment messages for structured output (`hookResponseSchema`).
6. **Result handling**:
   - No structured output + max turns → `cancelled` (logged, no UI message).
   - No structured output + other → `cancelled` (error type 1).
   - `ok: false` → `blocking` with reason.
   - `ok: true` → `success` with attachment message.
   - General error → `non_blocking_error` (error type 2).
7. **Cleanup** — removes abort listener, cleans up combined signal, clears session hooks for the agent.

## Exports
- `execAgentHook` — async function that runs an `AgentHook` with multi-turn LLM execution, tool access, and structured output parsing. Returns `HookResult` with outcome `success`, `blocking`, `cancelled`, or `non_blocking_error`.
