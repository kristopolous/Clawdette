# parseMarketplaceInput

## Purpose
Parses a marketplace input string and returns the appropriate MarketplaceSource object. Handles git SSH URLs, HTTP/HTTPS URLs, GitHub shorthand, local file paths, and local directory paths.

## Imports
- **Stdlib**: `os` (homedir), `path` (resolve)
- **Internal**: `../errors.js`, `../fsOperations.js`, `./schemas.js`

## Logic
1. **Git SSH URLs**: Matches `user@host:path` format with optional `#ref` suffix. Supports any valid username (not just `git`), GitHub Enterprise org certs, custom usernames, and self-hosted servers.
2. **HTTP/HTTPS URLs**: Checks for `.git` suffix or `/_git/` in path (Azure DevOps) to use `git` source type (clone) instead of `url` (raw fetch). GitHub.com URLs are converted to `git` source with `.git` suffix appended.
3. **Local paths**: Recognizes `./`, `../`, `/`, `~`, and Windows paths (`.\\`, `..\\`, `C:\`). Resolves `~` to homedir. Stats the path to determine if file (must be `.json`) or directory.
4. **GitHub shorthand**: Matches `owner/repo` format with optional `#ref` or `@ref`. Both separators accepted since display formatter uses `@`.
5. **Returns**: `MarketplaceSource` object, `{ error: string }` for invalid local paths, or `null` for unrecognized input.

## Exports
- `parseMarketplaceInput` - async function that parses a marketplace input string and returns a MarketplaceSource, error object, or null

## Source
`parseMarketplaceInput`
