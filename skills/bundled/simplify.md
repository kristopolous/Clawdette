# simplify

## Purpose
Implements the /simplify bundled skill for code review and cleanup using parallel review agents.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: AgentTool constants, bundledSkills

## Logic
1. `registerSimplifySkill` - registers the simplify skill
2. Phase 1: Identifies changes via git diff or recently modified files
3. Phase 2: Launches three review agents in parallel:
   - Code Reuse Review: finds duplicate code, suggests existing utilities
   - Code Quality Review: flags redundant state, copy-paste, leaky abstractions
   - Efficiency Review: finds unnecessary work, missed concurrency, hot-path bloat
4. Phase 3: Aggregates findings and fixes issues directly
5. Skips false positives without argument
6. Summarizes fixes or confirms code was clean

## Exports
- `registerSimplifySkill` - function that registers the /simplify skill
