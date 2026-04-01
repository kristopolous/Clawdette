# git

## Purpose
.git can be a directory (regular repo) or file (worktree/submodule)

## Imports
- **Stdlib**: crypto, fs, fs/promises, lodash-es/memoize.js, path
- **Internal**: ../constants/files.js, ./cwd.js, ./debug.js, ./diagLogs.js, ./execFileNoThrow.js, ./fsOperations.js, ./log.js, ./memoize.js, ./which.js

## Items

### createFindGitRoot
**Type**: Function

### wrapper
**Type**: Function

### createFindCanonicalGitRoot
**Type**: Function

### wrapper
**Type**: Function

### getGitDir
**Type**: Function

### isAtGitRoot
**Type**: Function

### normalizeGitRemoteUrl
**Type**: Function

### getRepoRemoteHash
**Type**: Function

### getGitState
**Type**: Function

### getGithubRepo
**Type**: Function

### findRemoteBase
**Type**: Function

### isShallowClone
**Type**: Function

### captureUntrackedFiles
**Type**: Function

### preserveGitStateForIssue
**Type**: Function

### isLocalHost
**Type**: Function

### isCurrentDirectoryBareGitRepo
**Type**: Function

### GitFileStatus
**Type**: Type alias

### GitRepoState
**Type**: Type alias

### PreservedGitState
**Type**: Type alias

## Exports
- findGitRoot
- findCanonicalGitRoot
- gitExe
- getIsGit
- getGitDir
- isAtGitRoot
- dirIsInGitRepo
- getHead
- getBranch
- getDefaultBranch
- getRemoteUrl
- normalizeGitRemoteUrl
- getRepoRemoteHash
- getIsHeadOnRemote
- hasUnpushedCommits
- getIsClean
- getChangedFiles
- GitFileStatus
- getFileStatus
- getWorktreeCount
- stashToCleanState
- GitRepoState
- getGitState
- getGithubRepo
- PreservedGitState
- findRemoteBase
- preserveGitStateForIssue
- isCurrentDirectoryBareGitRepo

## Source
`git.ts`