# execPromptHook

## Purpose
Executes a prompt-based hook by sending the hook's prompt (with `$ARGUMENTS` replaced) to an LLM and parsing the JSON response to determine if a condition is met. Used for lightweight hook evaluations that don't need tool access.

## Imports
- **Stdlib**: `crypto` (randomUUID)
- **Internal**: `src/entrypoints/agentSdkTypes` (HookEvent), `../../services/api/claude`, `../../Tool`, `../../types/message`, `../attachments`, `../combinedAbortSignal`, `../debug`, `../errors`, `../hooks`, `../json`, `../messages`, `../model/model`, `../settings/types`, `../systemPromptType`, `./hookHelpers`

## Logic
1. **Prompt preparation** — replaces `$ARGUMENTS` in the hook prompt with the JSON input. Creates a user message directly (bypassing `processUserInput` to avoid triggering UserPromptSubmit hooks and infinite recursion).
2. **Message assembly** — prepends conversation history if provided, otherwise uses just the hook prompt message.
3. **API call** — calls `queryModelWithoutStreaming` with:
   - System prompt instructing the model to return JSON `{ ok: true }` or `{ ok: false, reason: "..." }`.
   - Thinking disabled, tools from context, JSON schema output format.
   - Model from hook config or `getSmallFastModel()` (Haiku).
   - Combined abort signal (parent + timeout, default 30s).
   - `isNonInteractiveSession: true`, no agents, querySource `hook_prompt`.
4. **Response parsing** — extracts text content, parses JSON with `safeParseJSON`, validates against `hookResponseSchema` (zod).
5. **Result handling**:
   - Invalid JSON → `non_blocking_error` with stderr "JSON validation failed".
   - Schema validation failure → `non_blocking_error` with schema error details.
   - `ok: false` → `blocking` with reason, `preventContinuation: true`.
   - `ok: true` → `success` with attachment message.
   - Abort/timeout → `cancelled`.
   - General error → `non_blocking_error`.

## Exports
- `execPromptHook` — async function that runs a `PromptHook` via a single non-streaming LLM call with JSON schema output. Returns `HookResult` with outcome `success`, `blocking`, `cancelled`, or `non_blocking_error`.
