## Purpose
Performs a security-focused code review of pending changes on the current branch, identifying high-confidence vulnerabilities.

## Imports
- **Internal**: `parseFrontmatter`, `parseSlashCommandToolsFromFrontmatter`, `executeShellCommandsInPrompt`, `createMovedToPluginCommand`

## Logic
Wraps a large embedded markdown prompt (SECURITY_REVIEW_MARKDOWN) that guides an assistant through a structured 3-phase security review: repository context research, comparative analysis, and vulnerability assessment. The prompt includes strict false positive filtering, exclusion lists, severity guidelines, and confidence scoring. It uses shell command execution to gather git diff, status, and log data, and requires output in a specific markdown format. Implemented as a plugin command via `createMovedToPluginCommand`.

## Exports
- `default` - Command object for security-review, delegating to `getPromptWhileMarketplaceIsPrivate`

### Helpful Prompt Templates

- **(Security review of pending changes)** - "You are a senior security engineer conducting a focused security review of the changes on this branch." (Full prompt includes git status, diff, commits context; CRITICAL instructions to minimize false positives (>80% confidence); security categories: input validation, auth/crypto/injection/data exposure; 3-phase analysis methodology: repository context research, comparative analysis, vulnerability assessment; required markdown output format with file, line, severity, category, description, exploit scenario, recommendation; severity guidelines HIGH/MEDIUM/LOW; confidence scoring 0.7-1.0; extensive false positive filtering with 17+ hard exclusions and 12 precedents)

### Helpful Prompt Templates

- **(Security review of pending changes)** - "You are a senior security engineer conducting a focused security review of the changes on this branch." (Full prompt includes git status, diff, commits context; CRITICAL instructions to minimize false positives (>80% confidence); security categories: input validation, auth/crypto/injection/data exposure; 3-phase analysis methodology: repository context research, comparative analysis, vulnerability assessment; required markdown output format with file, line, severity, category, description, exploit scenario, recommendation; severity guidelines HIGH/MEDIUM/LOW; confidence scoring 0.7-1.0; extensive false positive filtering with 17+ hard exclusions and 12 precedents)
