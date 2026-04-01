# GlobTool

Search for files by name pattern or wildcard.

## Tool Name
`Search` (user-facing name)

## Usage
```
pattern: "*.ts"
path: "/path/to/search"
```

## Input Schema

```typescript
{
  pattern: string;       // Required. The glob pattern to match files against
  path?: string;         // Optional. The directory to search in. Defaults to current working directory.
}
```

## Output Schema

```typescript
{
  durationMs: number;    // Time taken to execute the search in milliseconds
  numFiles: number;      // Total number of files found
  filenames: string[];   // Array of file paths that match the pattern
  truncated: boolean;    // Whether results were truncated (limited to 100 files)
}
```

## Configuration

- **Max Results**: 100 files (configurable via `globLimits.maxResults`)
- **Max Result Size**: 100,000 characters
- **Concurrency**: Safe to run concurrently with other tools
- **Read Only**: Yes - does not modify filesystem

## Validation Rules

1. If `path` is provided, it must exist and be a directory
2. UNC paths (starting with `\\` or `//`) are rejected for security to prevent NTLM credential leaks
3. Non-existent paths suggest alternatives based on current working directory

## Error Handling

| Error Code | Condition |
|------------|-----------|
| 1 | Directory does not exist |
| 2 | Path is not a directory |

## Output Rendering

- Empty results: Returns `No files found`
- Non-empty results: Returns filenames joined by newlines
- Truncated results: Appends message suggesting more specific path or pattern

## Security

- Validates read permissions before execution
- Matches patterns against allowed filesystem rules
- Skips filesystem operations for UNC paths to prevent credential leaks
- Paths are relativized under current working directory to reduce token usage
