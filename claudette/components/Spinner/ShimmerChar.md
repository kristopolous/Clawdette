## Purpose
Renders a single character with shimmer highlighting when it is at or near the glimmer position.

## Imports
- **Stdlib**: None
- **External**: `react`
- **Internal**: `ink` (Text), `utils/theme` (Theme)

## Logic
1. Determines if the character index matches the glimmer index (highlighted) or is adjacent (near highlight)
2. Uses shimmer color when highlighted or near highlight, otherwise uses message color
3. Renders the character with the computed color

## Exports
- `ShimmerChar` - renders a character with shimmer color when at or adjacent to the glimmer index, otherwise uses base message color
