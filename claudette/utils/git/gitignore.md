# gitignore

## Purpose
Utilities for checking and managing gitignore rules. Uses `git check-ignore` to consult all applicable gitignore sources (repo `.gitignore`, `.git/info/exclude`, global gitignore) with correct precedence. Can add patterns to the global gitignore file.

## Imports
- **Stdlib**: `fs/promises` (`appendFile`, `mkdir`, `readFile`, `writeFile`), `os` (`homedir`), `path` (`dirname`, `join`)
- **Internal**: `../cwd` (`getCwd`), `../errors` (`getErrnoCode`), `../execFileNoThrow` (`execFileNoThrowWithCwd`), `../git` (`dirIsInGitRepo`), `../log` (`logError`)

## Items

### isPathGitignored
**Type**: Async Function
Runs `git check-ignore <filePath>` from `cwd`. Exit codes: 0 = ignored, 1 = not ignored, 128 = not in git repo. Returns `false` for code 128 (fail open outside git repo).

### getGlobalGitignorePath
**Type**: Function
Returns path to global gitignore: `~/.config/git/ignore`.

### addFileGlobRuleToGitignore
**Type**: Async Function
Adds a file pattern to the global gitignore if not already ignored. Checks if in git repo, tests if pattern already ignored via `isPathGitignored` (directories tested with a sample file), creates `~/.config/git/` dir if needed, appends `**/<filename>` to global gitignore. Handles ENOENT by creating file. Silently logs errors.

## Exports
- `isPathGitignored` — checks if a path is ignored by git
- `getGlobalGitignorePath` — returns path to global gitignore file
- `addFileGlobRuleToGitignore` — adds pattern to global gitignore if not already ignored

## Source
`gitignore`