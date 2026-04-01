# worktree

## Purpose
Leading or trailing `/` would make path.join produce an absolute path

## Imports
- **Stdlib**: bun:bundle, chalk, child_process, ignore, path
- **Internal**: ./config.js, ./cwd.js, ./debug.js, ./errors.js, ./execFileNoThrow.js, ./git/gitConfigParser.js, ./path.js, ./platform.js, ./sleep.js, ./swarm/backends/detection.js

## Items

### validateWorktreeSlug
**Type**: Function

### mkdirRecursive
**Type**: Function

### symlinkDirectories
**Type**: Function

### getCurrentWorktreeSession
**Type**: Function

### restoreWorktreeSession
**Type**: Function

### generateTmuxSessionName
**Type**: Function

### worktreesDir
**Type**: Function

### flattenSlug
**Type**: Function

### worktreeBranchName
**Type**: Function

### worktreePathFor
**Type**: Function

### getOrCreateWorktree
**Type**: Function

### copyWorktreeIncludeFiles
**Type**: Function

### performPostCreationSetup
**Type**: Function

### parsePRReference
**Type**: Function

### isTmuxAvailable
**Type**: Function

### getTmuxInstallInstructions
**Type**: Function

### createTmuxSessionForWorktree
**Type**: Function

### killTmuxSession
**Type**: Function

### createWorktreeForSession
**Type**: Function

### keepWorktree
**Type**: Function

### cleanupWorktree
**Type**: Function

### createAgentWorktree
**Type**: Function

### removeAgentWorktree
**Type**: Function

### cleanupStaleAgentWorktrees
**Type**: Function

### hasWorktreeChanges
**Type**: Function

### execIntoTmuxWorktree
**Type**: Function

### WorktreeSession
**Type**: Type alias

### WorktreeCreateResult
**Type**: Type alias

## Exports
- validateWorktreeSlug
- WorktreeSession
- getCurrentWorktreeSession
- restoreWorktreeSession
- generateTmuxSessionName
- worktreeBranchName
- copyWorktreeIncludeFiles
- parsePRReference
- isTmuxAvailable
- getTmuxInstallInstructions
- createTmuxSessionForWorktree
- killTmuxSession
- createWorktreeForSession
- keepWorktree
- cleanupWorktree
- createAgentWorktree
- removeAgentWorktree
- cleanupStaleAgentWorktrees
- hasWorktreeChanges
- execIntoTmuxWorktree

## Source
`worktree.ts`