## Purpose
Renders a compact horizontal logo header with model info, version, working directory, and optional upsells.

## Imports
- **Stdlib**: Math
- **External**: react, react/compiler-runtime
- **Internal**: hooks/useMainLoopModel, hooks/useTerminalSize, ink/stringWidth, ink/Box, ink/Text, state/AppState, utils/effort, utils/format, utils/fullscreen, utils/logoV2Utils, utils/model/model, OffscreenFreeze, AnimatedClawd, Clawd, GuestPassesUpsell, OverageCreditUpsell

## Logic
Gathers terminal size, app state, model, and display data. Computes truncated versions of version, model, billing, and working directory path to fit available width. Renders a horizontal layout with an animated or static Clawd icon alongside text information, conditionally including guest passes and overage credit upsells.

## Exports
- `CondensedLogo` - renders the compact logo header with model and directory info
