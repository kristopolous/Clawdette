## Purpose
Parses SGR (Select Graphic Rendition) parameters and applies them to a TextStyle object, handling both semicolon and colon separated parameters for ANSI escape sequence styling.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: 
  - NamedColor, TextStyle, UnderlineStyle types from ./types.js
  - defaultStyle from ./types.js

## Logic
1. **Constants**:
   - NAMED_COLORS: Array of 16 named colors (8 standard + 8 bright) for ANSI colors 30-37, 90-97, 40-47, 100-107
   - UNDERLINE_STYLES: Array of underline style names for colon-prefixed SGR parameters

2. **Parameter Parsing**:
   - Param type: Represents a parsed SGR parameter with value, subparameters, and colon flag
   - parseParams(): Converts parameter string into Param[] array, handling both ; and : separators
   - parseExtendedColor(): Handles extended color specifications (8-bit indexed and 24-bit RGB)

3. **applySGR() Function**:
   - Main export that takes parameter string and current style, returns new style with SGR applied
   - Processes parameters sequentially:
     * 0: Reset to default style
     * 1-9: Text attributes (bold, dim, italic, underline, blink, inverse, hidden, strikethrough)
     * 21: Double underline
     * 22-29: Reset specific attributes (bold/dim, italic, underline, blink, inverse, hidden, strikethrough)
     * 53,55: Overline on/off
     * 30-37,90-97: Foreground named colors
     * 39: Default foreground
     * 40-47,100-107: Background named colors
     * 49: Default background
     * 38,48: Extended foreground/background colors (indexed or RGB)
     * 58: Underline color (indexed or RGB)
     * 59: Default underline color
   - Handles colon-prefixed parameters for extended underline styles
   - Properly manages parameter consumption for multi-parameter codes (like 38;5;index or 48;2;r;g;b)

## Exports
- `applySGR` - Function that parses SGR parameter string and applies it to a TextStyle, returning the updated style