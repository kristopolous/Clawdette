## Purpose
Provides a semantic ANSI escape sequence parser that converts raw escape sequences into structured actions, enabling text rendering with proper styling, cursor control, and terminal feature support.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: 
  - Parser from ./termio/parser.js
  - All types and helper functions from ./termio/types.js

## Logic
1. **Parser Re-export**: Re-exports the Parser class from termio/parser.js for external use
2. **Type Re-exports**: Re-exports all ANSI parser semantic types:
   * Action - Union of all possible parser outputs (text, cursor, erase, etc.)
   * Color - Named, indexed, RGB, or default color specification
   * CursorAction/CursorDirection - Cursor movement and positioning operations
   * EraseAction - Screen/line/character erasure operations
   * Grapheme - Visual character unit with display width information
   * LinkAction - OSC 8 hyperlink start/end operations
   * ModeAction - Terminal mode settings (alternate screen, mouse tracking, etc.)
   * NamedColor - 16-color palette names
   * ScrollAction - Display scrolling operations
   * TextSegment - Styled text segment for rendering
   * TextStyle - Complete text styling state (bold, dim, colors, etc.)
   * TitleAction - OSC title/icon manipulation operations
   * UnderlineStyle - Underline variation types
3. **Helper Function Re-exports**: Re-exports color/style comparison utilities:
   * colorsEqual - Compares two Color objects for equality
   * defaultStyle - Returns reset/default text style
   * stylesEqual - Compares two TextStyle objects for equality

## Usage
The module provides a complete ANSI parsing solution:
```typescript
import { Parser } from './termio.js'
import type { Action } from './termio.js'

const parser = new Parser()
const actions: Action[] = parser.feed('\x1b[31mred\x1b[0m')
// => [{ type: 'text', graphemes: [...], style: { fg: { type: 'named', name: 'red' }, ... } }]
```

Key features include semantic output (structured actions vs string tokens), streaming/incremental parsing, style state maintenance, and comprehensive sequence support (SGR, CSI, OSC, ESC).

## Exports
- `Parser` - Main parser class with feed() method for streaming ANSI sequence processing
- All Action, Color, Cursor*, EraseAction, Grapheme, LinkAction, ModeAction, NamedColor, ScrollAction, TextSegment, TextStyle, TitleAction, UnderlineStyle types
- `colorsEqual`, `defaultStyle`, `stylesEqual` - Helper functions for color/style comparison