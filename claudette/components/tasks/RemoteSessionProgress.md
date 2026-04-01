## Purpose
Displays progress information for a remote agent session, showing review stage counts with animated rainbow text for ultrareview sessions or a simple completion ratio for standard sessions.

## Imports
- **Stdlib**: None
- **External**: `react` (useRef), `react/compiler-runtime`
- **Internal**: `constants/figures`, `hooks/useSettings`, `ink`, `utils/array`, `utils/thinking`

## Logic
1. **Review Progress Display**: For remote review sessions, renders an animated rainbow "ultrareview" label with stage-appropriate counts (found, verified, refuted) that smoothly tick toward target values.
2. **Animation**: Uses an animation frame clock to drive smooth count increments and rainbow color phase cycling, respecting reduced motion preferences.
3. **Standard Progress**: For non-review sessions, shows a completed/total ratio from the session's todo list.
4. **Status States**: Handles completed, failed, and running states with appropriate visual indicators.

## Exports
- `RemoteSessionProgress` - A component that renders progress for a remote agent session, either as an animated review indicator or a simple completion ratio.
- `formatReviewStageCounts` - Formats review stage counts (found, verified, refuted) into a human-readable string appropriate for the current stage.
- `RainbowText` - Renders text with a per-character rainbow gradient that can be phase-offset for animation.
- `useSmoothCount` - A hook that smoothly animates a count toward a target value, incrementing by one per animation frame.
- `ReviewRainbowLine` - Renders the animated ultrareview progress line with stage counts.
