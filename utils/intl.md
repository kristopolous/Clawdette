# utils/intl

## Purpose
Provides cached Intl object instances for Unicode text processing.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `graphemeSegmenter` - cached Intl.Segmenter for grapheme clusters
2. `wordSegmenter` - cached Intl.Segmenter for word segmentation
3. `getGraphemeSegmenter` - gets/creates grapheme segmenter
4. `firstGrapheme` - extracts first grapheme cluster from string
5. `lastGrapheme` - extracts last grapheme cluster from string
6. `getWordSegmenter` - gets/creates word segmenter
7. `rtfCache` - Map cache for RelativeTimeFormat instances
8. `getRelativeTimeFormat` - gets cached RelativeTimeFormat
9. Keyed by style (long/short/narrow) and numeric (always/auto)
10. `cachedTimeZone` - cached system timezone
11. `getTimeZone` - gets cached system timezone
12. Intl constructors are expensive (~0.05-0.1ms each)
13. Caching ensures cost paid only once per process lifetime
14. Lazy initialization ensures cost only when needed

## Exports
- `getGraphemeSegmenter` - gets grapheme segmenter
- `firstGrapheme` - extracts first grapheme
- `lastGrapheme` - extracts last grapheme
- `getWordSegmenter` - gets word segmenter
- `getRelativeTimeFormat` - gets relative time format
- `getTimeZone` - gets system timezone
