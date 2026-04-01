# GrepTool

A powerful search tool built on ripgrep for searching file contents using regular expressions.

## Usage

```typescript
import { GrepTool } from './tools/GrepTool/GrepTool.ts'
```

## Tool Name

`Grep`

## Input Schema

```typescript
{
  // Required
  pattern: string           // The regular expression pattern to search for

  // Optional
  path?: string             // File or directory to search in (defaults to current working directory)
  glob?: string             // Glob pattern to filter files (e.g. "*.js", "*.{ts,tsx}")
  output_mode?: 'content' | 'files_with_matches' | 'count'
                           // Output mode (default: "files_with_matches")
  
  // Context options (for content mode)
  '-B'?: number             // Number of lines to show before each match
  '-A'?: number             // Number of lines to show after each match
  '-C'?: number             // Alias for context (before and after)
  context?: number          // Number of lines to show before and after each match
  
  // Display options
  '-n'?: boolean            // Show line numbers in output (default: true for content mode)
  '-i'?: boolean            // Case insensitive search
  
  // Filtering options
  type?: string             // File type to search (e.g. "js", "py", "rust", "go", "java")
  
  // Result limits
  head_limit?: number       // Limit output to first N lines/entries (default: 250)
  offset?: number           // Skip first N lines/entries before applying head_limit (default: 0)
  
  // Pattern options
  multiline?: boolean       // Enable multiline mode where . matches newlines (default: false)
}
```

## Output Schema

```typescript
{
  mode?: 'content' | 'files_with_matches' | 'count'
  numFiles: number
  filenames: string[]
  content?: string          // For content mode
  numLines?: number         // For content mode
  numMatches?: number       // For count mode
  appliedLimit?: number     // The limit that was applied (if any)
  appliedOffset?: number   // The offset that was applied
}
```

## Output Modes

### `files_with_matches` (default)
Returns a list of file paths containing matches, sorted by modification time (most recent first).

### `content`
Returns the actual matching lines with:
- Line numbers (by default)
- Relative paths for conciseness
- Context lines if `-B`, `-A`, `-C`, or `context` options are specified

### `count`
Returns match counts per file in `filename:count` format, along with total matches and file count.

## Result Limits

- **Default head_limit**: 250 results
- **Unlimited**: Pass `head_limit: 0` for unlimited results (use sparingly)
- **Pagination**: Use `offset` to skip results and paginate through large datasets
- **Applied limit reporting**: When results are truncated, `appliedLimit` and `appliedOffset` are included in the output

## Automatic Exclusions

The following directories are automatically excluded from searches to reduce noise:
- `.git`, `.svn`, `.hg`, `.bzr`, `.jj`, `.sl`

Additionally:
- Line length is capped at 500 characters to prevent base64/minified content from cluttering output
- Orphaned plugin version directories are excluded

## Security Features

- **UNC path prevention**: Filesystem operations are skipped for UNC paths (starting with `\\` or `//`) to prevent NTLM credential leaks
- **Permission checking**: Validates read permissions before executing searches
- **Ignore patterns**: Respects file read ignore patterns from permissions system

## Examples

### Basic Search
```typescript
{
  pattern: "log.*Error"
}
```

### Search in Specific Path with Glob Filter
```typescript
{
  pattern: "useState",
  path: "./src",
  glob: "*.{ts,tsx}"
}
```

### Search with Content Context
```typescript
{
  pattern: "async function",
  output_mode: "content",
  '-C': 2,
  '-i': true
}
```

### Count Matches per File
```typescript
{
  pattern: "TODO",
  output_mode: "count"
}
```

### Pagination
```typescript
{
  pattern: "function",
  head_limit: 100,
  offset: 0     // First page
}
// Then for next page:
{
  pattern: "function",
  head_limit: 100,
  offset: 100   // Skip first 100
}
```

### Multiline Matching
```typescript
{
  pattern: "struct \\{[\\s\\S]*?field",
  multiline: true
}
```

## Internal Implementation Notes

### Path Handling
- Paths are expanded to absolute paths internally
- Results are converted back to relative paths to save tokens
- UNC paths (`\\` or `//`) are blocked for security

### Sorting (files_with_matches mode)
Files are sorted by modification time (most recent first), with filename as a tiebreaker.

### Permission Validation
Input validation checks that the specified path exists before attempting to search, with helpful suggestions if a path under CWD was likely intended.

### Performance Considerations
- WSL has a 3-5x slower file read performance penalty; ripgrep handles its own timeout
- Results exceeding 20KB are truncated to prevent context bloat
