# frontmatterParser

## Purpose
Parses YAML frontmatter from markdown files (between `---` delimiters). Handles YAML edge cases like null values, special characters in glob patterns, and provides typed parsers for common frontmatter fields.

## Imports
- **Internal**: ./debug (`logForDebugging`), ./settings/types (`HooksSettings`), ./yaml (`parseYaml`)

## Items

### YAML_SPECIAL_CHARS
**Type**: Constant (regex)
Characters that require quoting in YAML values: `{}`, `[]`, `*`, `&`, `#`, `!`, `|`, `>`, `%`, `@`, `` ` ``, `: ` (colon-space). Used by `quoteProblematicValues`.

### quoteProblematicValues
**Type**: Function (internal)
Pre-processes frontmatter text to quote values containing special YAML characters. Allows glob patterns like `**/*.{ts,tsx}` to parse correctly. Escapes existing backslashes and double quotes.

### parseFrontmatter
**Type**: Function
Extracts frontmatter and content from markdown. Uses `FRONTMATTER_REGEX` to find the `---` block. On YAML parse failure, retries with `quoteProblematicValues`. Logs warnings on persistent failure.

### splitPathInFrontmatter
**Type**: Function
Splits comma-separated strings while respecting braces (commas inside `{}` are not separators). Accepts string or string array. Does NOT expand braces — delegates to `expandBraces`.

### expandBraces
**Type**: Function (internal)
Recursively expands brace patterns in glob strings. E.g., `src/*.{ts,tsx}` → `["src/*.ts", "src/*.tsx"]`, `{a,b}/{c,d}` → `["a/c", "a/d", "b/c", "b/d"]`.

### parsePositiveIntFromFrontmatter
**Type**: Function
Parses positive integers from frontmatter values. Handles both number and string inputs. Returns `undefined` for null, non-integer, or non-positive values.

### coerceDescriptionToString
**Type**: Function
Validates and coerces description values. Strings returned trimmed, primitives coerced via `String()`, arrays/objects logged as invalid and omitted. Null/empty returns `null`.

### parseBooleanFrontmatter
**Type**: Function
Returns `true` only for literal `true` or string `"true"`. Everything else is `false`.

### FrontmatterShell
**Type**: Type alias
Union type: `'bash' | 'powershell'`. Shell values accepted in `shell:` frontmatter for `!`-block execution.

### FRONTMATTER_SHELLS
**Type**: Constant (readonly array)
Valid shell values: `['bash', 'powershell']`.

### parseShellFrontmatter
**Type**: Function
Parses and validates `shell:` frontmatter field. Normalizes to lowercase. Returns `undefined` for absent/null/empty/unrecognized values (caller defaults to bash). Logs warning for unrecognized values.

### FrontmatterData
**Type**: Type alias
Keys: `allowed-tools`, `description`, `type`, `argument-hint`, `when_to_use`, `version`, `hide-from-slash-command-tool`, `model`, `skills`, `user-invocable`, `hooks`, `effort`, `context`, `agent`, `paths`, `shell`, plus index signature `[key: string]: unknown`.

### ParsedMarkdown
**Type**: Type alias
`{ frontmatter: FrontmatterData, content: string }`

## Exports
- `FrontmatterData` — type for parsed frontmatter keys
- `ParsedMarkdown` — type for frontmatter + content result
- `FRONTMATTER_REGEX` — regex matching `---` delimited frontmatter block
- `parseFrontmatter` — extracts frontmatter and content from markdown
- `splitPathInFrontmatter` — splits comma-separated strings, expands braces
- `parsePositiveIntFromFrontmatter` — parses positive int from unknown value
- `coerceDescriptionToString` — validates/coerces description to string or null
- `parseBooleanFrontmatter` — strict boolean parser (only true/"true")
- `FrontmatterShell` — type alias for shell values
- `parseShellFrontmatter` — validates shell frontmatter field

## Source
`frontmatterParser`