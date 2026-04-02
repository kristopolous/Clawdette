# planModeV2

## Purpose
Controls plan mode v2 behavior: agent counts per subscription tier, interview phase gating, and plan file structure experiments.

## Imports
- **Internal**: `../services/analytics/growthbook`, `./auth`, `./envUtils`

## Logic
1. **getPlanModeV2AgentCount** — Returns agent count based on subscription type and rate limit tier. `max` + `default_claude_max_20x` = 3 agents, `enterprise`/`team` = 3 agents, otherwise 1. Environment variable `CLAUDE_CODE_PLAN_V2_AGENT_COUNT` overrides (1-10).
2. **getPlanModeV2ExploreAgentCount** — Returns explore agent count (default 3). Overridable via `CLAUDE_CODE_PLAN_V2_EXPLORE_AGENT_COUNT` env var (1-10).
3. **isPlanModeInterviewPhaseEnabled** — Always enabled for `ant` user type. Otherwise checks env var `CLAUDE_CODE_PLAN_MODE_INTERVIEW_PHASE`, then GrowthBook feature flag `tengu_plan_mode_interview_phase`.
4. **getPewterLedgerVariant** — Returns the active arm of the `tengu_pewter_ledger` experiment (`trim`|`cut`|`cap`|`null`). Controls Phase 4 "Final Plan" bullet strictness in the 5-phase plan mode workflow.

## Exports
- `getPlanModeV2AgentCount` - Get agent count based on subscription tier
- `getPlanModeV2ExploreAgentCount` - Get explore agent count (default 3)
- `isPlanModeInterviewPhaseEnabled` - Check if interview phase is enabled
- `PewterLedgerVariant` - Type: `'trim' | 'cut' | 'cap' | null`
- `getPewterLedgerVariant` - Get active pewter ledger experiment variant
