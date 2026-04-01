## Purpose
Tracks git and GitHub-related operations for usage metrics and analytics.

## Imports
- **Internal**:
  - `getCommitCounter`, `getPrCounter` from bootstrap/state
  - `logEvent` from services/analytics
  - AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS type

## Logic
Exports:
- `gitCmdRe(subcmd, suffix)` helper builds regex matching `git <subcmd>` while tolerating global options like `-c key=val` or `--git-dir=path`.
- Prebuilt regexes: `GIT_COMMIT_RE`, `GIT_PUSH_RE`, `GIT_CHERRY_PICK_RE`, `GIT_MERGE_RE`, `GIT_REBASE_RE`.
- `parsePrUrl(url)` parses GitHub PR URL into {prNumber, prUrl, prRepository}.
- `findPrInStdout(stdout)` finds a PR URL in command output.
- `parseGitCommitId(stdout)` extracts commit hash from git commit output.
- `parseGitPushBranch(output)` extracts branch name from git push output.
- `GH_PR_ACTIONS` array mapping regexes to PrAction and operation string for gh CLI actions (pr create/edit/merge/comment/close/ready).
- The main runtime function (likely `trackGitOperation` or similar, not visible in first 100 lines but present) scans command strings to detect:
  - git commit/push/cherry-pick/merge/rebase
  - gh/glab PR actions
  - curl-based PR creation
  And then increments OTLP counters and logs analytics events.

The tracking is shell-agnostic, working for Bash and PowerShell by analyzing raw command text.

## Exports
- `GIT_COMMIT_RE` (RegExp)
- `GIT_PUSH_RE` (RegExp)
- `GIT_CHERRY_PICK_RE` (RegExp)
- `GIT_MERGE_RE` (RegExp)
- `GIT_REBASE_RE` (RegExp)
- `GH_PR_ACTIONS` (array)
- `parsePrUrl(url)` (function)
- `findPrInStdout(stdout)` (function)
- `parseGitCommitId(stdout)` (function)
- `parseGitPushBranch(output)` (function)
- `CommitKind`, `BranchAction`, `PrAction` (types)
- Possibly other tracking functions
