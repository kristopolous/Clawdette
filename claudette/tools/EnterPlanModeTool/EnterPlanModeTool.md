# EnterPlanModeTool/EnterPlanModeTool

## Purpose

Tool for entering plan mode, a read-only exploration and design phase before implementation begins.

## Imports

- **External**: `zod/v4`
- **Internal**: 
  - State: `getAllowedChannels`, `handlePlanModeTransition`
  - Tool utilities: `buildTool`, `Tool`, `ToolDef`
  - Permissions: `applyPermissionUpdate`, `prepareContextForPlanMode`
  - Utils: `lazySchema`, `isPlanModeInterviewPhaseEnabled`
  - Local: `ENTER_PLAN_MODE_TOOL_NAME`, `getEnterPlanModeToolPrompt`, `renderToolResultMessage`, `renderToolUseMessage`, `renderToolUseRejectedMessage`

## Logic

1. Validates tool is not used in agent contexts
2. Handles plan mode transition gating based on channel mode
3. Updates app state to set permission mode to 'plan'
4. Prepares context for plan mode using permission setup (including classifier activation if auto mode)
5. Returns message indicating plan mode entry with workflow instructions
6. Includes different instructions based on whether interview phase is enabled

## Exports

- `EnterPlanModeTool: Tool<InputSchema, Output>`
- `Output: z.infer<OutputSchema>`
