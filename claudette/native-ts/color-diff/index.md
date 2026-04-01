## Purpose
Pure TypeScript port of a Rust color-diff module that renders syntax-highlighted diffs with ANSI terminal escapes, word-level change highlighting, and theme support.

## Imports
- **Stdlib**: `path`
- **External**: `diff`, `highlight.js`
- **Internal**: `../../ink/stringWidth`, `../../utils/log`

## Logic
Builds color themes (Monokai for dark, GitHub for light, ANSI fallback) mapping highlight.js scopes to RGB colors measured from the original Rust syntect output. Detects language via filename, extension, and shebang. Renders diffs by parsing hunk markers, computing word-level diff ranges using diffArrays, applying syntax highlighting per line, then running a transform pipeline that removes newlines, applies word-diff backgrounds, wraps text to width, adds line numbers and markers, and converts to ANSI escape sequences with truecolor or 256-color fallback.

## Exports
- `Hunk` - type representing a diff hunk with old/new start lines, line counts, and line content
- `SyntaxTheme` - type representing a syntax theme name and source
- `NativeModule` - type defining the module interface with ColorDiff, ColorFile, and getSyntaxTheme
- `ColorDiff` - class that renders a single diff hunk with syntax highlighting, word-diff, line numbers, and theme support
- `ColorFile` - class that renders an entire file with syntax highlighting and line numbers
- `getSyntaxTheme` - returns the default syntax theme name for a given inference provider theme
- `getNativeModule` - lazy loader returning the native module interface
- `ColorDiffClass` - type alias for the ColorDiff class
- `ColorFileClass` - type alias for the ColorFile class
- `__test` - object exposing internal functions for testing (tokenize, findAdjacentPairs, wordDiffStrings, ansi256FromRgb, colorToEscape, detectColorMode, detectLanguage)
