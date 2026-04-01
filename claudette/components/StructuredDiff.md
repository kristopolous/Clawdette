## Purpose
Renders a syntax-highlighted diff view with an aggressive caching strategy to avoid re-computation on remount.

## Imports
- **Stdlib**: None
- **External**: `diff`, `react`, `react/compiler-runtime`
- **Internal**: `hooks/useSettings.js`, `ink.js` (Box, NoSelect, RawAnsi, useTheme), `utils/fullscreen.js`, `utils/sliceAnsi.js`, `StructuredDiff/colorDiff.js`, `StructuredDiff/Fallback.js`

## Logic
Uses a WeakMap-based render cache keyed by patch hunk to store pre-computed syntax-highlighted diff output and pre-split gutter/content columns. Computes gutter width based on line number digits. Falls back to StructuredDiffFallback when the native color diff module is unavailable or rendering fails. In fullscreen mode, splits output into side-by-side gutter and content columns using RawAnsi for zero-overhead ANSI rendering.

## Exports
- `StructuredDiff` - Memoized React component that renders a cached, syntax-highlighted diff with optional split gutter layout
