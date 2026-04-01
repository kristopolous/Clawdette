## Purpose
Displays a notice informing users that the Opus model now defaults to 1M context window.

## Imports
- **Stdlib**: none
- **External**: react, react/compiler-runtime
- **Internal**: constants/figures, ink/Box, ink/Text, utils/config, utils/model/model, AnimatedAsterisk

## Logic
Checks if the Opus 1M merge feature is enabled and the notice has been shown fewer than 6 times. Renders an animated up-arrow asterisk followed by the context window upgrade message. Increments a seen counter on unmount to track impressions.

## Exports
- `shouldShowOpus1mMergeNotice` - checks if the Opus 1M merge notice should be displayed
- `Opus1mMergeNotice` - renders the Opus context upgrade notice
