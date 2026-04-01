## Purpose
Provides validation functions for agent configurations.

## Imports
- **Internal**: Tool types, agent tool utilities (resolveAgentTools), AgentDefinition and CustomAgentDefinition types, utils (getAgentSourceDisplayName)

## Logic
Contains two validation functions: validateAgentType checks format requirements (alphanumeric, hyphens, length constraints), while validateAgent performs comprehensive validation of the entire agent configuration including type uniqueness, description length, tool validity, and system prompt requirements. Returns errors and warnings separately.

## Exports
- `AgentValidationResult` - type defining validation output structure
- `validateAgentType` - validates agent type identifier format, returns error message or null
- `validateAgent` - validates complete agent configuration, returns errors and warnings arrays
