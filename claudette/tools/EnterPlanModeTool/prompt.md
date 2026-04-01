## Purpose
Provides the prompt for EnterPlanMode tool, with variants for external and Anthropic users.

## Imports
- **Internal**:
  - `isPlanModeInterviewPhaseEnabled` utility
  - `ASK_USER_QUESTION_TOOL_NAME` constant from AskUserQuestionTool

## Logic
Exports `getEnterPlanModeToolPrompt()` which returns the appropriate prompt based on `USER_TYPE` environment variable:
- External users get detailed guidance with 7 when-to-use conditions, examples, and "What Happens in Plan Mode" section (unless interview phase enabled)
- Anthropic users get a more conservative variant focusing on significant architectural ambiguity

Both variants explain:
- Purpose: get user sign-off before implementation
- When to use (implementation tasks, multiple approaches, unclear requirements, etc.)
- When NOT to use (simple tasks, research, user wants to start immediately)
- What happens in plan mode (exploration, design, exit with ExitPlanMode)
- Good/bad examples

## Exports
- `getEnterPlanModeToolPrompt()` - returns the prompt string
