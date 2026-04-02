# immediateCommand

## Purpose
Determines whether inference-config commands (/model, /fast, /effort) should execute immediately during a running query rather than waiting for the current turn to finish.

## Imports
- **Internal**: ../services/analytics/growthbook

## Logic
1. `shouldInferenceConfigCommandBeImmediate` - returns true if USER_TYPE is 'ant' (always enabled for internal users), or if the GrowthBook feature flag 'tengu_immediate_model_command' is enabled for external users.

## Exports
- `shouldInferenceConfigCommandBeImmediate` - returns boolean indicating if inference config commands should execute immediately
