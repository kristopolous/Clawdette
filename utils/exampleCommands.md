# exampleCommands

## Purpose
Patterns that mark a file as non-core (auto-generated, dependency, or config).

## Imports
- **Stdlib**: lodash-es/memoize.js, lodash-es/sample.js
- **Internal**: ../utils/cwd.js, ./config.js, ./env.js, ./execFileNoThrow.js, ./git.js, ./log.js, ./user.js

## Items

### isCoreFile
**Type**: Function

### countAndSortItems
**Type**: Function

### pickDiverseCoreFiles
**Type**: Function

### getFrequentlyModifiedFiles
**Type**: Function

## Exports
- countAndSortItems
- pickDiverseCoreFiles
- getExampleCommandFromCache
- refreshExampleCommands

## Source
`exampleCommands.ts`