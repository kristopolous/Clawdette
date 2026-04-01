# ink/screen

## Purpose
Provides screen buffer and cell management for terminal rendering.

## Imports
- **Stdlib**: (none)
- **External**: `@alcalzone/ansi-tokenize`
- **Internal**: ink layout/geometry, ink termio/ansi, ink warn

## Logic
1. `CharPool` - character string pool for memory efficiency
2. Shared across all screens
3. Interned char IDs valid across screens
4. blitRegion can copy IDs directly (no re-interning)
5. diffEach can compare IDs as integers (no string lookup)
6. Index 0 = space, 1 = empty (spacer)
7. `stringMap` - Map<string, number> for string to index mapping
8. `ascii` - Int32Array for ASCII fast-path (charCode → index, -1 = not interned)
9. `intern` - interns character, returns index
10. ASCII fast-path: direct array lookup instead of Map.get
11. `get` - gets string by index
12. `HyperlinkPool` - hyperlink string pool shared across all screens
13. Index 0 = no hyperlink
14. `INVERSE_CODE` - SGR 7 (inverse) as AnsiCode
15. endCode '\x1b[27m' flags VISIBLE_ON_SPACE
16. Bit 0 of resulting styleId set - renderer won't skip inverted spaces as invisible
17. `BOLD_CODE` - SGR 1 (bold), endCode '\x1b[22m'
18. `UNDERLINE_CODE` - SGR 4 (underline), endCode '\x1b[24m'
19. `YELLOW_FG_CODE` - SGR 33 (yellow fg), endCode '\x1b[39m'
20. `StylePool` - style pool for ANSI code interning
21. `ids` - Map<string, number> for style ID mapping
22. `styles` - AnsiCode[][] array
23. `transitionCache` - cached transition strings
24. `none` - interned empty style
25. `inverseCache` - cached inverse styles
26. `currentMatchCache` - cached current match styles
27. `intern` - interns style, returns ID with bit 0 for visible space effect
28. `get` - recovers style from ID (strips bit-0 flag via >>> 1)
29. `transition` - returns pre-serialized ANSI string for style transition
30. `withInverse` - interns style with inverse added
31. `withCurrentMatch` - interns style with inverse + bold + yellow for current search match
32. `CellWidth` - enum for cell width (SpacerHead, SpacerTail, etc.)
33. `Cell` - cell type with char, width, styleId, hyperlinkId
34. `Screen` - screen buffer type with width, height, cells, charPool, hyperlinkPool, stylePool, noSelect
35. `createScreen` - creates screen buffer
36. `cellAtIndex` - gets cell at index
37. `setCellStyleId` - sets cell style ID
38. `blitRegion` - blits region from one screen to another
39. `diffEach` - diffs cells between screens
40. `initCharAscii` - initializes ASCII char lookup array
41. `hasVisibleSpaceEffect` - checks if style has visible effect on space
42. `Point`, `Rectangle`, `Size`, `unionRect` - geometry types
43. `BEL`, `ESC`, `SEP` - ANSI constants
44. `ansiCodesToString`, `diffAnsiCodes` - ANSI utilities
45. `AnsiCode` - ANSI code type

## Exports
- `CharPool` - character pool class
- `HyperlinkPool` - hyperlink pool class
- `StylePool` - style pool class
- `INVERSE_CODE`, `BOLD_CODE`, `UNDERLINE_CODE`, `YELLOW_FG_CODE` - ANSI code constants
- `CellWidth` - cell width enum
- `Cell` - cell type
- `Screen` - screen buffer type
- `createScreen` - creates screen
- `cellAtIndex` - gets cell at index
- `setCellStyleId` - sets cell style ID
- `blitRegion` - blits region
- `diffEach` - diffs cells
- (Geometry and ANSI types)
