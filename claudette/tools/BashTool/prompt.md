## Purpose
Provides utility functions for retrieving timeout settings used in BashTool prompts.

## Imports
- **External**: `bun:bundle`
- **Internal**:
  - `constants/prompts` - `prependBullets`
  - `utils/attribution` - `getAttributionTexts`
  - `utils/embeddedTools` - `hasEmbeddedSearchTools`
  - `utils/envUtils` - `isEnvTruthy`
  - `utils/gitSettings` - `shouldIncludeGitInstructions`
  - `utils/permissions/filesystem` - `getClaudeTempDir`
  - `utils/sandbox/sandbox-adapter` - `SandboxManager`
  - `utils/slowOperations` - `jsonStringify`
  - `utils/timeouts` - `getDefaultBashTimeoutMs`, `getMaxBashTimeoutMs`
  - `utils/undercover` - `getUndercoverInstructions`, `isUndercover`
  - `AgentTool/constants` - `AGENT_TOOL_NAME`
  - `FileEditTool/constants` - `FILE_EDIT_TOOL_NAME`
  - `FileReadTool/prompt` - `FILE_READ_TOOL_NAME`
  - `FileWriteTool/prompt` - `FILE_WRITE_TOOL_NAME`
  - `GlobTool/prompt` - `GLOB_TOOL_NAME`
  - `GrepTool/prompt` - `GREP_TOOL_NAME`
  - `TodoWriteTool/TodoWriteTool` - `TodoWriteTool`
  - `BashTool/toolName` - `BASH_TOOL_NAME`

## Logic
This module exports two functions for timeout configuration:
- `getDefaultTimeoutMs()` returns the default timeout for bash commands (from `getDefaultBashTimeoutMs`).
- `getMaxTimeoutMs()` returns the maximum allowed timeout (from `getMaxBashTimeoutMs`).

The file also contains extensive internal functions (`getSimplePrompt`, `getCommitAndPRInstructions`, `getSimpleSandboxSection`, etc.) that build the complete Bash tool system prompt. These internal functions combine tool usage guidelines, sandbox restrictions, git protocols, and context-specific instructions to produce the final prompt string used by the tool. 

## Exports
- `getDefaultTimeoutMs(): number`
- `getMaxTimeoutMs(): number`

### Helpful Prompt Templates

- **(background task usage note)** - "You can use the `run_in_background` parameter to run the command in the background. Only use this if you don't need the result immediately and are OK being notified when the command completes later. You do not need to check the output right away - you'll be notified when it finishes. You do not need to use '&' at the end of the command when using this parameter."

- **(git operations for ant users)** - "For git commits and pull requests, use the `/commit` and `/commit-push-pr` skills:
- `/commit` - Create a git commit with staged changes
- `/commit-push-pr` - Commit, push, and create a pull request

These skills handle git safety protocols, proper commit message formatting, and PR creation.

Before creating a pull request, run `/simplify` to review your changes, then test end-to-end (e.g. via `/tmux` for interactive features).

IMPORTANT: NEVER skip hooks (--no-verify, --no-gpg-sign, etc) unless the user explicitly requests it.

Use the gh command via the Bash tool for other GitHub-related tasks including working with issues, checks, and releases. If given a Github URL use the gh command to get the information needed.

# Other common operations
- View comments on a Github PR: gh api repos/foo/bar/pulls/123/comments"

- **(committing changes with git - external users)** - "Only create commits when requested by the user. If unclear, ask first. When the user asks you to create a new git commit, follow these steps carefully:

You can call multiple tools in a single response. When multiple independent pieces of information are requested and all commands are likely to succeed, run multiple tool calls in parallel for optimal performance. The numbered steps below indicate which commands should be batched in parallel.

Git Safety Protocol:
- NEVER update the git config
- NEVER run destructive git commands (push --force, reset --hard, checkout ., restore ., clean -f, branch -D) unless the user explicitly requests these actions. Taking unauthorized destructive actions is unhelpful and can result in lost work, so it's best to ONLY run these commands when given direct instructions
- NEVER skip hooks (--no-verify, --no-gpg-sign, etc) unless the user explicitly requests it
- NEVER run force push to main/master, warn the user if they request it
- CRITICAL: Always create NEW commits rather than amending, unless the user explicitly requests a git amend. When a pre-commit hook fails, the commit did NOT happen — so --amend would modify the PREVIOUS commit, which may result in destroying work or losing previous changes. Instead, after hook failure, fix the issue, re-stage, and create a NEW commit
- When staging files, prefer adding specific files by name rather than using \"git add -A\" or \"git add .\", which can accidentally include sensitive files (.env, credentials) or large binaries
- NEVER commit changes unless the user explicitly asks you to. It is VERY IMPORTANT to only commit when explicitly asked, otherwise the user will feel that you are being too proactive

1. Run the following bash commands in parallel, each using the Bash tool:
  - Run a git status command to see all untracked files. IMPORTANT: Never use the -uall flag as it can cause memory issues on large repos.
  - Run a git diff command to see both staged and unstaged changes that will be committed.
  - Run a git log command to see recent commit messages, so that you can follow this repository's commit message style.
