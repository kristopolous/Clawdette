# getWorktreePaths

## Purpose
Returns paths of all git worktrees for the current repository, sorted with the current worktree first. Runs `git worktree list --porcelain` and parses the output. Returns empty array if git is unavailable, not in a git repo, or only has one worktree.

## Imports
- **Stdlib**: `path` (`sep`)
- **Internal**: `../services/analytics/index` (`logEvent`), `./execFileNoThrow` (`execFileNoThrowWithCwd`), `./git` (`gitExe`)

## Items

### getWorktreePaths
**Type**: Async Function
Runs `git worktree list --porcelain` from the given `cwd`. Parses lines starting with `worktree ` to extract paths (normalized to NFC). Logs `tengu_worktree_detection` analytics event with duration, count, and success. Sorts results: current worktree (cwd matches or starts with path + sep) first, then alphabetically.

## Exports
- `getWorktreePaths` — async function returning array of absolute worktree paths

## Source
`getWorktreePaths`