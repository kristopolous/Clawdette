# BashTool/readOnlyValidation

## Purpose

Provides unified allowlist-based validation for read-only commands and flags. Determines if a command is safe to execute without elevated permissions by checking against a large configuration table (`COMMAND_ALLOWLIST`) and regex patterns (`READONLY_COMMAND_REGEXES`). Used by BashTool's permission system to enforce read-only operations and block dangerous actions (writes, command execution, network access).

## Imports

- **Stdlib**: None
- **External**: `zod/v4` (for `z.infer`)
- **Internal** (abbreviated):
  - Bash: shell parsing utilities
  - Git: `isCurrentDirectoryBareGitRepo`
  - Permissions: `PermissionResult`
  - Shell validation: `containsVulnerableUncPath`, `*_READ_ONLY_COMMANDS` maps, `validateFlags`
  - Path validation: `PATH_EXTRACTORS`, `PathCommand`
  - Sed validation: `sedCommandIsAllowedByAllowlist`

## Logic

**Type** `CommandConfig`:
- `safeFlags: Record<string, FlagArgType>` — allowed flags and argument types ('none', 'number', 'string', or specific like 'EOF')
- `regex?`: additional regex for whole command
- `additionalCommandIsDangerousCallback?`: custom rejection logic
- `respectsDoubleDash?`: default true

**Allowlist Tables**:
- `COMMAND_ALLOWLIST`: config for 20+ commands (xargs, git, file, sed, sort, man, help, netstat, ps, base64, grep, rg, checksums, tree, date, hostname, info, lsof, pgrep, tput, ss, fd) plus shared imports (Ripgrep, Pyright, Docker)
- `ANT_ONLY_COMMAND_ALLOWLIST`: for `USER_TYPE=ant`; adds gh and aki
- `getCommandAllowlist()`: merges based on USER_TYPE; removes xargs on Windows (UNC risk)

**Safe Xargs Targets**:
- `SAFE_TARGET_COMMANDS_FOR_XARGS`: echo, printf, wc, grep, head, tail — purely read-only

**Legacy Regex Allowlist**:
- `READONLY_COMMANDS`: simple command names (cat, head, tail, id, uname, etc.)
- `READONLY_COMMAND_REGEXES`: patterns built via `makeRegexForSafeCommand` plus specific patterns for echo, claude -h, uniq, pwd, whoami, history, alias, arch, ip addr, ifconfig, jq

**Main Validator** `isCommandSafeViaFlagParsing`:
  1. Parse with `tryParseShellCommand`; reject operators
  2. Match command prefix in allowlist
  3. Special: git ls-remote rejects URLs/SSH/vars
  4. Pre-flag rejections: any `$` in tokens; brace expansion with `{,` or `{..`
  5. `validateFlags` against `safeFlags`, respecting `--` and xargs targets
  6. Optional `regex` test; reject backticks; reject newlines in grep/rg
  7. Run `additionalCommandIsDangerousCallback` (sed, date, hostname, info, lsof, tput)
  8. Return boolean

