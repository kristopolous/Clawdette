# ghPrStatus

## Purpose
Fetches GitHub PR status for the current branch using `gh pr view`. Returns review state (approved, pending, changes_requested, draft, merged, closed). Returns null on any failure, on the default branch, or for merged/closed PRs.

## Imports
- **Internal**: `./execFileNoThrow` (`execFileNoThrow`), `./git` (`getBranch`, `getDefaultBranch`, `getIsGit`), `./slowOperations` (`jsonParse`)

## Items

### GH_TIMEOUT_MS
**Type**: Constant
5000ms timeout for `gh` CLI invocation.

### PrReviewState
**Type**: Type alias
Union: `'approved' | 'pending' | 'changes_requested' | 'draft' | 'merged' | 'closed'`

### PrStatus
**Type**: Type alias
`{ number: number, url: string, reviewState: PrReviewState }`

### deriveReviewState
**Type**: Function
Maps `isDraft` + `reviewDecision` to `PrReviewState`. Draft → `'draft'`. `APPROVED` → `'approved'`. `CHANGES_REQUESTED` → `'changes_requested'`. Everything else → `'pending'`.

### fetchPrStatus
**Type**: Async Function
Returns `PrStatus | null`. Checks: is git repo, not on default branch, `gh pr view --json` succeeds, headRefName is not default/main/master, PR state is not MERGED/CLOSED. Parses JSON with 5s timeout.

## Exports
- `PrReviewState` — union type for PR review states
- `PrStatus` — type for PR status result
- `deriveReviewState` — maps gh API values to review state
- `fetchPrStatus` — fetches PR status for current branch

## Source
`ghPrStatus`