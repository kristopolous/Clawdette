## Purpose
Renders a single item in an ordered list with a marker prefix.

## Imports
- **Stdlib**: none
- **External**: `react` (createContext, ReactNode, useContext), `react/compiler-runtime`
- **Internal**: `Box`, `Text` from `ink.js`

## Logic
Creates a React context to receive the list marker string, consumes it via useContext, and renders the marker with dimmed color alongside the children in a column layout within a horizontal box with gap spacing.

## Exports
- `OrderedListItemContext` - context providing the marker string for list items
- `OrderedListItem` - component that renders a list item with its marker and children
