# updateConfig

## Purpose
Implements the /update-config bundled skill for generating and updating settings configuration files.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: settings types, JSON utils, bundledSkills

## Logic
1. `generateSettingsSchema` - generates JSON Schema from Zod settings schema
2. Provides settings file locations table (global/project/local)
3. Documents settings load order: user → project → local
4. Includes examples for permissions, env vars, model/agent config
5. Permission rule syntax: exact match, prefix wildcard, tool-only
6. Shows JSON schema reference for all settings fields
7. Helps users create properly formatted settings files

## Exports
- `registerUpdateConfigSkill` - function that registers the /update-config skill
- `generateSettingsSchema` - generates JSON Schema from Zod schema

### Helpful Prompt Templates

- **(Update Config skill)** - "Modify Claude Code configuration by updatingsettingson files. ## When Hooks Are Required: If user wants automatic response to an EVENT, they need a hook insettingson. Memory/preferences cannot trigger automated actions. ## CRITICAL: Read Before Write - Always read existing settings first, merge never replace. ## CRITICAL: Use AskUserQuestion for Ambiguity. ## Decision: Config tool for simple settings (theme, model, language, defaultMode); Editsettingson directly for hooks, permissions, env vars, MCP, plugins. ## Workflow: Clarify intent → Read existing file → Merge carefully → Edit file → Confirm. ## Merging Arrays: Preserve existing permissions, don't replace."

- **(Hooks documentation)** - "Hooks run commands at specific lifecycle events. Events: PermissionRequest, PreToolUse, PostToolUse, PostToolUseFailure, Notification, Stop, PreCompact, PostCompact, UserPromptSubmit, SessionStart. Hook types: command (shell), prompt (LLM condition), agent (with tools). Hook input via stdin JSON. Hook output via JSON with systemMessage, continue, stopReason, suppressOutput, decision, hookSpecificOutput fields."

- **(Hook verification flow)** - "Given an event, matcher, target file, and desired behavior, follow this flow: 1. Dedup check - read target file for existing hook. 2. Construct command for THIS project - extract payload safely with jq, invoke tool the right way. 3. Pipe-test the raw command - synthesize stdin payload, check exit code AND side effect. 4. Write the JSON - merge into target file. 5. Validate syntax + schema with jq -e. 6. Prove the hook fires - introduce violation, confirm fix, clean up. 7. Handoff - tell user hook is live, point to /hooks."
