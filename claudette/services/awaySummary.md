# awaySummary

## Purpose
Generates short "while you were away" session summaries when users return after stepping away.

## Imports
- **Stdlib**: (none)
- **External**: `@anthropic-ai/sdk` (APIUserAbortError)
- **Internal**: Tool, message types, debug, messages utils, model utils, systemPromptType, API client, SessionMemory

## Logic
1. `RECENT_MESSAGE_WINDOW` (30) - truncates to recent context (~15 exchanges)
2. `buildAwaySummaryPrompt` - builds prompt with session memory block and instructions
3. Prompt instructs: 1-3 short sentences, state high-level task, concrete next step, skip status reports
4. `generateAwaySummary` - main function taking messages and abort signal
5. Returns null on abort, empty transcript, or error
6. Fetches session memory content for broader context
7. Appends summary prompt to recent messages
8. Queries small/fast model without streaming (thinking disabled)
9. Empty tool context for summary generation
10. Handles APIUserAbortError and signal.aborted gracefully
11. Logs errors via logForDebugging

## Exports
- `generateAwaySummary` - async function generating short session recap
