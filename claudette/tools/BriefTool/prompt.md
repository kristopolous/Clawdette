# BriefTool/prompt

## Purpose

Exports constants defining the BriefTool (SendUserMessage) name, description, and prompt documentation. Provides guidance on how to effectively communicate with the user through this tool, including when to send messages, how to use attachments, and best practices for proactive vs. normal status.

## Imports

- **Stdlib**: None
- **External**: None
- **Internal**: None

## Logic

- `BRIEF_TOOL_NAME`: `'SendUserMessage'` - current canonical tool name
- `LEGACY_BRIEF_TOOL_NAME`: `'Brief'` - old name, kept for backward compatibility
- `DESCRIPTION`: `'Send a message to the user'` - short tool description
- `BRIEF_TOOL_PROMPT`: Concise usage instructions:
  - Purpose: "Send a message the user will read" — text outside the tool is effectively invisible
  - `message` field supports markdown
  - `attachments` accepts file paths (absolute or relative) for images, diffs, logs
  - `status` labels intent:
    - `'normal'`: replying to user's last message
    - `'proactive'`: initiating contact (scheduled task finished, blocker surfaced, need input)
  - Note: downstream routing uses status; set it honestly
- `BRIEF_PROACTIVE_SECTION`: Extended guidance on user communication:
  - Emphasizes that messages inside the tool are what users actually read
  - Warns against placing important information outside the tool
  - Pattern: ack → work → result; send checkpoints at meaningful milestones
  - Keep messages concise (decision, file:line, PR number)
  - Use second person ("your config"), not third

## Exports

- `BRIEF_TOOL_NAME: string`
- `LEGACY_BRIEF_TOOL_NAME: string`
- `DESCRIPTION: string`
- `BRIEF_TOOL_PROMPT: string`
- `BRIEF_PROACTIVE_SECTION: string`
