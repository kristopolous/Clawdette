## Purpose
Validates filesystem paths used in bash commands against allowed directories, handling many command-specific extraction rules.

## Imports
Many internal utilities from permissions, bash parsing, path, etc. Full list extensive.

## Logic
Exports:
- `PathCommand` type union of supported commands (cd, ls, find, mkdir, touch, rm, rmdir, mv, cp, cat, head, tail, sort, uniq, wc, cut, paste, column, tr, file, stat, diff, awk, strings, hexdump, od, base64, nl, grep, rg, sed, git, jq, sha256sum, sha1sum, md5sum).
- `PATH_EXTRACTORS`: Record mapping each PathCommand to a function that extracts path arguments from its args array, handling flags, `--` delimiter, defaults, and command-specific nuances (e.g., grep -e pattern then paths; sed script and file paths; git diff --no-index; jq filter then paths; find with complex flag handling; etc.). This ensures security by correctly identifying which files/directories a command will access.
- `COMMAND_OPERATION_TYPE`: Maps each command to `FileOperationType` ('read', 'write', 'create').
- `COMMAND_VALIDATOR`: Optional validators that reject certain flag combinations (e.g., mv/cp with any flags) for security.
- `checkDangerousRemovalPaths(command, args, cwd)`: For rm/rmdir, checks if any target path is a critical system directory via `isDangerousRemovalPath`; returns 'ask' with specific message if found.
- `createPathChecker(command, operationTypeOverride?)`: Returns a function that validates a command's args: extracts paths via PATH_EXTRACTORS, checks each with `validatePath`, applies dangerous removal check, and for 'ask' results suggests directory permissions or accept-edits mode. Wraps core validation logic.
- `validateSinglePathCommand(cmd, cwd, context, compoundCommandHasCd?)`: Full validation for a single command string: strips safe wrappers (timeout, nice, etc.), parses args with shell-quote, checks base command, determines operation type, runs pathChecker. Also integrates sed read-only allowlist.
- `validateSinglePathCommandArgv(cmd, cwd, context, compoundCommandHasCd?)`: Like above but takes AST SimpleCommand to avoid shell-quote bugs.
- `validateOutputRedirections(redirections, cwd, context, compoundCommandHasCd?)`: Validates > and >> targets, blocking in compound commands with cd, and using validatePath for each target.
- `checkPathConstraints(input, cwd, context, compoundCommandHasCd?, astRedirects?, astCommands?)`: Main exported function for full path validation. Checks process substitution; uses either AST-derived redirects/commands or re-parses. Iterates over commands (or AST commands) and aggregates results. Returns 'passthrough' if no path commands found; otherwise returns 'ask' or 'deny' as appropriate.
- `astRedirectsToOutputRedirections(redirects)`: Converts AST Redirect[] to { redirections, hasDangerousRedirection } for validateOutputRedirections.
- `stripWrappersFromArgv(argv)`: Strips wrapper commands (time, nohup, timeout, nice, stdbuf, env) from an argv array, using detailed flag parsing to correctly locate the inner command. This is the canonical implementation kept in sync with similar logic in bashPermissions.ts.

This module is central to securing bash operations by ensuring all file system accesses are within allowed directories.

## Exports
- `PathCommand` (type)
- `PATH_EXTRACTORS` (record)
- `COMMAND_OPERATION_TYPE` (record)
- `checkDangerousRemovalPaths(cmd, args, cwd)` (function)
- `createPathChecker(command, operationTypeOverride?)` (function)
- `validateSinglePathCommand(...)` (function)
- `validateSinglePathCommandArgv(...)` (function)
- `validateOutputRedirections(...)` (function)
- `checkPathConstraints(input, cwd, context, ...)`
- `astRedirectsToOutputRedirections(redirects)` (function)
- `stripWrappersFromArgv(argv)` (function)
