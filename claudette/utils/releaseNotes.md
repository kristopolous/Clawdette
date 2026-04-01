# releaseNotes

## Purpose
In-memory cache populated by async reads. Sync callers (React render, sync

## Imports
- **Stdlib**: axios, fs/promises, path, semver
- **Internal**: ../bootstrap/state.js, ./config.js, ./envUtils.js, ./errors.js, ./log.js, ./privacyLevel.js, ./semver.js

## Items

### getChangelogCachePath
**Type**: Function

### _resetChangelogCacheForTesting
**Type**: Function

### migrateChangelogFromConfig
**Type**: Function

### fetchAndStoreChangelog
**Type**: Function

### getStoredChangelog
**Type**: Function

### getStoredChangelogFromMemory
**Type**: Function

### parseChangelog
**Type**: Function

### getRecentReleaseNotes
**Type**: Function

### getAllReleaseNotes
**Type**: Function

### checkForReleaseNotes
**Type**: Function

### checkForReleaseNotesSync
**Type**: Function

## Exports
- CHANGELOG_URL
- _resetChangelogCacheForTesting
- migrateChangelogFromConfig
- fetchAndStoreChangelog
- getStoredChangelog
- getStoredChangelogFromMemory
- parseChangelog
- getRecentReleaseNotes
- getAllReleaseNotes
- checkForReleaseNotes
- checkForReleaseNotesSync

## Source
`releaseNotes.ts`