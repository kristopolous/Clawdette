# components/Spinner/GlimmerMessage

## Purpose
Provides glimmer message component for animated message display.

## Imports
- **Stdlib**: (none)
- **External**: `react`, `react/compiler-runtime`
- **Internal**: ink stringWidth, ink, intl, theme, Spinner types/utils

## Logic
1. `Props` - { message, mode, messageColor, glimmerIndex, flashOpacity, shimmerColor, stalledIntensity? }
2. `ERROR_RED` - { r: 171, g: 43, b: 63 } for error color
3. `GlimmerMessage` - React component for glimmer message
4. Uses React compiler runtime (_c) for memoization
5. Gets theme via useTheme and getTheme
6. Segments message into graphemes via getGraphemeSegmenter
7. Calculates message width via stringWidth
8. Calculates glimmer position based on glimmerIndex
9. Handles spinner modes: 'spinner', 'glimmer', 'thinking'
10. Applies stalled intensity for red transition when tokens stop
11. Interpolates colors for shimmer effect
12. Renders Text components with appropriate colors
13. `stringWidth` - gets string width
14. `useTheme` - gets current theme
15. `getGraphemeSegmenter` - gets grapheme segmenter
16. `getTheme`, `Theme` - theme functions/types
17. `interpolateColor`, `parseRGB`, `toRGBColor` - color utilities
18. `SpinnerMode` - spinner mode type

## Exports
- `ERROR_RED` - error red color constant
- `GlimmerMessage` - glimmer message component
