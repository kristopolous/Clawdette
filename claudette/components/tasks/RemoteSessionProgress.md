# components/tasks/RemoteSessionProgress

## Purpose
Provides remote session progress component with review stage counts and rainbow text animation.

## Imports
- **Stdlib**: (none)
- **External**: `react`, `react/compiler-runtime`
- **Internal**: tasks RemoteAgentTask, types utils, constants figures, hooks useSettings, ink, array, thinking

## Logic
1. `TICK_MS` (80) - animation tick interval
2. `ReviewStage` - RemoteAgentTaskState['reviewProgress']['stage']
3. `formatReviewStageCounts` - formats review stage counts for display
4. Pre-stage (no stage field): "{found} found · {verified} verified"
5. synthesizing stage: "{verified} verified · {refuted} refuted · deduping" (hides refuted if 0)
6. verifying stage: "{found} found · {verified} verified · {refuted} refuted" (hides refuted if 0)
7. finding stage: "{found} found" or "finding" if found is 0
8. `RainbowText` - renders per-character rainbow gradient text
9. Uses phase offset for color cycling on each animation frame
10. Maps each character to Text with getRainbowColor(i + phase)
11. `useSmoothCount` - smooth-ticks count toward target, +1 per frame
12. Same pattern as token counter in SpinnerAnimationRow
13. Ref survives re-renders, animation clock drives tick
14. Target jumps (2→5) display as 2→3→4→5 instead of snapping
15. When snap set (reduced motion or frozen clock), bypasses tick and jumps to target
16. `DIAMOND_FILLED`, `DIAMOND_OPEN` - diamond figure constants
17. `useSettings` - gets settings
18. `Text`, `useAnimationFrame` - ink components/hooks
19. `count` - count array elements
20. `getRainbowColor` - gets rainbow color for index

## Exports
- `TICK_MS` - tick interval constant
- `ReviewStage` - review stage type
- `formatReviewStageCounts` - formats review stage counts
- `RainbowText` - rainbow text component
- `useSmoothCount` - smooth count hook
