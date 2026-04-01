## Purpose
Defines TypeScript types representing the semantic meaning of ANSI escape sequences, providing a structured representation of parsed terminal actions rather than raw string sequences.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: None specified (self-contained module)

## Logic
1. **Color Types**:
   - `NamedColor`: Union of 16 color names (black, red, green, yellow, blue, magenta, cyan, white, brightBlack, etc.)
   - `Color`: Union type for color specifications:
     * `{ type: 'named'; name: NamedColor }` - 16-color palette
     * `{ type: 'indexed'; index: number }` - 256-color palette (0-255)
     * `{ type: 'rgb'; r: number; g: number; b: number }` - True color (0-255 per channel)
     * `{ type: 'default' }` - Default terminal color

2. **Text Style Types**:
   - `UnderlineStyle`: Union of underline variations (none, single, double, curly, dotted, dashed)
   - `TextStyle`: Object representing complete text styling state:
     * Boolean flags: bold, dim, italic, blink, inverse, hidden, strikethrough, overline
     * Underline style: UnderlineStyle union
     * Colors: fg (foreground), bg (background), underlineColor (all Color type)
   - `defaultStyle()`: Function returning reset/default text style
   - `stylesEqual()`: Function comparing two TextStyle objects for equality
   - `colorsEqual()`: Function comparing two Color objects for equality

3. **Action Types** (Parser Output):
   - `CursorDirection`: Union for cursor movement directions (up, down, forward, back)
   - `CursorAction`: Union of cursor operations:
     * Movement: { type: 'move'; direction: CursorDirection; count: number }
     * Positioning: { type: 'position'; row: number; col: number }, { type: 'column'; col: number }, { type: 'row'; row: number }
     * Save/restore: { type: 'save' }, { type: 'restore' }
     * Visibility: { type: 'show' }, { type: 'hide' }
     * Style: { type: 'style'; style: 'block' | 'underline' | 'bar'; blinking: boolean }
     * Line movement: { type: 'nextLine'; count: number }, { type: 'prevLine'; count: number }
   - `EraseAction`: Union of erase operations:
     * Display: { type: 'display'; region: 'toEnd' | 'toStart' | 'all' | 'scrollback' }
     * Line: { type: 'line'; region: 'toEnd' | 'toStart' | 'all' }
     * Characters: { type: 'chars'; count: number }
   - `ScrollAction`: Union of scroll operations:
     * { type: 'up'; count: number }, { type: 'down'; count: number }
     * { type: 'setRegion'; top: number; bottom: number }
   - `ModeAction`: Union of mode setting operations:
     * { type: 'alternateScreen'; enabled: boolean }
     * { type: 'bracketedPaste'; enabled: boolean }
     * { type: 'mouseTracking'; mode: 'off' | 'normal' | 'button' | 'any' }
     * { type: 'focusEvents'; enabled: boolean }
   - `LinkAction`: Union for OSC 8 hyperlink handling:
     * { type: 'start'; url: string; params?: Record<string, string> }
     * { type: 'end' }
   - `TitleAction`: Union for OSC title/icon manipulation:
     * { type: 'windowTitle'; title: string }
     * { type: 'iconName'; name: string }
     * { type: 'both'; title: string }
   - `TabStatusAction`: Object for OSC 21337 tab status with optional nullable fields:
     * indicator?: Color | null
     * status?: string | null
     * statusColor?: Color | null
   - Text segment types:
     * `TextSegment`: { type: 'text'; text: string; style: TextStyle }
     * `Grapheme`: { value: string; width: 1 | 2 } (visual character unit with display width)
   - `Action`: Union of all possible parser outputs:
     * Text: { type: 'text'; graphemes: Grapheme[]; style: TextStyle }
     * All action types above (cursor, erase, scroll, mode, link, title, tabStatus)
     * Style change: { type: 'sgr'; params: string }
     * Control characters: { type: 'bell' }, { type: 'reset' }
     * Unknown: { type: 'unknown'; sequence: string }

## Exports
All the types and functions listed above are exported for use by the ANSI parser and related modules.