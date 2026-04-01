## Purpose
Renders an ordered list with auto-numbered items and aligned markers.

## Imports
- **Stdlib**: none
- **External**: `react` (createContext, isValidElement, ReactNode, useContext), `react/compiler-runtime`
- **Internal**: `Box` from `ink.js`, `OrderedListItem`, `OrderedListItemContext` from `OrderedListItem.js`

## Logic
Counts the number of OrderedListItem children to calculate the maximum marker width for alignment, then maps over children wrapping each in OrderedListContext and OrderedListItemContext providers with padded markers (e.g., " 1.", " 2.", "10.") so all markers align vertically.

## Exports
- `OrderedList` - component that renders ordered list items with auto-numbered, width-aligned markers; attaches `Item` as a static property referencing OrderedListItem
