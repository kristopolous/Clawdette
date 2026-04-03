# ```ExitPlanModeV2Tool```

## Purpose

Tool for exiting plan mode, presenting the plan for approval and transitioning back to normal mode with appropriate permission handling.

## Imports

- **Stdlib**: `fs/promises`
- **External**: `zod/v4`
- **Internal**: 
  - State management: `getAllowedChannels`, `hasExitedPlanModeInSession`, `setHasExitedPlanMode`, `setNeedsAutoModeExitAttachment`, `setNeedsPlanModeExitAttachment`
  - Analytics: `logEvent`, `AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS`
  - Tool utilities: `buildTool`, `Tool`, `ToolDef`, `toolMatchesName`
  - Utils: `formatAgentId`, `generateRequestId`, `isAgentSwarmsEnabled`, `logForDebugging`, `findInProcessTeammateTaskId`, `setAwaitingPlanApproval`, `lazySchema`, `logError`, `getPlan`, `getPlanFilePath`, `persistFileSnapshotIfRemote`, `jsonStringify`, `getAgentName`, `getTeamName`, `isPlanModeRequired`, `isTeammate`, `writeToMailbox`
  - Other tools: `AGENT_TOOL_NAME`, `TEAM_CREATE_TOOL_NAME`
  - Local: `EXIT_PLAN_MODE_V2_TOOL_NAME`, `EXIT_PLAN_MODE_V2_TOOL_PROMPT`, `renderToolResultMessage`, `renderToolUseMessage`, `renderToolUseRejectedMessage`

## Logic

1. Validates the tool is called in plan mode, rejecting if not
2. Handles permission requests - asks for user confirmation or bypasses for teammates
3. Persists edited plan to disk and updates snapshots
4. For teammates requiring plan approval: sends approval request to team lead via mailbox and marks task as awaiting approval
5. Updates application state to exit plan mode and restore previous mode
6. Handles auto-mode gate fallback logic when circuit breaker disables auto mode
7. Restores appropriate permissions based on the previous mode (auto vs others)
8. Returns formatted tool result with plan content and metadata

## Exports

- `ExitPlanModeV2Tool: Tool<InputSchema, Output>`
- `AllowedPrompt: z.infer<ReturnType<typeof allowedPromptSchema>>`
- `_sdkInputSchema: z.ZodObject<...>`
- `outputSchema: z.ZodObject<...>`
- `Output: z.infer<OutputSchema>`
