# exampleCommands

## Purpose
Generates example command suggestions for the REPL prompt by analyzing git history for frequently modified files, filtering out non-core files (auto-generated, dependencies, configs), and picking diverse files across directories. Caches results in project config and refreshes weekly.

## Imports
- **Stdlib**: `lodash-es/memoize`, `lodash-es/sample`
- **Internal**: `../utils/cwd`, `./config`, `./env`, `./execFileNoThrow`, `./git`, `./log`, `./user`

## Logic
1. `NON_CORE_PATTERNS` - regex patterns matching lock files, build artifacts, generated files, minified files, data/config formats (json, yaml, toml, etc.), config/metadata files, docs/changelogs
2. `isCoreFile` - returns true if path matches no non-core patterns
3. `countAndSortItems` - counts occurrences, sorts by frequency descending, returns top N as padded count strings
4. `pickDiverseCoreFiles` - greedy algorithm: iterates with increasing per-directory cap (1, 2, 3...) to spread picks across directories while still allowing dominant folders to contribute. Skips non-core files and duplicate basenames. Returns empty if fewer than `want` available.
5. `getFrequentlyModifiedFiles` - async, runs git log for last 1000 commits (--diff-filter=M), tallies by user email first then falls back to all authors if <10 results, picks 5 diverse core files. Skipped in test mode, Windows, or non-git repos.
6. `getExampleCommandFromCache` - memoized, picks a random example command template, substitutes frequent file from project config or `<filepath>` placeholder
7. `refreshExampleCommands` - memoized async, regenerates example files if over a week old, kicks off background fetch if none cached, saves to project config with timestamp

## Exports
- `countAndSortItems(items: string[], topN?)` - sync, counts and sorts items by frequency, returns formatted string
- `pickDiverseCoreFiles(sortedPaths: string[], want: number)` - sync, picks diverse core files spread across directories
- `getExampleCommandFromCache` - memoized sync, returns random example command string like `Try "how does foo.ts work?"`
- `refreshExampleCommands` - memoized async, refreshes cached example files from git history if stale (>1 week) or missing

## Source
`exampleCommands`