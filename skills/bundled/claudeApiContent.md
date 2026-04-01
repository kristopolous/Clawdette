# claudeApiContent

## Purpose
Provides embedded skill content files for the claude-api bundled skill with multi-language SDK documentation.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: Bundled skill markdown files (csharp, curl, go, java, php, python, ruby, typescript)

## Logic
1. Imports all skill markdown files as strings (Bun text loader)
2. `SKILL_MODEL_VARS` - runtime model ID constants (Opus, Sonnet, Haiku)
3. `SKILL_PROMPT` - main skill prompt template
4. `SKILL_FILES` - record mapping relative paths to file content
5. Covers Python/TypeScript Agent SDK patterns and README
6. Includes Claude API docs (streaming, tool-use, batches, files-api)
7. Shared docs (error-codes, live-sources, models, prompt-caching, tool-use-concepts)

## Exports
- `SKILL_MODEL_VARS` - model ID/name constants for template substitution
- `SKILL_PROMPT` - main skill prompt string
- `SKILL_FILES` - record of embedded skill documentation files
