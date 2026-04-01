## Purpose
Displays a footer status indicator showing the current teammate count with optional selection hint.

## Imports
- **Stdlib**: none
- **External**: react, react/compiler-runtime
- **Internal**: ink, state/AppState

## Logic
1. Reads team context from app state to derive the total teammate count (excluding team-lead)
2. Returns null when there are no teammates
3. Renders the teammate count text with inverse styling when selected
4. Optionally appends an "Enter to view" hint when teams are selected and hint is enabled

## Exports
- `TeamStatus` - renders a compact footer showing teammate count with optional navigation hint
