## Purpose
Detects potentially destructive bash commands and returns a warning string for display in the permission dialog.

## Imports
- None (defines internal types and patterns)

## Logic
Exports `getDestructiveCommandWarning(command)`: Iterates through `DESTRUCTIVE_PATTERNS` array (RegExp + warning pairs) and returns the first matching warning. Patterns cover:
- Git: reset --hard, push --force/--force-with-lease/-f, clean -f, checkout/restore ., stash drop/clear, branch -D, commit/push/merge with --no-verify, commit --amend.
- File deletion: rm with -r/-f combinations.
- Database: DROP/TRUNCATE table/database/schema, DELETE FROM without WHERE.
- Infrastructure: kubectl delete, terraform destroy.
Returns `null` if no pattern matches.

## Exports
- `getDestructiveCommandWarning(command)` (function)
