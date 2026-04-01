## Purpose
Tool prompt documentation for ExitPlanMode - instructs the model on when and how to use the tool to exit plan mode and request user approval.

## Imports
- None (this is a static prompt string)

## Logic
Defines the instruction text `EXIT_PLAN_MODE_V2_TOOL_PROMPT` that explains:
- The tool's purpose: signal completion of planning and readiness for user review
- How it works: reads plan from file (doesn't take plan as parameter)
- When to use: only for tasks requiring implementation planning, not research
- Pre-conditions: plan must be complete, use AskUserQuestionTool first if unclear
- Examples of correct/incorrect usage

## Exports
- `EXIT_PLAN_MODE_V2_TOOL_PROMPT` - the prompt string
