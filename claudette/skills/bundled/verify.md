# verify

## Purpose
Implements the /verify bundled skill (ant-only) for verifying code changes by running the app.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: frontmatterParser, bundledSkills, verifyContent

## Logic
1. `registerVerifySkill` - registers the verify skill (ant-only, returns early for external)
2. Parses frontmatter from embedded SKILL_MD
3. Uses embedded skill files (SKILL_FILES) extracted on first invocation
4. Appends user request to skill prompt when args provided
5. Description from frontmatter or default

## Exports
- `registerVerifySkill` - function that registers the /verify skill (ant-only)
