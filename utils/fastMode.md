# fastMode

## Purpose
Only OAuth users can have extra_usage_disabled; console users don't have this concept

## Imports
- **Stdlib**: axios, src/constants/oauth.js, src/services/analytics/growthbook.js
- **Internal**: ./bundledMode.js, ./config.js, ./debug.js, ./envUtils.js, ./model/providers.js, ./privacyLevel.js, ./signal.js

## Items

### isFastModeEnabled
**Type**: Function

### isFastModeAvailable
**Type**: Function

### getDisabledReasonMessage
**Type**: Function

### getFastModeUnavailableReason
**Type**: Function

### getFastModeModel
**Type**: Function

### getInitialFastModeSetting
**Type**: Function

### isFastModeSupportedByModel
**Type**: Function

### getFastModeRuntimeState
**Type**: Function

### triggerFastModeCooldown
**Type**: Function

### clearFastModeCooldown
**Type**: Function

### handleFastModeRejectedByAPI
**Type**: Function

### getOverageDisabledMessage
**Type**: Function

### isOutOfCreditsReason
**Type**: Function

### handleFastModeOverageRejection
**Type**: Function

### isFastModeCooldown
**Type**: Function

### getFastModeState
**Type**: Function

### fetchFastModeStatus
**Type**: Function

### resolveFastModeStatusFromCache
**Type**: Function

### prefetchFastModeStatus
**Type**: Function

### doFetch
**Type**: Function

### AuthType
**Type**: Type alias

### FastModeRuntimeState
**Type**: Type alias

### CooldownReason
**Type**: Type alias

### FastModeDisabledReason
**Type**: Type alias

### FastModeOrgStatus
**Type**: Type alias

### FastModeResponse
**Type**: Type alias

## Exports
- isFastModeEnabled
- isFastModeAvailable
- getFastModeUnavailableReason
- FAST_MODE_MODEL_DISPLAY
- getFastModeModel
- getInitialFastModeSetting
- isFastModeSupportedByModel
- FastModeRuntimeState
- CooldownReason
- onCooldownTriggered
- onCooldownExpired
- getFastModeRuntimeState
- triggerFastModeCooldown
- clearFastModeCooldown
- handleFastModeRejectedByAPI
- onFastModeOverageRejection
- handleFastModeOverageRejection
- isFastModeCooldown
- getFastModeState
- FastModeDisabledReason
- onOrgFastModeChanged
- resolveFastModeStatusFromCache
- prefetchFastModeStatus

## Source
`fastMode.ts`