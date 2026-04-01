# bundledSkills

## Purpose
Provides registry and infrastructure for bundled skills that ship with the CLI.

## Imports
- **Stdlib**: `fs`, `fs/promises`, `path`
- **External**: `@anthropic-ai/sdk` types
- **Internal**: Tool types, command types, debug utils, filesystem utils, settings types

## Logic
1. `BundledSkillDefinition` type defines skill properties (name, description, aliases, hooks, files, etc.)
2. `registerBundledSkill` - registers a skill command programmatically
3. Handles file extraction for skills with embedded files (extracts to disk on first invocation)
4. Memoizes extraction promise to prevent race conditions
5. Prepends base directory line to prompt so model can Read/Grep extracted files
6. Compiled into CLI binary, available to all users
7. Follows same pattern as registerPostSamplingHook for internal features

## Exports
- `BundledSkillDefinition` - type for bundled skill configuration
- `registerBundledSkill` - function to register a bundled skill
- `registerBundledSkills` - registers all built-in skills
