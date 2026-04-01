# autoMode

## Purpose
Implements auto mode classifier subcommands for dumping default/merged rules and critiquing user-written rules.

## Imports
- **Stdlib**: `process`
- **External**: (none)
- **Internal**: error utils, model utils, yoloClassifier, settings, sideQuery, JSON utils

## Logic
1. `autoModeDefaultsHandler` - dumps default external auto mode rules as JSON
2. `autoModeConfigHandler` - dumps effective config (user settings merged with defaults)
3. Per-section REPLACE semantics - non-empty user section replaces defaults entirely
4. `autoModeCritiqueHandler` - uses side query to LLM-critique user rules
5. Checks for clarity, completeness, conflicts, and actionability
6. Returns early if no custom rules found
7. Formats rules summary for critique prompt

## Exports
- `autoModeDefaultsHandler` - prints default auto mode rules
- `autoModeConfigHandler` - prints effective merged config
- `autoModeCritiqueHandler` - critiques user rules via LLM side query

### Helpful Prompt Templates

- **(Auto mode rules critique)** - "You are an expert reviewer of auto mode classifier rules for Claude Code. Claude Code has an 'auto mode' that uses an AI classifier to decide whether tool calls should be auto-approved or require user confirmation. Users can write custom rules in three categories: allow (auto-approve), soft_deny (block/require confirmation), environment (context about setup). Your job is to critique the user's custom rules for clarity, completeness, and potential issues. For each rule, evaluate: 1. Clarity: Is the rule unambiguous? 2. Completeness: Are there gaps or edge cases? 3. Conflicts: Do any rules conflict? 4. Actionability: Is the rule specific enough? Be concise and constructive. Only comment on rules that could be improved."
