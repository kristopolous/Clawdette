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

### Helpful Prompt Templates

- **(Skillify - capture session as reusable skill)** - "You are capturing this session's repeatable process as a reusable skill. ## Step 1: Analyze the Session - Identify repeatable process, inputs, distinct steps, success artifacts, user corrections, tools/permissions, agents used. ## Step 2: Interview the User (using AskUserQuestion for ALL questions): Round 1: Confirm name, description, goals, success criteria. Round 2: Present steps, suggest arguments, inline vs forked, save location (repo vs personal). Round 3: Break down each step - produces, success proof, human checkpoints, parallelization, constraints. Round 4: Confirm invocation triggers, gotchas. ## Step 3: Write the SKILL.md - Format with frontmatter (name, description, allowed-tools, when_to_use, argument-hint, arguments, context) and body (title, inputs, goal, steps with success criteria, execution mode, artifacts, human checkpoints, rules). ## Step 4: Confirm and Save - Output complete SKILL.md as yaml code block for review, then ask for confirmation."
