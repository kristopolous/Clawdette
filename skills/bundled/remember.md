# remember

## Purpose
Implements the /remember bundled skill (ant-only) for reviewing and organizing memory layers.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: memdir paths, bundledSkills

## Logic
1. `registerRememberSkill` - registers the skill (ant-only, returns early for external)
2. Gathers all memory layers: CLAUDE.md, CLAUDE.local.md, auto-memory, team memory
3. Classifies each auto-memory entry by destination:
   - CLAUDE.md: project conventions for all contributors
   - CLAUDE.local.md: personal user instructions
   - Team memory: org-wide cross-repo knowledge
   - Stay in auto-memory: working notes, temporary context
4. Identifies cleanup opportunities: duplicates, outdated entries, conflicts
5. Presents structured report grouped by action type (promotions, cleanup, ambiguous, no action)
6. Does NOT modify files without explicit user approval

## Exports
- `registerRememberSkill` - function that registers the /remember skill (ant-only)
