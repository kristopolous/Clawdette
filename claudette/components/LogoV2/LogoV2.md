## Purpose
Renders the main logo/header area with adaptive layout (compact, horizontal, or vertical) based on terminal width, including character art, model info, feeds, and various notices.

## Imports
- **Stdlib**: Math, process
- **External**: react, react/compiler-runtime, bun:bundle/feature
- **Internal**: ink/Box, ink/Text, ink/color, hooks/useTerminalSize, ink/stringWidth, utils/logoV2Utils, utils/format, utils/file, Clawd, FeedColumn, feedConfigs, utils/config, utils/systemTheme, utils/settings/settings, utils/debug, projectOnboardingState, CondensedLogo, OffscreenFreeze, utils/releaseNotes, services/api/dumpPrompts, utils/envUtils, utils/startupProfiler, EmergencyTip, VoiceModeNotice, Opus1mMergeNotice, GuestPassesUpsell, OverageCreditUpsell, utils/stringUtils, state/AppState, utils/effort, hooks/useMainLoopModel, utils/model/model, utils/sandbox/sandbox-adapter

## Logic
Determines layout mode based on terminal columns. In condensed mode, renders CondensedLogo with various notices. In compact mode, renders a centered bordered layout with welcome message, character art, and model info. In full mode, renders a two-panel layout with character art and info on the left, and a dynamic feed column on the right (onboarding, recent activity, guest passes, overage credits, or whats new). Always appends notices for voice mode, Opus merge, channels, debug mode, emergency tips, tmux sessions, announcements, and sandbox status.

## Exports
- `LogoV2` - renders the main adaptive logo/header area with feeds and notices
