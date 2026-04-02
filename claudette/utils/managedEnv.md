# managedEnv

## Purpose
Capture CCD spawn-env keys before any settings.env is applied (once).

## Imports
- **Internal**: ../services/remoteManagedSettings/syncCache, /caCerts, /config, /envUtils, ./mtls, ./proxy, ./settings/constants

## Items

### withoutSSHTunnelVars
**Type**: Function

### withoutHostManagedProviderVars
**Type**: Function

### withoutCcdSpawnEnvKeys
**Type**: Function

### filterSettingsEnv
**Type**: Function

### applySafeConfigEnvironmentVariables
**Type**: Function

### applyConfigEnvironmentVariables
**Type**: Function

## Exports
- applySafeConfigEnvironmentVariables
- applyConfigEnvironmentVariables

## Source
`managedEnv`