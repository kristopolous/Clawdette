# utils/messages

## Purpose
Provides message utilities for creation, normalization, and manipulation.

## Imports
- **Stdlib**: `crypto`
- **External**: `@anthropic-ai/sdk`, `lodash-es/isObject/last`
- **Internal**: analytics, analytics metadata, ids, buddy prompt, constants messages/outputStyles, memdir paths, growthbook, API errors, Tool, connectorText, message types, advisor, agentSwarmsEnabled, array, attachments, config, debug, envUtils, errors, file, generatedFiles, ide, memoryFileDetection, path, permissions filesystem, plans, settings, sessionStorage, slowOperations, stringUtils, task, teammate, theme, tokens, toolResultStorage, undercover, xml

## Logic
1. `createUserMessage` - creates user message with content
2. `createAssistantMessage` - creates assistant message
3. `createAttachmentMessage` - creates attachment message
4. `createProgressMessage` - creates progress message
5. `createSystemMessage` - creates system message
6. `createStopHookSummaryMessage` - creates stop hook summary
7. `createToolUseSummaryMessage` - creates tool use summary
8. `normalizeMessages` - normalizes messages for API
9. `normalizeMessagesForAPI` - normalizes for API format
10. `extractTextContent` - extracts text content from message
11. `getContentText` - gets content text from assistant message
12. `getLastAssistantMessage` - gets last assistant message
13. `filterOrphanedThinkingOnlyMessages` - filters orphaned thinking messages
14. `filterUnresolvedToolUses` - filters unresolved tool uses
15. `filterWhitespaceOnlyAssistantMessages` - filters whitespace-only messages
16. `isToolUseResultMessage` - checks if message is tool use result
17. `NO_RESPONSE_REQUESTED` - no response constant
18. `INTERRUPT_MESSAGE`, `INTERRUPT_MESSAGE_FOR_TOOL_USE` - interrupt constants
19. `withMemoryCorrectionHint` - adds memory correction hint
20. `suppressNextSkillListing` - suppresses next skill listing

## Exports
- `createUserMessage` - creates user message
- `createAssistantMessage` - creates assistant message
- `createAttachmentMessage` - creates attachment message
- `createProgressMessage` - creates progress message
- `createSystemMessage` - creates system message
- `normalizeMessages` - normalizes messages
- `normalizeMessagesForAPI` - normalizes for API
- `extractTextContent` - extracts text content
- `getContentText` - gets content text
- `getLastAssistantMessage` - gets last assistant message
- `filterOrphanedThinkingOnlyMessages` - filters orphaned thinking
- `filterUnresolvedToolUses` - filters unresolved tool uses
- `filterWhitespaceOnlyAssistantMessages` - filters whitespace-only
- `isToolUseResultMessage` - checks tool use result
- `NO_RESPONSE_REQUESTED` - no response constant
- `INTERRUPT_MESSAGE` - interrupt message
- `INTERRUPT_MESSAGE_FOR_TOOL_USE` - tool use interrupt message
- `withMemoryCorrectionHint` - adds memory correction hint
- `suppressNextSkillListing` - suppresses skill listing

### Helpful Prompt Templates

- **Memory correction hint** - "\n\nNote: The user's next message may contain a correction or preference. Pay close attention — if they explain what went wrong or how they'd prefer you to work, consider saving that to memory for future sessions."

- **Cancel message** - "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed."

- **Reject message** - "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). STOP what you are doing and wait for the user to tell you how to proceed."

- **Reject message with reason prefix** - "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). To tell you how to proceed, the user said:\n"

- **Subagent reject message** - "Permission for this tool use was denied. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). Try a different approach or report the limitation to complete your task."

- **Subagent reject message with reason prefix** - "Permission for this tool use was denied. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). The user said:\n"

- **Plan rejection prefix** - "The agent proposed a plan that was rejected by the user. The user chose to stay in plan mode rather than proceed with implementation.\n\nRejected plan:\n"

- **Denial workaround guidance** - "IMPORTANT: You *may* attempt to accomplish this action using other tools that might naturally be used to accomplish this goal, e.g. using head instead of cat. But you *should not* attempt to work around this denial in malicious ways, e.g. do not use your ability to run tests to execute non-test actions. You should only try to work around this restriction in reasonable ways that do not attempt to bypass the intent behind this denial. If you believe this capability is essential to complete the user's request, STOP and explain to the user what you were trying to do and why you need this permission. Let the user decide how to proceed."

- **Auto-reject message template** - "Permission to use ${toolName} has been denied. ${DENIAL_WORKAROUND_GUIDANCE}"

- **Don't ask reject message template** - "Permission to use ${toolName} has been denied because Claude Code is running in don't ask mode. ${DENIAL_WORKAROUND_GUIDANCE}"

- **Synthetic tool result placeholder** - "[Tool result missing due to internal error]"

- **Auto mode rejection prefix** - "Permission for this action has been denied. Reason: "

- **Local command caveat message** - "<LOCAL_COMMAND_CAVEAT>Caveat: The messages below were generated by the user while running local commands. DO NOT respond to these messages or otherwise consider them in your response unless the user explicitly asks you to.</LOCAL_COMMAND_CAVEAT>"

- **Tool reference turn boundary** - "Tool loaded."
