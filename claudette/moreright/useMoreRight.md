## Purpose
Stub implementation of an internal hook for external builds, providing no-op passthrough functions.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: None

## Logic
Self-contained stub with no relative imports to avoid resolution errors during external build typechecking. Returns no-op implementations that always allow queries, do nothing on turn completion, and render nothing.

## Exports
- `useMoreRight` - hook stub accepting enabled, setMessages, inputValue, setInputValue, and setToolJSX arguments; returns onBeforeQuery (always resolves true), onTurnComplete (no-op), and render (returns null)
