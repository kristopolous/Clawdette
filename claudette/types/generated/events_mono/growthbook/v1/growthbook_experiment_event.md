# growthbook_experiment_event

## Purpose
Generated TypeScript types for GrowthBook experiment assignment telemetry events.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: Generated protobuf types (Timestamp, PublicApiAuth)

## Logic
1. `GrowthbookExperimentEvent` - tracks user exposure to experiment variants
2. Maps to GrowthBook BigQuery schema (see growthbook.io/guide/bigquery)
3. `event_id` - unique identifier for deduplication
4. `timestamp` - when user exposed to experiment
5. `experiment_id` - experiment tracking key
6. `variation_id` - 0=control, 1+=variants
7. `environment` - where assignment occurred
8. `user_attributes` - user attributes at assignment time
9. `experiment_metadata` - experiment metadata JSON
10. `device_id`, `session_id`, `anonymous_id` - tracking identifiers
11. `event_metadata_vars` - auto-populated by event_logging library

## Exports
- `GrowthbookExperimentEvent` - experiment assignment event interface
- `GrowthbookExperimentEvent` - message functions (fromJSON, toJSON, create, fromPartial)
