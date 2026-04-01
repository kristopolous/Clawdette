# marketplaceHelpers

## Purpose
Skip marketplaces blocked by enterprise policy

## Imports
- **Stdlib**: lodashes/isEqual
- **Internal**: ../errors, ./log, ./settings/settings, ./stringUtils, ./gitAvailability, ./marketplaceManager, ./schemas

## Items

### formatFailureDetails
**Type**: Function

### getMarketplaceSourceDisplay
**Type**: Function

### createPluginId
**Type**: Function

### loadMarketplacesWithGracefulDegradation
**Type**: Function

### formatMarketplaceLoadingErrors
**Type**: Function

### formatFailureNames
**Type**: Function

### formatFailureErrors
**Type**: Function

### getStrictKnownMarketplaces
**Type**: Function

### getBlockedMarketplaces
**Type**: Function

### getPluginTrustMessage
**Type**: Function

### areSourcesEqual
**Type**: Function

### extractHostFromSource
**Type**: Function

### doesSourceMatchHostPattern
**Type**: Function

### doesSourceMatchPathPattern
**Type**: Function

### getHostPatternsFromAllowlist
**Type**: Function

### extractGitHubRepoFromGitUrl
**Type**: Function

### blockedConstraintMatches
**Type**: Function

### areSourcesEquivalentForBlocklist
**Type**: Function

### isSourceInBlocklist
**Type**: Function

### isSourceAllowedByPolicy
**Type**: Function

### formatSourceForDisplay
**Type**: Function

### detectEmptyMarketplaceReason
**Type**: Function

### EmptyMarketplaceReason
**Type**: Type alias

## Exports
- formatFailureDetails
- getMarketplaceSourceDisplay
- createPluginId
- loadMarketplacesWithGracefulDegradation
- formatMarketplaceLoadingErrors
- getStrictKnownMarketplaces
- getBlockedMarketplaces
- getPluginTrustMessage
- extractHostFromSource
- getHostPatternsFromAllowlist
- isSourceInBlocklist
- isSourceAllowedByPolicy
- formatSourceForDisplay
- EmptyMarketplaceReason
- detectEmptyMarketplaceReason

## Source
`marketplaceHelpers.ts`