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
