# groupToolUses

## Purpose
Groups consecutive tool uses of the same type from the same API response for compact rendering. Only groups 2+ tools of the same type that support grouped rendering (via `renderGroupedToolUse`). Collects corresponding tool_results and attaches them to the grouped message. Uses a WeakMap cache keyed by tools array reference.

## Imports
- **External**: `@anthropic-ai/sdk/resources/beta/messages/messages.mjs` (`BetaToolUseBlock`), `@anthropic-ai/sdk/resources/messages/messages.mjs` (`ToolResultBlockParam`)
- **Internal**: `../Tool` (`Tools`), `../types/message` (`GroupedToolUseMessage`, `NormalizedAssistantMessage`, `NormalizedMessage`, `NormalizedUserMessage`, `ProgressMessage`, `RenderableMessage`)

## Items

### GROUPING_CACHE
**Type**: Constant (WeakMap)
WeakMap<Tools, Set<string>>. Caches tool names that support grouped rendering, keyed by tools array reference. Stable across renders; lets old entries be GC'd on MCP connect/disconnect.

### MessageWithoutProgress
**Type**: Type alias
`Exclude<NormalizedMessage, ProgressMessage>`

### GroupingResult
**Type**: Type alias
`{ messages: RenderableMessage[] }`

### getToolsWithGrouping
**Type**: Function (internal)
Returns Set of tool names that have `renderGroupedToolUse` truthy. Uses WeakMap cache.

### getToolUseInfo
**Type**: Function (internal)
Extracts `{ messageId, toolUseId, toolName }` from an assistant message if its first content block is a `tool_use`. Returns null otherwise.

### applyGrouping
**Type**: Function
Groups tool uses by `message.id + toolName` for tools that support grouping. Only creates groups with 2+ items. Collects corresponding `tool_result` user messages. In verbose mode, skips grouping entirely. Skips user messages whose tool_results are all already grouped. Outputs `GroupedToolUseMessage` objects with `type: 'grouped_tool_use'`.

## Exports
- `MessageWithoutProgress` — type excluding progress messages
- `GroupingResult` — type for grouping output
- `applyGrouping` — groups tool uses for compact rendering

## Source
`groupToolUses`