# hookHelpers

## Purpose
Shared utilities for hooks: argument substitution in prompts, creating StructuredOutput tools for hook responses, and enforcing structured output via function hooks.

## Imports
- **Stdlib**: zod/v4
- **Internal**: ../../Tool, ../../tools/SyntheticOutputTool/SyntheticOutputTool, ../argumentSubstitution, ../lazySchema, ../messageQueueManager, ../messages, ./sessionHooks

## Logic
1. `hookResponseSchema` is a lazy zod schema with `ok: boolean` and optional `reason: string`, used by both prompt and agent hooks for structured responses.
2. `addArgumentsToPrompt` delegates to `substituteArguments`, replacing `$ARGUMENTS`, `$ARGUMENTS[n]`, or `$n` placeholders in a prompt with JSON input.
3. `createStructuredOutputTool` returns a Tool based on SyntheticOutputTool with the hookResponseSchema, instructing the model to call it exactly once at the end of its response.
4. `registerStructuredOutputEnforcement` adds a Stop hook that checks for a successful SyntheticOutputTool call; if missing, prompts the model to call it. Used by ask.tsx, [```execAgentHook```](execAgentHook.md), and background verification.

## Exports
- `hookResponseSchema` - Lazy zod schema for hook responses: `{ ok: boolean, reason?: string }`.
- `addArgumentsToPrompt(prompt, jsonInput)` - Replaces $ARGUMENTS placeholders (including indexed $ARGUMENTS[n] and $n shorthand) in a prompt with JSON input.
- `createStructuredOutputTool()` - Creates a StructuredOutput tool configured for hook responses, requiring exactly one call.
- `registerStructuredOutputEnforcement(setAppState, sessionId)` - Registers a Stop hook that enforces the model calls SyntheticOutputTool.

## Source
`hookHelpers`