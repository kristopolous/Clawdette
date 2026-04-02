# ExitPlanModeTool/prompt

## Purpose

Defines the prompt/instructions for the ExitPlanModeTool (V2 version). This multi-line string explains when and how to use the tool, its behavior, prerequisites, and examples. It guides the AI to signal completion of planning and request user approval.

## Imports

- **Stdlib**: None
- **External**: None
- **Internal**: None (stub file with hardcoded constant only)

## Logic

The file exports a single constant `EXIT_PLAN_MODE_V2_TOOL_PROMPT` containing comprehensive documentation as a template literal:

- **Tool Purpose**: Used when in plan mode, after writing a plan to the plan file, to signal readiness for user approval
- **Key Behavior**: The tool does NOT accept plan content as a parameter; it reads the plan from the file that was written
- **When to Use**: Only for tasks requiring implementation planning (coding). Do NOT use for research/information-gathering tasks
- **Prerequisites**: Ensure the plan is complete and unambiguous; use `AskUserQuestion` first if there are unresolved questions
- **Anti-pattern**: Do NOT use `AskUserQuestion` to ask "Is this plan okay?" - that's what ExitPlanMode does inherently
- **Examples**: Three contrasting examples (research vs implementation, simple vs complex, with/without clarifications)

The constant includes a reference to `ASK_USER_QUESTION_TOOL_NAME` (hardcoded to avoid relative imports in stub).

## Exports

- `EXIT_PLAN_MODE_V2_TOOL_PROMPT: string`
