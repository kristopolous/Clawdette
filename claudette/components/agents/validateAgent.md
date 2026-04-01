## Purpose
Provides validation functions for agent type identifiers and complete agent configurations.

## Imports
- **Internal**: Tool.js (Tools type), tools/AgentTool/agentToolUtils.js (resolveAgentTools), tools/AgentTool/loadAgentsDir.js (AgentDefinition type, CustomAgentDefinition type), utils (getAgentSourceDisplayName)

## Logic
Validates agent type identifiers against naming rules (alphanumeric with hyphens, 3-50 characters, must start and end with alphanumeric). Validates complete agent configurations including type uniqueness, description length, tool validity, and system prompt requirements. Returns errors and warnings arrays.

## Exports
- `AgentValidationResult` - type for validation outcomes with isValid flag, errors, and warnings
- `validateAgentType` - validates an agent type identifier string and returns an error message or null
- `validateAgent` - validates a complete agent configuration against all rules and returns a validation result
