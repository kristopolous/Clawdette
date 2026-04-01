# utils/git/gitFilesystem

## Purpose
Provides filesystem-based git state reading without spawning git subprocesses.

## Imports
- **Stdlib**: `fs`, `fs/promises`, `path`
- **External**: (none)
- **Internal**: bootstrap state, cleanupRegistry, cwd, git, gitConfigParser

## Logic
1. `resolveGitDir` - resolves actual .git directory (handles worktrees/submodules)
2. Memoized per startPath, cached in resolveGitDirCache
3. Handles .git as file (gitdir: <path>) or directory
4. `clearResolveGitDirCache` - clears resolution cache
5. `isSafeRefName` - validates ref/branch names from .git/
6. `parseHEAD` - parses HEAD file (ref: refs/heads/<branch> or raw SHA)
7. `resolveRef` - resolves ref via loose files and packed-refs
8. `parsePackedRefs` - parses packed-refs file (<sha> <refname>\n format)
9. Skips # comments and ^ peeled tags
10. `GitHeadWatcher` - caches branch/SHA with fs.watchFile
11. `getCachedBranch` - gets cached branch name
12. `getCachedHead` - gets cached HEAD SHA
13. `getCachedRemoteUrl` - gets cached remote URL
14. `getCachedDefaultBranch` - gets cached default branch
15. `getWorktreeCountFromFs` - gets worktree count from filesystem
16. `isShallowClone` - checks for shallow clone via shallow file existence

## Exports
- `resolveGitDir` - resolves .git directory
- `clearResolveGitDirCache` - clears resolution cache
- `isSafeRefName` - validates ref names
- `parseHEAD` - parses HEAD file
- `resolveRef` - resolves ref
- `parsePackedRefs` - parses packed-refs
- `GitHeadWatcher` - HEAD watcher class
- `getCachedBranch` - gets cached branch
- `getCachedHead` - gets cached HEAD
- `getCachedRemoteUrl` - gets cached remote URL
- `getCachedDefaultBranch` - gets cached default branch
- `getWorktreeCountFromFs` - gets worktree count
- `isShallowClone` - checks shallow clone
