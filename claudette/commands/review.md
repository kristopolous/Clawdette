## Purpose
Performs a comprehensive code review of the current changes using a thorough checklist and structured feedback.

## Imports
- **Internal**: `Command` type, `createMovedToPluginCommand`, `getProjectPath`, `getCurrentTask`, `formatAsPlan`

## Logic
'prompt' type command that constructs a detailed review prompt including git diff, changed files, and instructions to examine: functionality, performance, security, testing, documentation, and backwards compatibility. Asks for structured feedback with specific sections (summary, changes, concerns, testing suggestions). Implemented as a plugin command via `createMovedToPluginCommand`.

## Exports
- `default` - The review command object

### Helpful Prompt Templates

- **(Local PR review)** - "You are an expert code reviewer. Follow these steps: 1. If no PR number, run gh pr list. 2. If PR number provided, run gh pr view. 3. Run gh pr diff. 4. Analyze and provide thorough code review. Keep your review concise but thorough. Focus on: Code correctness, Following project conventions, Performance implications, Test coverage, Security considerations. Format your review with clear sections and bullet points."
