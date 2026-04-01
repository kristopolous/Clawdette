# debug

## Purpose
Implements the /debug bundled skill for reading session debug logs and diagnosing issues.

## Imports
- **Stdlib**: `fs/promises`
- **External**: (none)
- **Internal**: claudeCodeGuideAgent constant, settings utils, debug utils, error/format utils, bundledSkills

## Logic
1. `registerDebugSkill` - registers the debug skill
2. Enables debug logging if not already active
3. Tails debug log (last 64KB or 20 lines) to avoid reading entire file
4. Handles missing log file gracefully
5. Shows log size and last N lines
6. Suggests grep for [ERROR] and [WARN] patterns
7. Explains that logging just enabled (if wasn't already)
8. Different prompts for ant vs external users

## Exports
- `registerDebugSkill` - function that registers the /debug skill
