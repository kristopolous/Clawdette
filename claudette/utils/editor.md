# editor

## Purpose
Launches files in the user's external editor, handling both GUI editors (detached spawn) and terminal editors (blocking via Ink alt-screen handoff). Detects editor type, constructs platform-appropriate goto-line arguments, and resolves editor from VISUAL/EDITOR env vars or defaults.

## Imports
- **Stdlib**: `child_process`, `path`
- **External**: `lodash-es/memoize`
- **Internal**: `../ink/instances`, `./debug`, `./which`

## Logic
1. Editor detection: VISUAL env var → EDITOR env var → available commands (code, vi, nano) → Windows fallback (`start /wait notepad`)
2. GUI editor classification: checks basename against known GUI editors (code, cursor, windsurf, codium, subl, atom, gedit, notepad++, notepad)
3. Goto-line argument construction: VS Code family uses `-g file:line`, Sublime uses bare `file:line`, others don't support goto-line
4. GUI editors: spawn detached with stdio:'ignore', Windows uses shell:true for .cmd resolution, POSIX uses direct argv array (injection-safe)
5. Terminal editors: enter Ink alternate screen, spawnSync with stdio:inherit, exit alternate screen in finally block
6. Windows terminal editors: use shell:true so cmd.exe builtins like `start` resolve, manually quote args

## Exports
- `classifyGuiEditor(editor: string)` - sync, returns matched GUI family name or undefined for terminal editors. Uses basename so `/home/alice/code/bin/nvim` doesn't match 'code' via directory component
- `openFileInExternalEditor(filePath: string, line?)` - sync, launches file in user's editor. Returns true if launched, false if no editor available. GUI editors spawn detached; terminal editors block via alt-screen handoff
- `getExternalEditor` - memoized sync, returns editor string from VISUAL→EDITOR→available commands→Windows default

## Source
`editor`