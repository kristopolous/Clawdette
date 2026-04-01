## Purpose
Generates a complete agent configuration from a natural language description using the inference provider.

## Imports
- **External**: @anthropic-ai/sdk/resources/index.mjs (ContentBlock type)
- **Internal**: src/context.js (getUserContext), src/services/api/claude.js (queryModelWithoutStreaming), src/Tool.js (getEmptyToolPermissionContext), src/tools/AgentTool/constants.js (AGENT_TOOL_NAME), src/utils/api.js (prependUserContext), src/utils/messages.js (createUserMessage, normalizeMessagesForAPI), src/utils/model/model.js (ModelName type), memdir/paths.js (isAutoMemoryEnabled), services/analytics/index.js (logEvent, AnalyticsMetadata type), utils/slowOperations.js (jsonParse), utils/systemPromptType.js (asSystemPrompt)

## Logic
Constructs a detailed system prompt for agent generation, combines it with user context and the user prompt, queries the inference provider for a JSON response, and parses the result into identifier, whenToUse, and systemPrompt fields. Includes optional memory instructions when the feature is enabled. Logs analytics events on successful generation.

## Exports
- `generateAgent` - async function that generates an agent configuration from a user prompt using the inference provider
