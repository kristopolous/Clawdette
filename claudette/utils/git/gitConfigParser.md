# gitConfigParser

## Purpose
Lightweight parser for `.git/config` files. Verified against git's config.c: section names are case-insensitive, subsection names (quoted) are case-sensitive with backslash escapes, key names are case-insensitive, values support optional quoting, inline comments (# or ;), and backslash escapes.

## Imports
- **Stdlib**: `fs/promises` (`readFile`), `path` (`join`)

## Items

### parseGitConfigValue
**Type**: Async Function
Reads `.git/config` from `gitDir` and delegates to `parseConfigString`. Returns `null` on file read failure.

### parseConfigString
**Type**: Function
Parses config from an in-memory string. Iterates lines, skips empty/comment lines, tracks section context via `matchesSectionHeader`, finds first matching key in the target section. Exported for testing.

### parseKeyValue
**Type**: Function (internal)
Parses a `key = value` line. Key must start with alpha, contain alphanumeric + hyphen. Returns null if no valid key or no `=` found. Delegates value parsing to `parseValue`.

### parseValue
**Type**: Function (internal)
Parses a config value starting at position `i`. Handles quoted strings, escape sequences (`\n`, `\t`, `\b`, `\"`, `\\`), inline comments (# or ;) outside quotes. Unknown escapes inside quotes: git drops the backslash. Outside quotes: backslash treated literally. Trims trailing whitespace when not ending in a quote.

### trimTrailingWhitespace
**Type**: Function (internal)
Trims trailing spaces and tabs from a string.

### matchesSectionHeader
**Type**: Function (internal)
Checks if a line like `[remote "origin"]` matches the given section/subsection. Section matching is case-insensitive; subsection matching is case-sensitive with `\\` and `\"` escape handling.

### isKeyChar
**Type**: Function (internal)
Returns true for alphanumeric and hyphen characters.

## Exports
- `parseGitConfigValue` — async function to read a value from `.git/config` file
- `parseConfigString` — sync function to parse value from config string

## Source
`gitConfigParser`