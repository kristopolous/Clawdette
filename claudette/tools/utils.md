## Purpose
Provides small utilities for tagging and tracing tool use in message flows.

## Imports
- **Internal**: types from `src/types/message` (AssistantMessage, AttachmentMessage, SystemMessage, UserMessage)

## Logic
Exports two functions:
- `tagMessagesWithToolUseID(messages, toolUseID)`: Maps over messages array; if message.type === 'user', adds `sourceToolUseID` property to associate it with a pending tool call. Other message types pass through unchanged. This prevents duplicate "is running" indicators in UI.
- `getToolUseIDFromParentMessage(parentMessage, toolName)`: Searches `parentMessage.message.content` for a tool_use block with matching `name` and returns its `id`. Returns undefined if not found.

These are used in message routing and UI rendering to connect tool invocations with their results.

## Exports
- `tagMessagesWithToolUseID(messages, toolUseID)`
- `getToolUseIDFromParentMessage(parentMessage, toolName)`
