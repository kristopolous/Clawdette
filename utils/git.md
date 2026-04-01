# utils/git

## Purpose
Provides git utilities for repository detection and operations.

## Imports
- **Stdlib**: `crypto`, `fs`, `fs/promises`, `path`
- **External**: `lodash-es/memoize`
- **Internal**: constants files, cwd, debug, diagLogs, execFileNoThrow, fsOperations, git gitFilesystem, log, memoize, which

## Logic
1. `GIT_ROOT_NOT_FOUND` - Symbol for git root not found
2. `findGitRootImpl` - finds git root directory via stat walking
3. Memoized with LRU, logs start/complete with duration and stat count
4. Walks up from startPath to root looking for .git directory/file
5. `findGitRoot` - public wrapper for findGitRootImpl
6. `getRemoteUrl` - gets git remote URL
7. `getDefaultBranch` - gets default branch name
8. `getBranch` - gets current branch name
9. `getHead` - gets HEAD SHA
10. `getIsClean` - checks if working directory is clean
11. `getIsGit` - checks if directory is git repository
12. `getCommitHash` - gets commit hash
13. `getCommitMessage` - gets commit message
14. `getCommitDate` - gets commit date
15. `getCommitAuthor` - gets commit author
16. `getDiff` - gets diff between commits
17. `getStagedFiles` - gets staged files
18. `getUnstagedFiles` - gets unstaged files
19. `getUntrackedFiles` - gets untracked files
20. `getWorktreeCount` - gets worktree count
21. `isShallowClone` - checks if shallow clone

## Exports
- `findGitRoot` - finds git root directory
- `getRemoteUrl` - gets remote URL
- `getDefaultBranch` - gets default branch
- `getBranch` - gets current branch
- `getHead` - gets HEAD SHA
- `getIsClean` - checks clean status
- `getIsGit` - checks git repository
- (Git operation functions)
