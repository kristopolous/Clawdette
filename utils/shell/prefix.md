# prefix

## Purpose
Evict on rejection so aborted calls don't poison future turns.

## Imports
- **Stdlib**: chalk
- **Internal**: ../../constants/querySource.js, ../../services/analytics/growthbook.js, ../../services/api/claude.js, ../../services/api/errors.js, ../memoize.js, ../slowOperations.js, ../systemPromptType.js

## Items

### createCommandPrefixExtractor
**Type**: Function

### createSubcommandPrefixExtractor
**Type**: Function

### getCommandPrefixImpl
**Type**: Function

### getCommandSubcommandPrefixImpl
**Type**: Function

### CommandPrefixResult
**Type**: Type alias

### CommandSubcommandPrefixResult
**Type**: Type alias

### PrefixExtractorConfig
**Type**: Type alias

## Exports
- CommandPrefixResult
- CommandSubcommandPrefixResult
- PrefixExtractorConfig
- createCommandPrefixExtractor
- createSubcommandPrefixExtractor

## Source
`prefix.ts`