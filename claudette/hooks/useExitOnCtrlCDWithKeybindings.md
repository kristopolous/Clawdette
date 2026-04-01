## Purpose
Convenience wrapper that wires `useExitOnCtrlCD` with the standard `useKeybindings` hook; re-exports `ExitState` type.

## Imports
- **Internal**:
  - `./keybindings/useKeybinding` (useKeybindings)
  - `/useExitOnCtrlCD` (useExitOnCtrlCD, ExitState)

## Logic
- Exports `ExitState` type for consumers
- Hook simply forwards to `useExitOnCtrlCD(useKeybindings, onInterrupt, onExit, isActive)`
- This is the typical way components hook into exit-on-Ctrl-C/D behavior

## Exports
- `useExitOnCtrlCDWithKeybindings` - Hook `(onExit?: () => void, onInterrupt?: () => boolean, isActive?: boolean) => ExitState`
- `ExitState` - Type `{ pending: boolean, keyName: 'Ctrl-C' | 'Ctrl-D' | null }`
