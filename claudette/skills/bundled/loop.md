# loop

## Purpose
Implements the /loop bundled skill for scheduling recurring prompt/cron jobs.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ScheduleCronTool constants/prompt, bundledSkills

## Logic
1. `buildPrompt` - parses interval and prompt from args, schedules via CRON_CREATE_TOOL_NAME
2. Parsing priority: leading token (5m), trailing "every" clause, default (10m)
3. Interval to cron conversion table:
   - Nm (≤59) → */N * * * *
   - Nm (≥60) → 0 */H * * * (H = N/60, must divide 24)
   - Nh (≤23) → 0 */N * * *
   - Nd → 0 0 */N * *
   - Ns → ceil(N/60)m (cron min is 1 minute)
4. Rounds non-clean intervals to nearest valid cron expression
5. Shows usage if prompt is empty after parsing
6. Uses isKairosCronEnabled for feature gate

## Exports
- `registerLoopSkill` - function that registers the /loop skill
- `buildPrompt` - parses args and builds cron scheduling prompt
- Constants: DEFAULT_INTERVAL (10m), USAGE_MESSAGE
