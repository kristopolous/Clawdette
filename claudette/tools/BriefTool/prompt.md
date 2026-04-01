## Purpose
Provides tool metadata (names, descriptions, prompts) for the Brief (SendUserMessage) tool.

## Imports
- None

## Logic
Exports four constants:
- `BRIEF_TOOL_NAME` - 'SendUserMessage' (current)
- `LEGACY_BRIEF_TOOL_NAME` - 'Brief' (old name)
- `DESCRIPTION` - 'Send a message to the user'
- `BRIEF_TOOL_PROMPT` - concise instructions: when to use, markdown support, attachments, and `status` field meanings ('normal' vs 'proactive').
- `BRIEF_PROACTIVE_SECTION` - longer guidance explaining that all user-facing replies must go through Brief, acknowledges need for checkpoints, tight messaging, second-person style. Used in broader documentation but not directly in tool prompt.

The tool prompt emphasizes that text outside BriefTool is likely unread; important content must be inside.

## Exports
- `BRIEF_TOOL_NAME` (string)
- `LEGACY_BRIEF_TOOL_NAME` (string)
- `DESCRIPTION` (string)
- `BRIEF_TOOL_PROMPT` (string)
- `BRIEF_PROACTIVE_SECTION` (string)
