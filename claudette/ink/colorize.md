# ink/colorize

## Purpose
Provides color utilities for terminal text styling with chalk.

## Imports
- **Stdlib**: (none)
- **External**: `chalk`
- **Internal**: ink styles

## Logic
1. `boostChalkLevelForXtermJs` - boosts chalk level forxterm terminals
2.xterm (VS Code, Cursor, code-server, Coder) supports truecolor since 2017
3. code-server/Coder containers often don't set COLORTERM=truecolor
4. chalk's supports-color doesn't recognize TERM_PROGRAM=vscode
5. Falls through to -256color regex → level 2
6. At level 2, chalk.rgb() downgrades to nearest 6×6×6 cube color
7. Gated on level === 2 (not < 3) to respect NO_COLOR / FORCE_COLOR=0
8. Must run BEFORE tmux clamp
9. `clampChalkLevelForTmux` - clamps chalk level for tmux
10. tmux parses truecolor SGR correctly but client-side emitter only re-emits if outer terminal advertises Tc/RGB
11. Default tmux config doesn't set this
12. Clamping to level 2 makes chalk emit 256-color which tmux passes through cleanly
13. Users with `terminal-overrides ,*:Tc` get technically-unnecessary downgrade
14. CLAUDE_CODE_TMUX_TRUECOLOR env var skips clamp (escape hatch)
15. $TMUX is pty-lifecycle env var set by tmux itself
16. `CHALK_BOOSTED_FOR_XTERMJS` - true if chalk was boosted
17. `CHALK_CLAMPED_FOR_TMUX` - true if chalk was clamped
18. `ColorType` - 'foreground' | 'background'
19. `RGB_REGEX` - /^rgb\(\s?(\d+),\s?(\d+),\s?(\d+)\s?\)$/
20. `ANSI_REGEX` - /^ansi256\(\s?(\d+)\s?\)$/
21. `colorize` - applies color to string based on format
22. Returns str if !color
23. ansi: prefix - handles 16 standard + 8 bright ANSI colors
24. #hex - uses chalk.hex() or chalk.bgHex()
25. ansi256(N) - uses chalk.ansi256() or chalk.bgAnsi256()
26. rgb(r,g,b) - uses chalk.rgb() or chalk.bgRgb()
27. `applyTextStyles` - applies TextStyles to string using chalk
28. Applies in reverse order of desired nesting (chalk wraps, later calls become outer)
29. Order: text modifiers first, then foreground, then background last
30. Handles: inverse, strikethrough, underline, italic, bold, dim, color, backgroundColor
31. `applyColor` - shorthand for applying foreground color
32. `chalk` - chalk library
33. `Color`, `TextStyles` - style types

## Exports
- `ColorType` - color type
- `RGB_REGEX`, `ANSI_REGEX` - color regexes
- `colorize` - applies color
- `applyTextStyles` - applies text styles
- `applyColor` - applies foreground color
- `CHALK_BOOSTED_FOR_XTERMJS` - chalk boosted flag
- `CHALK_CLAMPED_FOR_TMUX` - chalk clamped flag
