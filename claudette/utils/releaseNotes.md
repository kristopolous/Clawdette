# utils/releaseNotes

## Purpose
Provides release notes fetching and caching utilities.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: `axios`, `semver`
- **Internal**: bootstrap state, config, envUtils, errors, log, privacyLevel, semver

## Logic
1. `MAX_RELEASE_NOTES_SHOWN` (5) - max release notes to show
2. `CHANGELOG_URL` - GitHub changelog URL
3. `RAW_CHANGELOG_URL` - raw changelog URL
4. `getChangelogCachePath` - gets ~/.claude/cache/changelog.md path
5. `changelogMemoryCache` - in-memory cache populated by async reads
6. Sync callers (React render, sync helpers) read from this cache after setup awaits checkForReleaseNotes()
7. `_resetChangelogCacheForTesting` - resets cache for testing
8. `migrateChangelogFromConfig` - migrates from old config-based storage to file-based
9. Called once at startup before any other config saves
10. `fetchAndCacheChangelog` - fetches changelog from GitHub, stores in cache file
11. Runs in background, doesn't block UI
12. Ink's static rendering makes dynamic update difficult - storing in config ensures availability on next startup
13. `checkForReleaseNotes` - checks for new release notes
14. `getReleaseNotes` - gets cached release notes
15. `parseChangelog` - parses changelog markdown
16. `getVersionFromChangelog` - gets version from changelog entry
17. `isEssentialTrafficOnly` - checks essential traffic only mode
18. `getGlobalConfig`, `saveGlobalConfig` - config functions
19. `getClaudeConfigHomeDir` - gets config home directory
20. `toError` - converts to error
21. `logError` - logs error
22. `gt` - semver greater than

## Exports
- `MAX_RELEASE_NOTES_SHOWN` - max notes constant
- `CHANGELOG_URL` - changelog URL
- `RAW_CHANGELOG_URL` - raw changelog URL
- `getChangelogCachePath` - gets cache path
- `_resetChangelogCacheForTesting` - resets cache
- `migrateChangelogFromConfig` - migrates changelog
- `fetchAndCacheChangelog` - fetches and caches changelog
- `checkForReleaseNotes` - checks for release notes
- `getReleaseNotes` - gets release notes
- `parseChangelog` - parses changelog
- `getVersionFromChangelog` - gets version
