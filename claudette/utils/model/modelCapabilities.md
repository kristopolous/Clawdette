# modelCapabilities

## Purpose
.strip() — don't persist internal-only fields (mycro_deployments etc.) to disk

## Imports
- **Stdlib**: fs, fs/promises, lodash-es/isEqual.js, lodash-es/memoize.js, path, zod/v4
- **Internal**: ../../constants/oauth.js, ../../services/api/client.js, ../auth.js, ../debug.js, ../envUtils.js, ../json.js, ../lazySchema.js, ../privacyLevel.js, ../slowOperations.js, ./providers.js

## Items

### getCacheDir
**Type**: Function

### getCachePath
**Type**: Function

### isModelCapabilitiesEligible
**Type**: Function

### sortForMatching
**Type**: Function

### getModelCapability
**Type**: Function

### refreshModelCapabilities
**Type**: Function

### ModelCapability
**Type**: Type alias

## Exports
- ModelCapability
- getModelCapability
- refreshModelCapabilities

## Source
`modelCapabilities.ts`