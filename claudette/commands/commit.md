## Purpose
Opens a pull request, updates an existing PR, or performs no-op if already on main with no changes.

## Imports
- **Internal**: `Command` type, `getAttributionTexts`, `getEnhancedPRAttribution`, `getDefaultBranch`, `executeShellCommandsInPrompt`, `getUndercoverInstructions`, `isUndercover`

## Logic
Multi-step command that: 1) Shows usage if no argument provided, 2) Switches to main branch if already on main and no changes, 3) Creates a new PR if on a feature branch, or 4) Updates existing PR title/body if PR exists for current branch. Constructs prompts with git context and follows Git Safety Protocol. Includes Slack integration and undercover mode variations. Uses `executeShellCommandsInPrompt` to run git/gh commands within the assistant's execution.

## Exports
- `default` - The commit command object (type: 'prompt')

### Helpful Prompt Templates

- **(Create a git commit)** - "## Context: Current git status, diff, branch, recent commits. ## Git Safety Protocol: NEVER update git config, NEVER skip hooks, CRITICAL: ALWAYS create NEW commits (NEVER --amend), Do not commit files with secrets, No empty commits, Never use -i flag. ## Your task: 1. Analyze staged changes and draft commit message following repo style. 2. Stage relevant files and create commit using HEREDOC syntax."
