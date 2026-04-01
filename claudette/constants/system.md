## Purpose
Provides system prompt prefix selection and API request attribution header generation.

## Imports
- **Stdlib**: none
- **External**: `bun:bundle`
- **Internal**: `services/analytics/growthbook`, `utils/debug`, `utils/envUtils`, `utils/model/providers`, `utils/workloadContext`

## Logic
Selects the appropriate system prompt prefix based on API provider and session type (interactive vs non-interactive). Generates attribution headers for API requests that include version, fingerprint, entrypoint, client attestation placeholder, and workload routing hints.

## Exports
- `CLISyspromptPrefix` - type union of all possible CLI system prompt prefix values
- `CLI_SYSPROMPT_PREFIXES` - readonly set of all possible CLI system prompt prefix values
- `getCLISyspromptPrefix` - returns the appropriate system prompt prefix based on provider and session configuration
- `getAttributionHeader` - generates the x-anthropic-billing-header string with version, entrypoint, attestation, and workload info
