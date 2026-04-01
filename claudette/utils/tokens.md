# utils/tokens

## Purpose
Provides token usage and counting utilities.

## Imports
- **Stdlib**: (none)
- **External**: `@anthropic-ai/sdk`
- **Internal**: tokenEstimation, message types, messages, JSON utils

## Logic
1. `getTokenUsage` - gets token usage from message
2. Checks for assistant message with real (non-synthetic) usage
3. Excludes synthetic messages and SYNTHETIC_MODEL
4. `getAssistantMessageId` - gets API response ID for assistant message
5. Used to identify split assistant records from same API response
6. When parallel tool calls streamed, each content block becomes separate AssistantMessage
7. They all share same message.id
8. `getTokenCountFromUsage` - calculates total context window tokens from usage data
9. Includes input_tokens + cache tokens + output_tokens
10. Represents full context size at time of API call
11. Use tokenCountWithEstimation() when needing context size from messages
12. `tokenCountFromLastAPIResponse` - gets token count from last API response
13. Iterates backwards through messages to find usage
14. `finalContextTokensFromLastResponse` - gets final context window from last response's usage.iterations[-1]
15. Used for task_budget.remaining computation across compaction boundaries
16. Server's budget countdown is context-based, remaining decrements by pre-compact final window
17. Falls back to top-level input_tokens + output_tokens when iterations absent
18. Both paths exclude cache tokens to match #304930's formula
19. `tokenCountWithEstimation` - counts tokens with estimation
20. `getCurrentUsage` - gets current usage
21. `BYTES_PER_TOKEN` - bytes per token constant
22. `roughTokenCountEstimationForMessages` - rough token count estimation
23. `SYNTHETIC_MESSAGES`, `SYNTHETIC_MODEL` - synthetic message/model constants
24. `jsonStringify` - JSON stringify

## Exports
- `getTokenUsage` - gets token usage
- `getAssistantMessageId` - gets assistant message ID
- `getTokenCountFromUsage` - gets token count from usage
- `tokenCountFromLastAPIResponse` - gets token count from last response
- `finalContextTokensFromLastResponse` - gets final context tokens
- `tokenCountWithEstimation` - counts tokens with estimation
- `getCurrentUsage` - gets current usage
- `BYTES_PER_TOKEN` - bytes per token constant
