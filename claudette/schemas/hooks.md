## Purpose
Defines Zod schemas for hook configurations to break circular import dependencies between settings types and plugin schemas.

## Imports
- **Stdlib**: none
- **External**: `zod/v4`
- **Internal**: `entrypoints/agentSdkTypes`, `utils/lazySchema`, `utils/shell/shellProvider`

## Logic
Builds individual hook schemas (Bash command, prompt, HTTP, agent) with shared fields like if-condition filtering, timeout, status messages, and once-run flags. Combines them into a discriminated union for hook commands, then wraps matcher configurations and the full hooks settings structure using lazy schemas to avoid circular references.

## Exports
- `HookCommandSchema` - discriminated union schema for command, prompt, agent, and http hook types
- `HookMatcherSchema` - schema for matcher configuration with pattern and hooks array
- `HooksSchema` - schema mapping hook events to arrays of matcher configurations
- `HookCommand` - inferred type for hook commands
- `BashCommandHook` - inferred type for command-type hooks
- `PromptHook` - inferred type for prompt-type hooks
- `AgentHook` - inferred type for agent-type hooks
- `HttpHook` - inferred type for http-type hooks
- `HookMatcher` - inferred type for hook matcher configurations
- `HooksSettings` - inferred type for the full hooks settings record
