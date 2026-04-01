## Purpose
Provides feature flag client keys for analytics and experimentation based on user type and environment.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `utils/envUtils`

## Logic
Returns the appropriate GrowthBook SDK client key based on whether the build is for internal (ant) or external users, with a development mode override for internal builds.

## Exports
- `getGrowthBookClientKey` - returns the GrowthBook SDK key string based on user type and dev mode settings
