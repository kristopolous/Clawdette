# tools/AgentTool/constants

## Purpose
Defines constants for the Agent tool.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `AGENT_TOOL_NAME` - 'Agent' (current tool name)
2. `LEGACY_AGENT_TOOL_NAME` - 'Task' (backward compat for permission rules, hooks, resumed sessions)
3. `VERIFICATION_AGENT_TYPE` - 'verification' (verification agent type)
4. `ONE_SHOT_BUILTIN_AGENT_TYPES` - ReadonlySet with 'Explore', 'Plan'
5. One-shot agents run once and return report without parent SendMessages
6. Skip agentId/SendMessage/usage trailer for token savings (~135 chars × 34M/week)

## Exports
- `AGENT_TOOL_NAME` - current agent tool name
- `LEGACY_AGENT_TOOL_NAME` - legacy tool name for backward compat
- `VERIFICATION_AGENT_TYPE` - verification agent type
- `ONE_SHOT_BUILTIN_AGENT_TYPES` - set of one-shot agent types
