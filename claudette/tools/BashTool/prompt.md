## Purpose
Provides the comprehensive prompt for the Bash tool, including usage instructions, sandbox restrictions, git guidelines, and background task advice.

## Imports
Many internal modules for configuration, attribution, environment, sandbox, etc. (see source)

## Logic
Exports many helper functions and the main prompt assembly:
- `getDefaultTimeoutMs()`, `getMaxTimeoutMs()`: timeouts from utils/timeouts.
- `getBackgroundUsageNote()`: optional note about `run_in_background`.
- `getCommitAndPRInstructions()`: extensive git safety and workflow instructions, varying by USER_TYPE ('ant' vs external). Includes commit protocol, PR creation steps with gh, and undercover guidance.
- `getSimpleSandboxSection()`: builds sandbox restriction description (filesystem, network) when sandboxing enabled; includes items on using $TMPDIR, and rules about `dangerouslyDisableSandbox`.
- `getSimplePrompt()`: Assembles the full prompt with sections:
  - Tool purpose: executes bash command, returns output.
  - Working directory persistence and environment initialization.
  - IMPORTANT: Avoid using find/grep/cat/head/tail/sed/awk/echo; prefer dedicated tools (Glob, Grep, FileRead, FileEdit, FileWrite). Lists tool preferences.
  - # Instructions block: 
    - verify parent directory with ls
    - quote paths with spaces
    - maintain cwd with absolute paths, avoid cd unless requested
    - timeout defaults
    - background usage note if applicable
    - multiple commands: parallel vs sequential (&& for dependent, ; for fire-and-forget)
    - git commands: subitems on commit preferences, destructive operations, hooks
    - avoid sleep: use Monitor or background; if must sleep keep short
    - embedded search tools caveat for find -regex alternation
  - # Command sandbox section (if sandbox enabled): restrictions, $TMPDIR, `dangerouslyDisableSandbox` policy.
  - Git operations / PR creation instructions if enabled.

The prompt is huge and dynamically assembled based on environment flags (USER_TYPE, feature flags, sandbox config, git settings).

## Exports
- `getDefaultTimeoutMs()`
- `getMaxTimeoutMs()`
- `getBackgroundUsageNote()`
- `getCommitAndPRInstructions()`
- `getSimpleSandboxSection()`
- `getSimplePrompt()`
