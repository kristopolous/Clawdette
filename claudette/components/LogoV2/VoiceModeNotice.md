## Purpose
Displays a one-time notice informing users that voice mode is available and how to enable it.

## Imports
- **Stdlib**: none
- **External**: react, react/compiler-runtime, bun:bundle/feature
- **Internal**: ink/Box, ink/Text, utils/config, utils/settings/settings, voice/voiceModeEnabled, AnimatedAsterisk, Opus1mMergeNotice

## Logic
Conditionally renders based on the VOICE_MODE feature flag. Shows the notice only when voice mode is enabled, voice is not already active, the notice has been shown fewer than 3 times, and the Opus 1M merge notice is not being shown. Increments a seen counter on unmount to track impressions.

## Exports
- `VoiceModeNotice` - renders the voice mode availability notice when eligible
