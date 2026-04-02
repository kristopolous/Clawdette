# githubRepoPathMapping

## Purpose
Manages mapping between GitHub repositories (owner/repo) and local filesystem paths. Stores git root paths in global config (`githubRepoPaths`), with most-recently-used ordering. Called at startup (fire-and-forget) to track known local paths for repos.

## Imports
- **Stdlib**: `fs/promises` (`realpath`)
- **Internal**: `../bootstrap/state` (`getOriginalCwd`), `./config` (`getGlobalConfig`, `saveGlobalConfig`), `./debug` (`logForDebugging`), `./detectRepository` (`detectCurrentRepository`, `parseGitHubRepository`), `./file` (`pathExists`), `./git/gitFilesystem` (`getRemoteUrlForDir`), `./git` (`findGitRoot`)

## Items

### updateGithubRepoPathMapping
**Type**: Async Function
Detects current GitHub repo, resolves git root (not cwd), resolves symlinks via `realpath`, normalizes repo key to lowercase. Promotes current path to front of list (removes duplicate if present elsewhere). Saves to global config. Silently fails on error (non-blocking startup work).

### getKnownPathsForRepo
**Type**: Function
Returns known local paths for a repo key (case-insensitive lookup). Returns empty array if none.

### filterExistingPaths
**Type**: Async Function
Filters an array of absolute paths to only those that exist on the filesystem. Uses `Promise.all` with `pathExists`.

### validateRepoAtPath
**Type**: Async Function
Checks if a path contains the expected GitHub repository. Gets remote URL via `getRemoteUrlForDir`, parses repo name, compares case-insensitively. Returns false on any failure.

### removePathFromRepo
**Type**: Function
Removes a path from tracked paths for a repo. Deletes the repo key entirely if no paths remain. Saves updated config. Logs removal.

## Exports
- `updateGithubRepoPathMapping` — async, updates global config with current repo path
- `getKnownPathsForRepo` — returns known paths for a repo
- `filterExistingPaths` — filters paths to existing ones only
- `validateRepoAtPath` — validates path contains expected repo
- `removePathFromRepo` — removes a path from tracked paths

## Source
`githubRepoPathMapping`