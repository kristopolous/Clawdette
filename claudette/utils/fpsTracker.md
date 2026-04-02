# fpsTracker

## Purpose
Tracks frame rendering performance metrics, calculating average FPS and the 1st percentile (worst-case) FPS from recorded frame durations.

## Imports
- (none - uses only built-in `performance.now()`)

## Logic
1. `FpsMetrics` type: { averageFps, low1PctFps }
2. `FpsTracker` class:
   - `frameDurations` - array of recorded frame durations in ms
   - `firstRenderTime` / `lastRenderTime` - timestamps from performance.now()
   - `record(durationMs)` - records a frame duration, captures first/last render timestamps
   - `getMetrics()` - calculates and returns metrics:
     - Returns undefined if no frames recorded or timestamps missing
     - Returns undefined if total time is <= 0
     - averageFps = totalFrames / (totalTimeMs / 1000)
     - low1PctFps = 1000 / p99 frame duration (p99 = 99th percentile worst frame)
     - Both values rounded to 2 decimal places
     - p99 index calculated as ceil(length * 0.01) - 1 on descending-sorted array

## Exports
- `FpsMetrics` - type for { averageFps: number, low1PctFps: number }
- `FpsTracker` - class for recording frame durations and computing FPS percentiles
