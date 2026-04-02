# installCounts

## Purpose
Fetches and caches plugin install counts from the official Claude plugins statistics GitHub repository for display in the UI.

## Imports
- **External**: `axios`
- **Stdlib**: `crypto`, `fs/promises`, `path`
- **Internal**: `../debug`, `../errors`, `../fsOperations`, `../log`, `../slowOperations`, `./fetchTelemetry`, `./pluginDirectories`

## Logic
1. **Cache layer** — Cache stored at `~/.claude/plugins/install-counts-cache.json` with 24-hour TTL. Validates structure, version, and timestamp on load. Saves atomically via temp file + rename pattern.
2. **fetchInstallCountsFromGitHub** — Fetches from `anthropics/claude-plugins-official` stats branch. 10s timeout. Logs telemetry via `logPluginFetch`.
3. **getInstallCounts** — Returns `Map<pluginId, count>` or `null` on error (UI hides counts rather than showing misleading zeros). Tries cache first, falls back to GitHub fetch.
4. **formatInstallCount** — Formats for display: `<1000` as raw number, `>=1000` with K suffix, `>=1M` with M suffix (1 decimal, strips trailing `.0`).

## Exports
- `getInstallCounts` - Get plugin install counts as a Map, or `null` if unavailable
- `formatInstallCount` - Format a count for display (e.g., `"1.2K"`, `"42"`, `"3.5M"`)
