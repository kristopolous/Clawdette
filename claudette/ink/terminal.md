# ink/terminal

## Purpose
Provides terminal capability detection and writes optimized diff patches to terminal output.

## Imports
- **Stdlib**: `stream`
- **External**: `semver`
- **Internal**: utils env/semver, ink clearTerminal, ink frame, ink termio/csi/dec/osc

## Logic
1. `Progress` - { state, percentage? }
2. state: 'running' | 'completed' | 'error' | 'indeterminate'
3. `isProgressReportingAvailable` - checks if terminal supports OSC 9;4 progress
4. Only available if process.stdout.isTTY
5. Excludes Windows Terminal (process.env.WT_SESSION) - interprets as notifications
6. ConEmu: checks ConEmuANSI, ConEmuPID, ConEmuTask env vars (all versions)
7. Ghostty: checks TERM_PROGRAM_VERSION >= 1.2.0
8. iTerm2: checks TERM_PROGRAM_VERSION >= 3.6.6
9. `isSynchronizedOutputSupported` - checks if terminal supports DEC mode 2026
10. BSU/ESU sequences prevent visible flicker during redraws
11. Returns false if tmux (parses/proxies every byte but doesn't implement DEC 2026)
12. Checks TERM_PROGRAM: iTerm.app, WezTerm, WarpTerminal, ghostty, contour, vscode, alacritty
13. Checks TERM: kitty (TERM includes 'kitty' or KITTY_WINDOW_ID set), xterm-ghostty, foot*, *alacritty*
14. Checks ZED_TERM for Zed editor
15. Checks WT_SESSION for Windows Terminal
16. Checks VTE_VERSION >= 6800 for VTE-based terminals (GNOME Terminal, Tilix)
17. `setXtversionName` - records XTVERSION response from terminal
18. Called once from App when reply arrives on stdin
19. No-op if already set (defend against re-probe)
20. `isXtermJs` - checks if running inxterm-based terminal
21. Checks TERM_PROGRAM === 'vscode' or xtversionName?.startsWith(xterm')
22. TERM_PROGRAM not forwarded over SSH, XTVERSION survives SSH
23. `supportsExtendedKeys` - checks if terminal handles extended key reporting
24. Kitty keyboard protocol (CSI >1u) and/or xterm modifyOtherKeys (CSI >4;2m)
25. EXTENDED_KEYS_TERMINALS: iTerm.app, kitty, WezTerm, ghostty, tmux, windows-terminal
26. `hasCursorUpViewportYankBug` - checks if terminal scrolls viewport on cursor-up
27. Windows conhost follows cursor into scrollback (microsoft/terminal#14774)
28. Returns true if platform === 'win32' or WT_SESSION set (catches WSL-in-Windows-Terminal)
29. `SYNC_OUTPUT_SUPPORTED` - cached boolean for synchronized output support
30. `Terminal` - { stdout: Writable, stderr: Writable }
31. `writeDiffToTerminal` - writes diff of patches to terminal
32. Returns early if diff.length === 0
33. useSync = !skipSyncMarkers (BSU/ESU wrapping is opt-out)
34. Buffers all writes into single string to avoid multiple write calls
35. Handles: stdout, clear, clearTerminal, cursorHide, cursorShow, cursorMove, cursorTo, carriageReturn, hyperlink, styleStr
36. Adds ESU at end if useSync, flushes buffer to stdout
37. `coerce` - semver coerce function
38. `Writable` - writable stream type
39. `env` - env utilities
40. `gte` - semver greater than or equal
41. `getClearTerminalSequence` - gets clear terminal sequence
42. `Diff` - diff type
43. `cursorMove`, `cursorTo`, `eraseLines` - CSI functions
44. `BSU`, `ESU`, `HIDE_CURSOR`, `SHOW_CURSOR` - DEC constants
45. `link` - OSC link function

## Exports
- `Progress` - progress type
- `isProgressReportingAvailable` - checks progress reporting support
- `isSynchronizedOutputSupported` - checks synchronized output support
- `setXtversionName` - records XTVERSION response
- `isXtermJs` - checksxterm terminal
- `supportsExtendedKeys` - checks extended keys support
- `hasCursorUpViewportYankBug` - checks cursor-up viewport yank bug
- `SYNC_OUTPUT_SUPPORTED` - synchronized output supported flag
- `Terminal` - terminal type
- `writeDiffToTerminal` - writes diff to terminal
