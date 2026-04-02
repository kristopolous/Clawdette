# utils/pasteStore

## Purpose
Provides a content-addressable on-disk cache for pasted text, stored under `~/.claude/paste-cache/`. Uses SHA-256 hashes (truncated to 16 hex chars) as filenames for deduplication.

## Imports
- **Stdlib**: `crypto`, `fs/promises`, `path`
- **Internal**: `./debug.js`, `./envUtils.js`, `./errors.js`

## Logic
1. `PASTE_STORE_DIR` — `'paste-cache'`; subdirectory under Claude config home
2. `getPasteStoreDir()` — returns `<configHome>/paste-cache`
3. `hashPastedText(content)` — creates SHA-256 hash of content, returns first 16 hex characters; exported so callers can get the hash synchronously before async disk write
4. `getPastePath(hash)` — returns `<pasteStoreDir>/<hash>.txt`
5. `storePastedText(hash, content)` — async; creates directory if needed; writes content to file with mode `0o600`; content-addressable so overwrites are safe; silently logs errors
6. `retrievePastedText(hash)` — async; reads file by hash; returns `null` if not found or on error (ENOENT is expected and silent)
7. `cleanupOldPastes(cutoffDate)` — async; iterates all `.txt` files in paste dir; removes files with `mtime` older than `cutoffDate`; silently ignores individual file errors

## Exports
- `hashPastedText(content: string)` — returns `string` (16-char SHA-256 hex); synchronous
- `storePastedText(hash: string, content: string)` — async; writes content to disk
- `retrievePastedText(hash: string)` — async; returns `string | null`; reads content by hash
- `cleanupOldPastes(cutoffDate: Date)` — async; removes paste files older than cutoff
