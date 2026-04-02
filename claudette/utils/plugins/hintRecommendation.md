# hintRecommendation

## Purpose
Handles plugin-hint recommendations triggered by CLIs/SDKs emitting `<claude-code-hint />` tags to stderr. Manages show-once semantics and user opt-out.

## Imports
- **Internal**: `../../services/analytics/growthbook`, `../../services/analytics/index`, `../claudeCodeHints`, `../config`, `../debug`, `./installedPluginsManager`, `./marketplaceManager`, `./pluginIdentifier`, `./pluginPolicy`

## Logic
Two-phase hint processing:
1. **maybeRecordPluginHint** (sync pre-store gate) — Called by shell tools when a `type="plugin"` hint is detected. Drops the hint if: a dialog was already shown this session, user disabled hints, shown-plugins list hit the cap (100), plugin slug doesn't parse, marketplace isn't official, plugin is already installed, plugin is blocked by policy, or slug was already tried this session. Synchronous to avoid blocking shell tools.
2. **resolvePluginHint** (async) — Runs the marketplace lookup skipped by the sync gate. Returns `null` if plugin isn't in cache. Logs `tengu_plugin_hint_detected` analytics event.
3. State persists in `GlobalConfig.claudeCodeHints` — tracks shown plugins and disabled flag. Hard cap of 100 shown plugins bounds config growth.

## Exports
- `PluginHintRecommendation` - Type with `pluginId`, `pluginName`, `marketplaceName`, `pluginDescription?`, `sourceCommand`
- `maybeRecordPluginHint` - Sync pre-store gate to record a plugin hint (drops if already shown/disabled/etc.)
- `_resetHintRecommendationForTesting` - Reset session state (tests only)
- `resolvePluginHint` - Async marketplace lookup for pending hint, returns recommendation or `null`
- `markHintPluginShown` - Record that a prompt was surfaced (show-once semantics)
- `disableHintRecommendations` - User opted out of all future hint recommendations
