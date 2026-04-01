# managedEnv

## Purpose
Capture CCD spawn-env keys before any settings.env is applied (once).

## Imports
- **Internal**: ../services/remoteManagedSettings/syncCache.js, ./caCerts.js, ./config.js, ./envUtils.js, ./mtls.js, ./proxy.js, ./settings/constants.js

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
`managedEnv.ts`