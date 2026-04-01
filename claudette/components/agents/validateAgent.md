## Purpose
A validation utility that enforces structural and behavioral constraints on agent definitions, ensuring identifiers, descriptions, tool assignments, and system prompts are valid and optimized for the inference provider.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: `Tool`, `tools/AgentTool/agentToolUtils`, `tools/AgentTool/loadAgentsDir`, `components/agents/utils`

## Logic
1. **Identifier Validation (`validateAgentType`)**:
    - Enforces a specific naming convention: identifiers must start and end with alphanumeric characters and can only contain letters, numbers, and hyphens.
    - Sets a minimum length of 3 and a maximum length of 50 characters to ensure identifiers are both descriptive and manageable.
    - Returns a specific error message if any of these constraints are violated.
2. **Comprehensive Agent Validation (`validateAgent`)**:
    - **Uniqueness Check**: Scans existing agents across all sources (project, user, global) to prevent naming collisions. It specifically warns if an agent with the same name exists in a different configuration source (shadowing).
    - **Usage Description ("When to Use")**: 
        - Validates that the description is present.
        - Issues warnings if the description is too short (less than 10 characters) to be effective or exceptionally long (over 5000 characters).
    - **Capability Assessment (Tools)**:
        - Verifies that tool assignments are provided in the correct format (array or "all").
        - Uses internal utilities to resolve tool names against available system tools, flagging any unrecognized or invalid tool identifiers as errors.
        - Warns if an agent is created with zero tools, as this significantly limits its autonomous capabilities.
    - **Instruction Integrity (System Prompt)**:
        - Enforces a mandatory system prompt with a minimum length of 20 characters to ensure the agent has a basic persona.
        - Issues a warning if the prompt exceeds 10,000 characters, which may impact context window efficiency or model performance.
3. **Structured Reporting**: Aggregates all identified issues into a single result object, distinguishing between **errors** (which block the creation/save operation) and **warnings** (which provide best-practice guidance but do not block the operation).

## Exports
- `validateAgentType` - A standalone function for validating agent identifiers.
- `validateAgent` - The primary function for validating a complete agent definition object.