**Helper**:
- `makeRegexForSafeCommand(command)`: `/^command(?:\s|$)[^<>()$`|{}&;\n\r]*$/` blocks metacharacters

## Exports

- `isCommandSafeViaFlagParsing(command: string): boolean`
- `checkReadOnlyConstraints(input: {command: string}, toolPermissionContext: ToolPermissionContext): PermissionResult`

### Helpful Prompt Templates

- **(READONLY_COMMANDS list - simple safe commands)** - The following commands are considered inherently read-only and safe:
  - Time/date: `cal`, `uptime`
  - File content: `cat`, `head`, `tail`, `wc`, `stat`, `strings`, `hexdump`, `od`, `nl`
  - System info: `id`, `uname`, `free`, `df`, `du`, `locale`, `groups`, `nproc`
  - Path info: `basename`, `dirname`, `realpath`, `readlink`
  - Text processing: `cut`, `paste`, `tr`, `column`, `tac`, `rev`, `fold`, `expand`, `unexpand`, `fmt`, `comm`, `cmp`, `numfmt`
  - File comparison: `diff`
  - Control: `true`, `false`
  - Misc: `sleep`, `which`, `type`, `expr`, `test`, `getconf`, `seq`, `tsort`, `pr`

- **(COMMAND_ALLOWLIST structure)** - Central allowlist mapping command names to safe flag configurations:
  - `xargs`: safe flags include `-I {}`, `-n`, `-P`, `-L`, `-s`, `-E EOF`, `-0`, `-t`, `-r`, `-x`, `-d char`
  - `file`: output format flags (`--brief`, `--mime`, `--mime-encoding`), behavior flags (`--check-encoding`, `--exclude`), following/dereferencing (`--no-dereference`, `--dereference`)
  - `sed`: expression flags (`--expression`, `-e`), output control (`--quiet`, `-n`), extended regex (`-E`, `-r`, `--posix`), line handling (`-z`, `-s`, `-u`)
  - `sort`: sorting options (`-b`, `-d`, `-f`, `-g`, `-h`, `-i`, `-M`, `-n`, `-R`, `-r`, `-V`), key specs (`-k`, `-t`), checking (`-c`, `-C`), merging (`-m`)
  - `man`: display options (`-a`, `-d`, `-f`, `-h`, `-k`, `-l`, `-w`, `-S`, `-s`)
  - `help`: only bash builtin help flags (`-d`, `-m`, `-s`)
  - `netstat`, `ps`, `base64`, `grep`, `sha256sum`, `sha1sum`, `md5sum`, `tree`, `date`, `hostname`, `info`, `lsof`, `pgrep`, `tput`, `ss`, `fd`, `fdfind`
  - Plus shared imports: `RIPGREP_READ_ONLY_COMMANDS`, `PYRIGHT_READ_ONLY_COMMANDS`, `DOCKER_READ_ONLY_COMMANDS`
  - Ant-only additions: `GH_READ_ONLY_COMMANDS`, `aki` (Anthropic internal knowledge-base search CLI)

- **(SAFE_TARGET_COMMANDS_FOR_XARGS)** - Commands safe to use as xargs targets: `echo`, `printf`, `wc`, `grep`, `head`, `tail` — purely read-only with no dangerous flags

- **(READONLY_COMMAND_REGEXES patterns)** - Regex patterns for safe command invocations:
  - `echo`: allows quoted strings but no variables/metacharacters, optional `2>&1`
  - `claude -h`, `claude --help`: exact match
  - `uniq`: flags only, no input/output files
  - `pwd`, `whoami`: exact match (env/printenv removed - could expose sensitive variables)
  - `node -v`, `node --version`, `python --version`, `python3 --version`: exact match only
  - `history`: bare or with numeric argument only
  - `alias`: exact match
  - `arch`: with optional `--help` or `-h`
  - `ip addr`: exact match
  - `ifconfig`: with optional interface name
  - `jq`: with inline filters, blocks `-f/--from-file/--rawfile/--slurpfile/--run-tests/-L/--library-path`, `env` builtin, `$ENV`
  - `cd`: with optional quoted path
  - `ls`: with optional safe arguments
  - `find`: blocks `-delete`, `-exec`, `-execdir`, `-ok`, `-okdir`, `-fprint`, `-fls`, `-fprintf`; allows escaped parentheses

- **(FD_SAFE_FLAGS structure)** - Safe flags for fd/fdfind (excludes `-x/--exec` and `-X/--exec-batch` which execute arbitrary commands):
  - Display: `-h`, `--help`, `-V`, `--version`, `-H`, `--hidden`, `-I`, `--no-ignore`
  - Matching: `-s/--case-sensitive`, `-i/--ignore-case`, `-g/--glob`, `--regex`, `-F/--fixed-strings`
  - Path: `-a/--absolute-path`, `-L/--follow`, `-p/--full-path`, `-0/--print0`
  - Depth: `-d/--max-depth`, `--min-depth`, `--exact-depth`
  - Filtering: `-t/--type`, `-e/--extension`, `-S/--size`, `--changed-within`, `--changed-before`, `-E/--exclude`, `--ignore-file`
  - Output: `-c/--color`, `-1`, `-q/--quiet`, `--show-errors`, `--strip-cwd-prefix`, `--hyperlink`, `--format`
  - Other: `-j/--threads`, `--max-buffer-time`, `--max-results`, `--prune`, `--search-path`, `--base-directory`, `--path-separator`, `--batch-size`, `--no-require-git`, `--and`
