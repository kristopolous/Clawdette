## Purpose
Generates a complete agent configuration from a natural language description using the inference provider.

## Imports
- **External**: @anthropic-ai/sdk/resources/index.mjs (ContentBlock type)
- **Internal**: src/context (getUserContext),src/services/api/claude (queryModelWithoutStreaming),src/Tool (getEmptyToolPermissionContext),src/tools/AgentTool/constants (AGENT_TOOL_NAME),src/utils/api (prependUserContext),src/utils/messages (createUserMessage, normalizeMessagesForAPI),src/utils/model/model (ModelName type),memdir/paths (isAutoMemoryEnabled), services/analytics/index (logEvent, AnalyticsMetadata type), utils/slowOperations (jsonParse), utils/systemPromptType (asSystemPrompt)

## Logic
Constructs a detailed system prompt for agent generation, combines it with user context and the user prompt, queries the inference provider for a JSON response, and parses the result into identifier, whenToUse, and systemPrompt fields. Includes optional memory instructions when the feature is enabled. Logs analytics events on successful generation.

## Exports
- `generateAgent` - async function that generates an agent configuration from a user prompt using the inference provider

### Helpful Prompt Templates

- **(Agent creation system prompt)** - "You are an elite AI agent architect specializing in crafting high-performance agent configurations. When a user describes what they want an agent to do: 1. Extract Core Intent - identify purpose, responsibilities, success criteria. 2. Design Expert Persona - create compelling expert identity. 3. Architect Comprehensive Instructions - develop system prompt with behavioral boundaries, methodologies, edge cases, output format expectations. 4. Optimize for Performance - include decision frameworks, quality control, workflow patterns, escalation strategies. 5. Create Identifier - lowercase, hyphens, 2-4 words. 6. Include examples in whenToUse field with <example> tags showing Agent tool usage. Output must be valid JSON with identifier, whenToUse, and systemPrompt fields."

- **(Agent memory instructions)** - "If the user mentions memory/remember/learn/persist, or if the agent would benefit from building knowledge across conversations, include domain-specific memory update instructions in the systemPrompt. Add a section: 'Update your agent memory as you discover [domain-specific items].' Include examples of what to record tailored to the agent's domain (code patterns for reviewers, test patterns for test-runners, codepaths for architects, etc.)"
