## Purpose
Generates agent configurations using an inference provider based on user descriptions.

## Imports
- **External**: @anthropic-ai/sdk (ContentBlock type)
- **Internal**: context utilities, API services (queryModelWithoutStreaming), Tool utilities, AgentTool constants, API utilities, message utilities, model types, memdir/paths (isAutoMemoryEnabled), analytics services, slow operation utilities (jsonParse), system prompt utilities

## Logic
Constructs a detailed system prompt for agent generation, combines it with user context and the user request, queries the inference provider, and parses the JSON response. Includes memory instructions when the feature is enabled. Handles malformed responses by extracting JSON objects and validates the parsed result.

## Exports
- `generateAgent` - async function that takes a user prompt, model, existing identifiers, and abort signal, returns a GeneratedAgent object with identifier, whenToUse, and systemPrompt
