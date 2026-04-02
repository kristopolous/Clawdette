# marketplaceHelpers

## Purpose
Provides utilities for marketplace management: formatting failure details, generating plugin IDs, loading marketplaces with graceful degradation, checking enterprise policy restrictions (allowlists/blocklists), and detecting why no marketplaces are available.

## Imports
- **Stdlib**: `lodash-es/isEqual`
- **Internal**: `../errors.js`, `../log.js`, `../settings/settings.js`, `../stringUtils.js`, `./gitAvailability.js`, `./marketplaceManager.js`, `./schemas.js`

## Logic
1. **Policy enforcement**: `isSourceAllowedByPolicy()` checks blocklist first (takes precedence), then allowlist. Allowlist supports exact source matches, `hostPattern` (regex against extracted host), and `pathPattern` (regex against file/directory paths).
2. **Blocklist matching**: `areSourcesEquivalentForBlocklist()` handles cross-source-type matching (e.g., `git` URL vs `github` shorthand for the same repo) with wildcard semantics — if blocklist entry has no ref/path, it blocks ALL refs/paths.
3. **Graceful loading**: `loadMarketplacesWithGracefulDegradation()` iterates marketplaces, skips policy-blocked ones, catches individual failures, and returns both successful and failed results.
4. **Empty marketplace detection**: `detectEmptyMarketplaceReason()` checks in priority order: git availability → policy restrictions → config state → failures → all plugins installed.

## Exports
- `formatFailureDetails` - formats plugin failure details for user display, showing up to 2 failures with reasons and "N more" for the rest
- `getMarketplaceSourceDisplay` - extracts display string from a MarketplaceSource (repo, URL, path, or settings name)
- `createPluginId` - creates plugin ID in "pluginName@marketplaceName" format
- `loadMarketplacesWithGracefulDegradation` - loads all marketplaces, skipping blocked ones and catching individual failures
- `formatMarketplaceLoadingErrors` - formats marketplace loading failures into warning (partial success) or error (all failed) messages
- `getStrictKnownMarketplaces` - returns the strict marketplace source allowlist from policy settings, or null if no restriction
- `getBlockedMarketplaces` - returns the marketplace source blocklist from policy settings, or null if no blocklist
- `getPluginTrustMessage` - returns custom plugin trust message from policy settings, or undefined
- `extractHostFromSource` - extracts host/domain from a MarketplaceSource (supports github, git, url sources)
- `getHostPatternsFromAllowlist` - returns all hostPattern entries from the allowlist as an array of regex strings
- `isSourceInBlocklist` - checks if a marketplace source is explicitly in the blocklist (handles cross-source-type matching)
- `isSourceAllowedByPolicy` - checks if a marketplace source is allowed by enterprise policy (blocklist then allowlist)
- `formatSourceForDisplay` - formats a MarketplaceSource for display in error messages
- `detectEmptyMarketplaceReason` - detects why no marketplaces are available (git-not-installed, all-blocked-by-policy, policy-restricts-sources, all-marketplaces-failed, no-marketplaces-configured, all-plugins-installed)
- `EmptyMarketplaceReason` - type alias for the possible reasons why no marketplaces are available

## Source
`marketplaceHelpers`
