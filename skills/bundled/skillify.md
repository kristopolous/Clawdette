# skillify

## Purpose
Implements the /skillify bundled skill that captures repeatable session processes as reusable skills.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: SessionMemory utils, Message types, messages utils, bundledSkills

## Logic
1. `extractUserMessages` - extracts text content from user messages
2. `SKILLIFY_PROMPT` - comprehensive prompt for skill capture workflow
3. Round 1: High-level confirmation (name, description, goals, success criteria)
4. Round 2: Details (steps, arguments, inline vs forked, storage location)
5. Round 3: Step breakdown (inputs/outputs, success proofs, confirmation points, parallelization, constraints)
6. Uses AskUserQuestion for ALL questions (never plain text)
7. Analyzes session memory and user messages for context
8. Supports repo-specific and personal skill storage

## Exports
- `registerSkillifySkill` - function that registers the /skillify skill
- `extractUserMessages` - helper to extract user message text
