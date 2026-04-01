# fullscreen

## Purpose
Belt-and-suspenders: in regular tmux TERM is screen-* or tmux-*;

## Imports
- **Stdlib**: child_process
- **Internal**: ../bootstrap/state.js, ./debug.js, ./envUtils.js, ./execFileNoThrow.js

## Items

### isTmuxControlModeEnvHeuristic
**Type**: Function

### probeTmuxControlModeSync
**Type**: Function

### isTmuxControlMode
**Type**: Function

### _resetTmuxControlModeProbeForTesting
**Type**: Function

### isFullscreenEnvEnabled
**Type**: Function

### isMouseTrackingEnabled
**Type**: Function

### isMouseClicksDisabled
**Type**: Function

### isFullscreenActive
**Type**: Function

### maybeGetTmuxMouseHint
**Type**: Function

### _resetForTesting
**Type**: Function

## Exports
- isTmuxControlMode
- _resetTmuxControlModeProbeForTesting
- isFullscreenEnvEnabled
- isMouseTrackingEnabled
- isMouseClicksDisabled
- isFullscreenActive
- maybeGetTmuxMouseHint
- _resetForTesting

## Source
`fullscreen.ts`