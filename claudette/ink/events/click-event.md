## Purpose
Represents a mouse click event fired on left-button release without drag, only when mouse tracking is enabled (inside <AlternateScreen>).

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: Event base class from ./event.js

## Logic
1. **ClickEvent Class**: Extends the base Event class with click-specific properties:
   - `col`: 0-indexed screen column of the click
   - `row`: 0-indexed screen row of the click
   - `localCol`: Click column relative to current handler's Box (recomputed before each handler)
   - `localRow`: Click row relative to current handler's Box (recomputed before each handler)
   - `cellIsBlank`: True if clicked cell has no visible content (both packed words are 0 in screen buffer)
2. **Event Bubbling**: Events bubble from deepest hit node up through parentNode hierarchy
3. **Propagation Control**: Handlers can call stopImmediatePropagation() to prevent ancestors' onClick from firing
4. **Blank Cell Handling**: Handlers can check cellIsBlank to ignore clicks on empty terminal space
5. **Coordinate Systems**: Provides both absolute screen coordinates and relative coordinates for handler convenience

## Exports
- `ClickEvent` - Class extending Event with click position and cell state information