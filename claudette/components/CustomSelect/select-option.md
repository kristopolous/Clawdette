## Purpose
Renders a single selectable option row within a select dropdown, wrapping the design system ListItem component.

## Imports
- **Stdlib**: none
- **External**: `react`, `react/compiler-runtime`
- **Internal**: `design-system/ListItem`

## Logic
Passes through focus, selection, description, and scroll arrow props to the underlying ListItem component with `styled=false`, allowing the parent select component to control all visual styling. The `declareCursor` prop controls whether this component declares the terminal cursor position.

## Exports
- `SelectOption` - React component that renders an option row with focus/selection states and optional scroll indicators
- `SelectOptionProps` - type defining props for the SelectOption component