2. Analyze all staged changes (both previously staged and newly added) and draft a commit message:
  - Summarize the nature of the changes (eg. new feature, enhancement to an existing feature, bug fix, refactoring, test, docs, etc.). Ensure the message accurately reflects the changes and their purpose (i.e. \"add\" means a wholly new feature, \"update\" means an enhancement to an existing feature, \"fix\" means a bug fix, etc.).
  - Do not commit files that likely contain secrets (.env, credentials.json, etc). Warn the user if they specifically request to commit those files
  - Draft a concise (1-2 sentences) commit message that focuses on the \"why\" rather than the \"what\"
  - Ensure it accurately reflects the changes and their purpose
3. Run the following commands in parallel:
   - Add relevant untracked files to the staging area.
   - Create the commit with a message ending with the attribution text.
   - Run git status after the commit completes to verify success.
   Note: git status depends on the commit completing, so run it sequentially after the commit.
4. If the commit fails due to pre-commit hook: fix the issue and create a NEW commit

Important notes:
- NEVER run additional commands to read or explore code, besides git bash commands
- NEVER use the TodoWriteTool or Agent tools
- DO NOT push to the remote repository unless the user explicitly asks you to do so
- IMPORTANT: Never use git commands with the -i flag (like git rebase -i or git add -i) since they require interactive input which is not supported.
- IMPORTANT: Do not use --no-edit with git rebase commands, as the --no-edit flag is not a valid option for git rebase.
- If there are no changes to commit (i.e., no untracked files and no modifications), do not create an empty commit
- In order to ensure good formatting, ALWAYS pass the commit message via a HEREDOC"

- **(creating pull requests)** - "Use the gh command via the Bash tool for ALL GitHub-related tasks including working with issues, pull requests, checks, and releases. If given a Github URL use the gh command to get the information needed.

IMPORTANT: When the user asks you to create a pull request, follow these steps carefully:

1. Run the following bash commands in parallel using the Bash tool, in order to understand the current state of the branch since it diverged from the main branch:
   - Run a git status command to see all untracked files (never use -uall flag)
   - Run a git diff command to see both staged and unstaged changes that will be committed
   - Check if the current branch tracks a remote branch and is up to date with the remote, so you know if you need to push to the remote
   - Run a git log command and `git diff [base-branch]...HEAD` to understand the full commit history for the current branch (from the time it diverged from the base branch)
2. Analyze all changes that will be included in the pull request, making sure to look at all relevant commits (NOT just the latest commit, but ALL commits that will be included in the pull request!!!), and draft a pull request title and summary:
   - Keep the PR title short (under 70 characters)
   - Use the description/body for details, not the title
3. Run the following commands in parallel:
   - Create new branch if needed
   - Push to remote with -u flag if needed
   - Create PR using gh pr create with the format below. Use a HEREDOC to pass the body to ensure correct formatting.

gh pr create --title \"the pr title\" --body \"$(cat <<'EOF'
## Summary
<1-3 bullet points>

## Test plan
[Bulleted markdown checklist of TODOs for testing the pull request...]
EOF
)\"

Important:
- DO NOT use the TodoWriteTool or Agent tools
- Return the PR URL when you're done, so the user can see it

# Other common operations
- View comments on a Github PR: gh api repos/foo/bar/pulls/123/comments"

- **(simple prompt - tool usage guidelines)** - "Executes a given bash command and returns its output.

The working directory persists between commands, but shell environment is initialized from the user's profile (bash or zsh).

IMPORTANT: Avoid using this tool to run `find`, `grep`, `cat`, `head`, `tail`, `sed`, `awk`, or `echo` commands, unless explicitly instructed or after you have verified that a dedicated tool cannot accomplish your task. Instead, use the appropriate dedicated tool as this will provide a much better experience for the user:
- File search: Use Glob tool (NOT find or ls)
- Content search: Use Grep tool (NOT grep or rg)
- Read files: Use Read tool (NOT cat/head/tail)
- Edit files: Use FileEdit tool (NOT sed/awk)
- Write files: Use FileWrite tool (NOT echo >/cat <<EOF)
- Communication: Output text directly (NOT echo/printf)"

- **(simple prompt - instructions)** - "If your command will create new directories or files, first use this tool to run `ls` to verify the parent directory exists and is the correct location.
Always quote file paths that contain spaces with double quotes in your command (e.g., cd \"path with spaces/file.txt\")
Try to maintain your current working directory throughout the session by using absolute paths and avoiding usage of `cd`. You may use `cd` if the User explicitly requests it.
When issuing multiple commands:
  - If the commands are independent and can run in parallel, make multiple Bash tool calls in a single message.
  - If the commands depend on each other and must run sequentially, use a single Bash call with '&&' to chain them together.
  - Use ';' only when you need to run commands sequentially but don't care if earlier commands fail.
  - DO NOT use newlines to separate commands (newlines are ok in quoted strings).
For git commands:
  - Prefer to create a new commit rather than amending an existing commit.
  - Before running destructive operations, consider whether there is a safer alternative.
  - Never skip hooks (--no-verify) or bypass signing unless the user has explicitly asked for it."

- **(command sandbox section)** - "By default, your command will be run in a sandbox. This sandbox controls which directories and network hosts commands may access or modify without an explicit override.

The sandbox has the following restrictions:
- Filesystem: read/write/network restrictions as configured

You should always default to running commands within the sandbox. Do NOT attempt to set `dangerouslyDisableSandbox: true` unless:
  - The user *explicitly* asks you to bypass sandbox
  - A specific command just failed and you see evidence of sandbox restrictions causing the failure.
Evidence of sandbox-caused failures includes:
  - \"Operation not permitted\" errors for file/network operations
  - Access denied to specific paths outside allowed directories
  - Network connection failures to non-whitelisted hosts
  - Unix socket connection errors
When you see evidence of sandbox-caused failure:
  - Immediately retry with `dangerouslyDisableSandbox: true` (don't ask, just do it)
  - Briefly explain what sandbox restriction likely caused the failure.
  - This will prompt the user for permission
For temporary files, always use the `$TMPDIR` environment variable."
