# logoV2Utils

## Purpose
Layout calculations, path truncation, welcome message formatting, recent activity caching, release note display, and logo display data for the LogoV2 and CondensedLogo terminal UI components.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ../bootstrap/state (getDirectConnectServerUrl, getSessionId), ../ink/stringWidth, ../types/logs (LogOption), ./auth (getSubscriptionName, isClaudeAISubscriber), ./cwd (getCwd), ./file (getDisplayPath), ./format (truncate, truncateToWidth, truncateToWidthNoEllipsis), ./releaseNotes (getStoredChangelogFromMemory, parseChangelog), ./semver (gt), ./sessionStorage (loadMessageLogs), ./settings/settings (getInitialSettings)

## Logic
1. **Layout** — `getLayoutMode` switches between horizontal (≥70 cols) and compact. `calculateLayoutDimensions` splits terminal width into left/right panels with padding/border constants. `calculateOptimalLeftWidth` sizes the left panel based on widest content line.
2. **Welcome message** — `formatWelcomeMessage` shows "Welcome back {username}!" or generic if username is null/too long (>20 chars).
3. **Path truncation** — `truncatePath` truncates paths in the middle, preserving first and last segments. Width-aware via stringWidth() for CJK/emoji. Handles single-part, two-part, and multi-part paths, keeping middle segments when space allows.
4. **Recent activity** — `getRecentActivity` loads last 10 message logs, filters out sidechain sessions, current session, apology sessions, and sessions with no meaningful summary/prompt. Caches top 3. Promise-based with dedup (returns same promise if already loading).
5. **Release notes** — `formatReleaseNoteForDisplay` truncates notes to maxWidth. `getRecentReleaseNotesSync` returns recent changelog entries — for ants uses build-time bundled changelog, for external users parses stored changelog from top 3 recent versions.
6. **Logo display data** — `getLogoDisplayData` gathers version, cwd (with server URL suffix if applicable), billing type (subscription name or "API Usage Billing"), and agent name from settings.
7. **Model/billing formatting** — `formatModelAndBilling` determines if model name and billing type fit on one line or need splitting, with truncation.

## Exports
- `LayoutMode` — Type: 'horizontal' | 'compact'
- `LayoutDimensions` — Type: { leftWidth, rightWidth, totalWidth }
- `getLayoutMode(columns)` — Returns 'horizontal' if columns >= 70, else 'compact'
- `calculateLayoutDimensions(columns, layoutMode, optimalLeftWidth)` — Computes left/right panel widths with padding/border accounting
- `calculateOptimalLeftWidth(welcomeMessage, truncatedCwd, modelLine)` — Sizes left panel to fit widest content line + 4px padding, capped at 50
- `formatWelcomeMessage(username)` — Returns personalized or generic welcome message
- `truncatePath(path, maxLength)` — Width-aware middle-truncation of file paths preserving first/last segments
- `getRecentActivity()` — Async: loads and filters recent sessions, caches top 3
- `getRecentActivitySync()` — Returns cached activity synchronously
- `formatReleaseNoteForDisplay(note, maxWidth)` — Truncates release note text
- `getLogoDisplayData()` — Returns { version, cwd, billingType, agentName } for logo display
- `formatModelAndBilling(modelName, billingType, availableWidth)` — Returns { shouldSplit, truncatedModel, truncatedBilling }
- `getRecentReleaseNotesSync(maxItems)` — Returns recent changelog entries (source depends on USER_TYPE)

## Source
`logoV2Utils`
