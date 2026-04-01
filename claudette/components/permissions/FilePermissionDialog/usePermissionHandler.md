## Purpose
Implements permission handler functions that process user decisions (accept once, accept session, reject) with analytics logging and permission rule updates.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS`, `logEvent`, `sanitizeToolNameForAnalytics`, `ToolPermissionContext`, `CLAUDE_FOLDER_PERMISSION_PATTERN`, `FILE_EDIT_TOOL_NAME`, `GLOBAL_CLAUDE_FOLDER_PERMISSION_PATTERN`, `env`, `generateSuggestions`, `PermissionUpdate`, `CompletionType`, `logUnaryEvent`, `ToolUseConfirm`, `FileOperationType`, `PermissionOption`

## Logic
1. Logs permission events (accept/reject) with completion type, language, message ID, and feedback metadata
2. handleAcceptOnce logs the accept event and calls onAllow with the original input and optional feedback
3. handleAcceptSession generates permission suggestions based on scope (claude-folder uses predefined patterns, other paths use generateSuggestions) and calls onAllow with the suggestions
4. handleReject logs the reject event, calls onReject, and passes optional feedback to the inference provider
5. PERMISSION_HANDLERS maps option types to their corresponding handler functions

## Exports
- `PermissionHandlerParams` - type defining parameters passed to all permission handlers
- `PermissionHandlerOptions` - type defining optional feedback, scope, and mode tracking options
- `PERMISSION_HANDLERS` - record mapping permission option types to their handler functions (accept-once, accept-session, reject)
