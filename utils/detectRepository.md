# detectRepository

## Purpose
Only return results for github.com to avoid breaking downstream consumers

## Imports
- **Internal**: ./cwd.js, ./debug.js, ./git.js

## Items

### clearRepositoryCaches
**Type**: Function

### detectCurrentRepository
**Type**: Function

### detectCurrentRepositoryWithHost
**Type**: Function

### getCachedRepository
**Type**: Function

### parseGitRemote
**Type**: Function

### parseGitHubRepository
**Type**: Function

### looksLikeRealHostname
**Type**: Function

### ParsedRepository
**Type**: Type alias

## Exports
- ParsedRepository
- clearRepositoryCaches
- detectCurrentRepository
- detectCurrentRepositoryWithHost
- getCachedRepository
- parseGitRemote
- parseGitHubRepository

## Source
`detectRepository.ts`