## Purpose
Provides a React context to indicate when shell output should be shown in full rather than truncated.

## Imports
- **Stdlib**: None
- **External**: `react`, `react/compiler-runtime`
- **Internal**: None

## Logic
Creates a boolean context (defaulting to false) that child components can consume to determine whether to display full shell output. The provider sets the context value to true, and the hook returns the current context value.

## Exports
- `ExpandShellOutputProvider` - Context provider that sets shell output expansion to true for its children
- `useExpandShellOutput` - Hook that returns true when rendered inside an ExpandShellOutputProvider
