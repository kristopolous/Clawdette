# officialMarketplaceStartupCheck

## Purpose
Auto-installs the official Anthropic marketplace on startup for new users, with retry logic (exponential backoff), enterprise policy checks, git availability checks, and GCS mirror support.

## Imports
- **Stdlib**: `path`
- **Internal**: `../../services/analytics/growthbook.js`, `../../services/analytics/index.js`, `../config.js`, `../debug.js`, `../envUtils.js`, `../errors.js`, `../log.js`, `./gitAvailability.js`, `./marketplaceHelpers.js`, `./marketplaceManager.js`, `./officialMarketplace.js`, `./officialMarketplaceGcs.js`

## Logic
1. **Retry logic**: Exponential backoff starting at 1 hour, doubling each attempt, capped at 1 week, max 10 attempts. Permanent failures (`policy_blocked`) don't retry. Temporary failures (`unknown`, `git_unavailable`, `gcs_unavailable`) retry with backoff.
2. **Installation flow**: Checks retry state → env var disable → already installed → policy check → GCS mirror (preferred, no git needed) → git fallback (if feature flag allows) → git availability → actual installation.
3. **GCS-first strategy**: Attempts to fetch from GCS mirror first (inc-5046). If successful, registers marketplace with `source:'github'` and skips git entirely. Falls back to git only if feature flag `tengu_plugin_official_mkt_git_fallback` is enabled (default: true).
4. **macOS xcrun shim detection**: If error contains "xcrun: error:", treats as git_unavailable without recording retry state (non-functional macOS shim).
5. **State persistence**: All attempts, successes, failures, retry counts, and next retry times are stored in GlobalConfig.

## Exports
- `OfficialMarketplaceSkipReason` - type alias for skip reasons: `already_attempted`, `already_installed`, `policy_blocked`, `git_unavailable`, `gcs_unavailable`, `unknown`
- `OfficialMarketplaceCheckResult` - type for result of auto-install check (installed, skipped, reason, configSaveFailed)
- `RETRY_CONFIG` - constant object with MAX_ATTEMPTS (10), INITIAL_DELAY_MS (1 hour), BACKOFF_MULTIPLIER (2), MAX_DELAY_MS (1 week)
- `isOfficialMarketplaceAutoInstallDisabled` - checks if auto-install is disabled via `CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL` env var
- `checkAndInstallOfficialMarketplace` - main function: checks and installs the official marketplace on startup; fire-and-forget design

## Source
`officialMarketplaceStartupCheck`
