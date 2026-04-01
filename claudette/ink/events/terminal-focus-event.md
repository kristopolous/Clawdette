## Purpose
Represents an event fired when the terminal window gains or loses focus, using DECSET 1004 focus reporting.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: Event base class from ./event

## Logic
1. **TerminalFocusEventType**: Defines the event type as a union of 'terminalfocus' (gain focus) and 'terminalblur' (lose focus)
2. **TerminalFocusEvent Class**: Extends the base Event class:
   - Stores the event type in a readonly property
   - Constructor takes the event type and calls super()
   - The terminal sends CSI I (\x1b[I) on focus gain and CSI O (\x1b[O) on focus loss when DECSET 1004 focus reporting is enabled

## Exports
- `TerminalFocusEventType` - Union type: 'terminalfocus' | 'terminalblur'
- `TerminalFocusEvent` - Class extending Event with a readonly type property